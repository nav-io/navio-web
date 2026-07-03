import { useEffect, useState } from 'react';

/** The Navcoin block at which the Navio mainnet activates and the swap window opens. */
export const TARGET_BLOCK = 10_500_000;
/** Historical Navcoin Proof-of-Stake block time. */
export const BLOCK_TIME_SEC = 30;
/** Navcoin explorer block API. We only need the latest block, so size=1. */
const API_URL = 'https://explorer.navcoin.org/api/block?sort=height:desc&size=1&page=1';
/** Poll cadence. Matches the expected block interval. */
export const POLL_MS = 30_000;

interface Tip {
  height: number;
  /** unix ms */
  at: number;
}

export interface SwapStatus {
  /** Latest known chain tip, or null before the first successful poll. */
  tip: Tip | null;
  /** Current wall-clock ms, ticking every second. */
  now: number;
  /** Interpolated current height, or null before the first poll. */
  current: number | null;
  /** Blocks remaining until the swap opens, or null before the first poll. */
  remaining: number | null;
  /** True once the target block is reached. */
  isLive: boolean;
  /** Last poll error message, or null. */
  error: string | null;
}

/**
 * Polls the Navcoin explorer for the chain tip and derives whether the
 * Navcoin → Navio swap window has opened (tip height ≥ TARGET_BLOCK).
 * Interpolates height upward between polls so counters tick smoothly; each
 * successful poll snaps back to the truthful value, correcting drift.
 */
export function useSwapStatus(): SwapStatus {
  const [tip, setTip] = useState<Tip | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [now, setNow] = useState(() => Date.now());

  // Tick every second so any countdown updates smoothly.
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

  const current =
    tip !== null ? tip.height + Math.floor((now - tip.at) / 1000 / BLOCK_TIME_SEC) : null;
  const remaining = current !== null ? Math.max(0, TARGET_BLOCK - current) : null;
  const isLive = remaining === 0;

  return { tip, now, current, remaining, isLive, error };
}
