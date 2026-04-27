import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

/** The Navcoin block at which the Navio mainnet activates and the swap window opens. */
const TARGET_BLOCK = 10_500_000;
/** Historical Navcoin Proof-of-Stake block time. */
const BLOCK_TIME_SEC = 30;
/** Navcoin explorer block API. We only need the latest block, so size=1. */
const API_URL = 'https://explorer.navcoin.org/api/block?sort=height:desc&size=1&page=1';
/** Poll cadence. Matches the expected block interval. */
const POLL_MS = 30_000;

interface Tip {
  height: number;
  /** unix ms */
  at: number;
}

export default function Bridge() {
  const [tip, setTip] = useState<Tip | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [now, setNow] = useState(() => Date.now());

  // Tick every second so the countdown updates smoothly.
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  // Poll the explorer for the chain tip.
  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    async function fetchTip() {
      try {
        const res = await fetch(API_URL, { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: unknown = await res.json();
        const height =
          Array.isArray(data) && data.length > 0
            ? (data[0] as { height?: unknown }).height
            : null;
        if (typeof height === 'number' && Number.isFinite(height)) {
          if (!cancelled) {
            setTip({ height, at: Date.now() });
            setError(null);
          }
        } else {
          throw new Error('Unexpected API response shape');
        }
      } catch (e) {
        if (!cancelled) {
          const msg = e instanceof Error ? e.message : 'Unknown error';
          setError(`Could not reach explorer.navcoin.org · ${msg}`);
        }
      } finally {
        if (!cancelled) {
          timer = setTimeout(fetchTip, POLL_MS);
        }
      }
    }

    fetchTip();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, []);

  // Interpolate the displayed height upward between polls so the counter ticks smoothly.
  // The next successful poll snaps `tip` back to the truthful value, correcting any drift.
  const current =
    tip !== null ? tip.height + Math.floor((now - tip.at) / 1000 / BLOCK_TIME_SEC) : null;
  const remaining = current !== null ? Math.max(0, TARGET_BLOCK - current) : null;
  const secsLeft = remaining !== null ? remaining * BLOCK_TIME_SEC : null;
  const eta = secsLeft !== null ? new Date(now + secsLeft * 1000) : null;
  const isLive = remaining === 0;
  const pct = current !== null ? Math.min(100, (current / TARGET_BLOCK) * 100) : 0;

  const days = secsLeft !== null ? Math.floor(secsLeft / 86400) : null;
  const hours = secsLeft !== null ? Math.floor((secsLeft / 3600) % 24) : null;
  const minutes = secsLeft !== null ? Math.floor((secsLeft / 60) % 60) : null;
  const seconds = secsLeft !== null ? Math.floor(secsLeft % 60) : null;

  return (
    <div className="max-w-4xl mx-auto px-4 pt-12 pb-24 space-y-12">
      {/* HEADER */}
      <section className="text-center space-y-6">
        <div className="mono text-[10px] tracking-[0.3em] uppercase text-neon-pink/80 inline-flex items-center gap-2">
          <span className="neon-dot h-1.5 w-1.5 animate-pulseRing" />
          {isLive ? 'Swap live' : 'Swap opens at block 10,500,000'}
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          <span className="gradient-text-pink">
            {isLive ? 'Swap to Navio.' : 'Counting down to mainnet.'}
          </span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          The Navcoin → Navio swap window opens when the Navcoin chain reaches
          block <span className="mono text-neon-blue">10,500,000</span>.
        </p>
      </section>

      {/* COUNTDOWN CARD */}
      <section>
        <div className="glow-card gradient-border space-y-8">
          <div className="flex items-baseline justify-between flex-wrap gap-3">
            <div>
              <div className="mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2 inline-flex items-center gap-2">
                Current Navcoin block
                {tip && (
                  <span className="inline-flex items-center gap-1 text-neon-green/80">
                    <span className="neon-dot h-1.5 w-1.5" />
                    live
                  </span>
                )}
              </div>
              <div className="mono text-4xl sm:text-5xl gradient-text leading-none tabular-nums">
                {current !== null ? current.toLocaleString() : '—'}
              </div>
            </div>
            <div className="text-right">
              <div className="mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2">
                Target
              </div>
              <div className="mono text-2xl sm:text-3xl text-white/85 tabular-nums">
                {TARGET_BLOCK.toLocaleString()}
              </div>
            </div>
          </div>

          <ProgressBar pct={pct} />

          {!isLive && days !== null && (
            <div className="grid grid-cols-4 gap-3 sm:gap-4 pt-2">
              <Stat label="Days" value={days.toString()} />
              <Stat label="Hours" value={hours!.toString().padStart(2, '0')} />
              <Stat label="Minutes" value={minutes!.toString().padStart(2, '0')} />
              <Stat label="Seconds" value={seconds!.toString().padStart(2, '0')} />
            </div>
          )}

          {!isLive && remaining !== null && eta && (
            <div className="text-center text-sm text-white/55 pt-2 border-t border-white/5">
              <div>
                <span className="mono text-neon-blue tabular-nums">
                  {remaining.toLocaleString()}
                </span>{' '}
                blocks left · estimated activation around{' '}
                <span className="text-white/85 mono">
                  {eta.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}
                </span>
              </div>
              <div className="text-[11px] text-white/35 mono mt-2">
                ETA assumes the historical ~30 second Navcoin block time.
              </div>
            </div>
          )}

          {error && (
            <div className="text-center text-sm text-neon-pink/80 border-t border-white/5 pt-4">
              {error}. Retrying in {POLL_MS / 1000} seconds…
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        {isLive ? (
          <a
            href="https://bridge.nav.io"
            target="_blank"
            rel="noreferrer"
            className="neon-btn"
          >
            Open the bridge
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : (
          <p className="text-white/55 text-sm max-w-xl mx-auto">
            When the activation block is reached, this page will link out to{' '}
            <span className="mono text-neon-blue">bridge.nav.io</span> for the Navcoin → Navio swap.
          </p>
        )}
      </section>

      {/* SOURCE */}
      <section className="text-center text-[11px] text-white/35 mono tracking-wide">
        Block height polled from explorer.navcoin.org every {POLL_MS / 1000}s
        {tip && <> · last update {Math.max(0, Math.floor((now - tip.at) / 1000))}s ago</>}
      </section>
    </div>
  );
}

function ProgressBar({ pct }: { pct: number }) {
  return (
    <div className="relative h-2.5 rounded-full bg-white/[0.04] overflow-hidden border border-white/10">
      <div
        className="absolute inset-y-0 left-0 transition-[width] duration-700"
        style={{
          width: `${pct}%`,
          background: 'linear-gradient(90deg, #4fb3ff, #7c7eff, #f25d9c)',
          boxShadow: '0 0 14px rgba(124, 126, 255, 0.55)',
        }}
      />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center rounded-xl border border-white/10 bg-white/[0.02] p-3 sm:p-4">
      <div className="mono text-2xl sm:text-3xl text-white tabular-nums">{value}</div>
      <div className="mono text-[10px] tracking-[0.22em] uppercase text-white/40 mt-1.5">
        {label}
      </div>
    </div>
  );
}
