import { ArrowRight } from 'lucide-react';
import { useSwapStatus } from '../hooks/useSwapStatus';

/**
 * Site-wide banner shown once the Navcoin chain reaches the swap activation
 * block. Points holders at bridge.nav.io to migrate legacy NAV to Navio mainnet.
 */
export default function SwapBanner() {
  const { isLive } = useSwapStatus();

  if (!isLive) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 -mt-8 sm:-mt-10 mb-4">
      <a
        href="https://bridge.nav.io"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-center gap-2.5 flex-wrap rounded-full border border-neon-pink/25 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 hover:from-neon-blue/15 hover:via-neon-purple/15 hover:to-neon-pink/15 transition-colors px-5 py-2.5 text-center"
      >
        <span className="neon-dot h-1.5 w-1.5 animate-pulseRing" />
        <span className="mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-white/80">
          Swap is live — migrate legacy NAV to Navio mainnet
        </span>
        <span className="inline-flex items-center gap-1 mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-neon-pink">
          bridge.nav.io
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
        </span>
      </a>
    </div>
  );
}
