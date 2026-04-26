import { ExternalLink, Lock, Eye, Shield } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function Technology() {
  return (
    <div className="max-w-5xl mx-auto px-4 space-y-24">
      {/* HEADER */}
      <section className="pt-8 space-y-6 text-center">
        <div className="mono text-[10px] tracking-[0.3em] uppercase text-neon-blue/80 inline-flex items-center gap-2">
          <span className="neon-dot h-1.5 w-1.5" />
          Technology
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          <span className="gradient-text">The cryptography under the hood.</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          Navio combines decades of research into a single coherent base layer. Here's what each
          piece does, why it matters, and how they fit together — explained in plain language, with
          links to the real specs for when you want the math.
        </p>
        <div className="pt-2">
          <a href="https://docs.nav.io" target="_blank" rel="noreferrer" className="neon-btn">
            Full spec on docs.nav.io <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* BLSCT */}
      <section id="blsct">
        <SectionHeading
          eyebrow="01 — Privacy layer"
          title={<>BLSCT: how Navio hides what it hides</>}
          center={false}
          gradient="blue"
        />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          <Tile icon={<Lock className="w-5 h-5" />} title="Pedersen commitments">
            Every amount is hidden inside a cryptographic commitment. Balances can be verified
            (inputs equal outputs) without revealing the numbers themselves.
          </Tile>
          <Tile icon={<Eye className="w-5 h-5" />} title="Stealth addresses (DPKs)">
            Each payment generates a fresh one-time destination from the recipient's double public
            key. Two payments to the same person look unlinkable to anyone but them.
          </Tile>
          <Tile icon={<Shield className="w-5 h-5" />} title="Bulletproofs++ range proofs">
            Short, non-interactive proofs that committed amounts are within a valid range — so
            nobody can conjure negative coins. No trusted setup required.
          </Tile>
        </div>

        <div className="glow-card mt-8 space-y-4">
          <h3 className="text-xl font-semibold text-white">What an observer sees vs. what they don't</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="mono text-[10px] tracking-[0.22em] uppercase text-neon-green/80 mb-2">Public</div>
              <ul className="space-y-1.5 text-white/70">
                <li>— Block height and timestamp</li>
                <li>— Number of transactions</li>
                <li>— Number of inputs and outputs</li>
                <li>— Transaction fee (burned)</li>
                <li>— Script type</li>
                <li>— Token ID for typed assets</li>
              </ul>
            </div>
            <div>
              <div className="mono text-[10px] tracking-[0.22em] uppercase text-neon-pink/80 mb-2">Hidden</div>
              <ul className="space-y-1.5 text-white/70">
                <li>— Sender and receiver addresses</li>
                <li>— Amount of every output</li>
                <li>— Linkage between addresses</li>
                <li>— Balances of any wallet</li>
                <li>— Relationships between inputs and outputs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glow-card mt-6">
          <h3 className="text-lg font-semibold text-white mb-3">Why base-layer, not opt-in</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Opt-in privacy (Zcash-style shielded pools, Bitcoin CoinJoin) produces a two-tier
            blockchain: people who need privacy stand out, and a small anonymity set is easier to
            deanonymize. Navio enforces privacy for every transaction on the canonical chain — so
            the anonymity set of any transaction is every other transaction in the same block, and
            privacy isn't a suspicious signal.
          </p>
        </div>
      </section>

      {/* POPS */}
      <section id="pops">
        <SectionHeading
          eyebrow="02 — Consensus"
          title={<>Proof-of-Private-Stake, in plain English</>}
          center={false}
          gradient="pink"
        />
        <div className="mt-10 space-y-6">
          <div className="glow-card">
            <p className="text-white/75 leading-relaxed">
              Ordinary Proof-of-Stake publishes the validator's address and the staked amount in the
              clear. Anyone can see who is producing blocks, and for how much. That's a privacy
              violation <em>and</em> a surveillance opportunity — for regulators, chain-analysis
              firms, and anyone with subpoena power.
            </p>
            <p className="text-white/75 leading-relaxed mt-3">
              Navio's <strong className="text-white">Proof-of-Private-Stake (PoPS)</strong> keeps the
              economic security of PoS, but validators prove eligibility in zero-knowledge — without
              ever revealing <em>who</em> they are or <em>how much</em> they've staked.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <Step n="01" accent="blue" title="Lock stake">
              A staker locks at least 10,000 NAV. The output enters a set of candidate commitments;
              the amount itself is hidden inside a Pedersen commitment.
            </Step>
            <Step n="02" accent="purple" title="Prove eligibility">
              Each block, the staker proves (a) they control <em>some</em> output in the set, (b) the
              hidden amount meets threshold, (c) the proof is bound to this specific block — all in
              zero-knowledge.
            </Step>
            <Step n="03" accent="pink" title="Produce block">
              The network verifies the proof. Block is accepted. Reward goes to the staker's stealth
              address. Nobody — including other stakers — can tell which candidate just produced the
              block.
            </Step>
          </div>

        </div>
      </section>

      {/* TOKENS */}
      <section id="tokens">
        <SectionHeading
          eyebrow="03 — Assets"
          title={<>Private tokens and NFTs</>}
          center={false}
          gradient="green"
        />
        <div className="mt-8 glow-card space-y-5">
          <p className="text-white/75 leading-relaxed">
            Navio lets anyone launch their own coin — a stablecoin, a community token, a game
            currency — or mint NFTs. Same privacy guarantees as NAV itself: amounts hidden,
            balances hidden, who sent what to whom hidden.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-white/10 rounded-xl p-5 bg-white/[0.02]">
              <h4 className="font-semibold text-white mb-2">Your own coin</h4>
              <p className="text-sm text-white/65 leading-relaxed">
                Launch a token once — the chain knows it exists, and that only you can print more
                of it. After that, every transfer of that token is private: people see that "some
                token X moved," but not who owned it, who got it, or how much they got.
              </p>
            </div>
            <div className="border border-white/10 rounded-xl p-5 bg-white/[0.02]">
              <h4 className="font-semibold text-white mb-2">Your own NFTs</h4>
              <p className="text-sm text-white/65 leading-relaxed">
                Mint a collection. Each piece has its own identity, and you can prove you own it —
                but the world doesn't see your wallet of rare items. Collectors stay private;
                artwork stays verifiable.
              </p>
            </div>
          </div>

          <p className="text-sm text-white/55 border-l-2 border-neon-blue/50 pl-4 italic leading-relaxed">
            One thing that is public: the token's name. The chain needs to know "this is coin X"
            so balances can't secretly turn into coin Y. But who holds it, how much, and where it
            flows — those stay yours.
          </p>
        </div>
      </section>

      {/* SWAPS */}
      <section id="swaps">
        <SectionHeading
          eyebrow="04 — Trading"
          title={<>Atomic swaps, two ways</>}
          center={false}
          gradient="blue"
        />
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          <div className="glow-card">
            <div className="mono text-[10px] tracking-[0.22em] uppercase text-neon-blue/80 mb-2">
              Intra-chain · aggregated
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Native Navio swaps</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              BLS signature aggregation lets Alice and Bob each construct "half" of a transaction:
              Alice spends 100 TokenA, creates a 10 NAV output for herself; Bob spends 10 NAV,
              creates 100 TokenA for himself. Signatures aggregate. The combined transaction
              balances and broadcasts as one atomic unit. No HTLCs, no preimages, no race.
            </p>
          </div>
          <div className="glow-card">
            <div className="mono text-[10px] tracking-[0.22em] uppercase text-neon-pink/80 mb-2">
              Cross-chain · HTLC
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">BTC / LTC swaps</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              For chains outside Navio, traditional hash-time-locked contracts work: Navio's
              scripting includes <code className="mono text-neon-blue text-xs">OP_BLSCHECKSIG</code> and standard
              <code className="mono text-neon-blue text-xs"> OP_CHECKLOCKTIMEVERIFY</code>, enabling trustless
              atomic swaps against Bitcoin, Litecoin, and anything else that speaks Bitcoin Script.
            </p>
          </div>
        </div>
      </section>

      {/* NETWORK PARAMS */}
      <section id="params">
        <SectionHeading
          eyebrow="05 — Network"
          title={<>Concrete numbers</>}
          center={false}
          gradient="pink"
        />
        <div className="mt-10 space-y-10">
          <ParamGroup label="Supply">
            <Metric label="Initial supply" value="81,743,678" unit="NAV" big />
            <Metric label="Max supply" value="∞" unit="uncapped" big />
            <Metric label="Minimum stake" value="10,000" unit="NAV" big />
          </ParamGroup>

          <ParamGroup label="Consensus">
            <Metric label="Block time" value="120" unit="sec" />
            <Metric label="Block reward" value="8" unit="NAV" />
            <Metric label="Retarget" value="30" unit="blocks" />
            <Metric label="Max block size" value="4" unit="MB" />
          </ParamGroup>

          <ParamGroup label="Network">
            <Metric label="P2P port" value="48470" />
            <Metric label="RPC port" value="48471" />
            <Metric label="Address prefix" value="nav" />
            <Metric label="Fees" value="burned" />
          </ParamGroup>

          <ParamGroup label="Cryptography">
            <Metric label="Curve" value="BLS12-381" />
            <Metric label="Range-proof width" value="[0, 2⁶⁴)" />
            <Metric label="Privacy scheme" value="BLSCT" />
            <Metric label="Consensus" value="PoPS" />
          </ParamGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-8">
        <div className="glow-card gradient-border">
          <h2 className="text-2xl sm:text-3xl font-semibold gradient-text mb-4">Go deeper.</h2>
          <p className="text-white/65 mb-6 max-w-xl mx-auto">
            Everything above is a summary. The developer docs carry the full cryptographic spec,
            RPC reference, SDK guides, and node operator instructions.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://docs.nav.io" target="_blank" rel="noreferrer" className="neon-btn">
              docs.nav.io <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://github.com/nav-io/navio-core" target="_blank" rel="noreferrer" className="ghost-btn">
              navio-core source <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ParamGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="neon-dot h-1.5 w-1.5" />
        <span className="mono text-[10px] tracking-[0.3em] uppercase text-white/40">{label}</span>
        <div className="flex-1 h-px bg-white/5" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{children}</div>
    </div>
  );
}

function Metric({
  label,
  value,
  unit,
  big = false,
}: {
  label: string;
  value: string;
  unit?: string;
  big?: boolean;
}) {
  return (
    <div className="relative border border-white/10 rounded-xl p-5 bg-white/[0.02] hover:border-neon-blue/40 hover:bg-white/[0.04] transition-all group overflow-hidden">
      <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-neon-blue/40 group-hover:bg-neon-blue transition" />
      <div className="mono text-[9px] tracking-[0.22em] uppercase text-white/40 mb-3">
        {label}
      </div>
      <div className="flex items-baseline gap-1.5">
        <div className={`mono ${big ? 'text-2xl sm:text-3xl gradient-text' : 'text-xl text-white'} leading-none`}>
          {value}
        </div>
        {unit && (
          <div className="mono text-[10px] tracking-[0.15em] uppercase text-white/40">{unit}</div>
        )}
      </div>
    </div>
  );
}

function Tile({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="glow-card">
      <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-neon-blue mb-4">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/65 leading-relaxed">{children}</p>
    </div>
  );
}

function Step({
  n, title, children, accent,
}: { n: string; title: string; children: React.ReactNode; accent: 'blue' | 'purple' | 'pink' }) {
  const colors = {
    blue: 'text-neon-blue/80',
    purple: 'text-neon-purple/80',
    pink: 'text-neon-pink/80',
  };
  return (
    <div className="glow-card">
      <div className={`mono text-[10px] tracking-[0.3em] uppercase ${colors[accent]} mb-2`}>Step {n}</div>
      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/65 leading-relaxed">{children}</p>
    </div>
  );
}
