import { Link } from 'react-router-dom';
import {
  Shield, Eye, Coins, Network, Lock, ArrowRight, ExternalLink,
  Fingerprint, Layers, Zap, Cpu, GitBranch, Check, Clock,
} from 'lucide-react';
import Slogan from '../components/Slogan';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        {/* Circular hero illustration — preserved from nav.io */}
        <div className="max-w-5xl mx-auto px-4 pt-6 sm:pt-10">
          <div className="relative mx-auto aspect-[2/1] max-w-4xl">
            <div className="absolute inset-0 rounded-full overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(79,179,255,0.15)]">
              <img src="/illustrations/hero.jpg" alt="Navio" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent pointer-events-none" />
              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.25) 3px, rgba(0,0,0,0.25) 4px)',
                }}
              />
            </div>
            {/* Corner brackets */}
            <HeroBracket className="top-4 left-4" corner="tl" />
            <HeroBracket className="top-4 right-4" corner="tr" />
            <HeroBracket className="bottom-4 left-4" corner="bl" />
            <HeroBracket className="bottom-4 right-4" corner="br" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 pt-12 sm:pt-16 text-center space-y-8">
          <div className="mono text-[10px] tracking-[0.32em] uppercase text-neon-blue/80 inline-flex items-center gap-2">
            <span className="neon-dot h-1.5 w-1.5 animate-pulseRing" />
            testnet.live · mainnet.june_july_2026
          </div>

          {/* Slogan effect — preserved from nav.io */}
          <div className="pt-2 pb-4 flex justify-center">
            <Slogan />
          </div>

          <p className="text-base sm:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
            Navio is a Layer-1 where every transaction is confidential by default — amounts,
            senders, receivers, tokens. Secured by Proof-of-Private-Stake. Open source since 2014.
            No pre-mine. No ICO. No compromise.
          </p>

          <div className="flex flex-wrap gap-3 justify-center pt-6">
            <Link to="/technology" className="neon-btn">
              Read the tech
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/stake" className="ghost-btn">
              Run a staker
            </Link>
            <a href="https://docs.nav.io" target="_blank" rel="noreferrer" className="ghost-btn">
              Developer docs
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="max-w-6xl mx-auto px-4 pt-24 sm:pt-32">
        <SectionHeading
          eyebrow="Our mission"
          title={<>Privacy is a right. We are building the plumbing for it.</>}
          gradient="green"
        />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          <div className="glow-card">
            <div className="mono text-[10px] tracking-[0.22em] uppercase text-neon-blue/80 mb-2">01 · Default</div>
            <p className="text-white/70 leading-relaxed text-sm">
              Every transaction on Navio is confidential at the base layer. Not a mixer, not a
              sidechain, not an optional shield. The canonical ledger itself hides amounts, tokens,
              and parties.
            </p>
          </div>
          <div className="glow-card">
            <div className="mono text-[10px] tracking-[0.22em] uppercase text-neon-pink/80 mb-2">02 · Permissionless</div>
            <p className="text-white/70 leading-relaxed text-sm">
              No KYC gate. No validator whitelist. No foundation veto. The chain runs itself through
              rules encoded in open-source code that anyone can read, audit, and fork.
            </p>
          </div>
          <div className="glow-card">
            <div className="mono text-[10px] tracking-[0.22em] uppercase text-neon-green/80 mb-2">03 · Political</div>
            <p className="text-white/70 leading-relaxed text-sm">
              Financial surveillance is a tool of coercion. Private money is a precondition for free
              speech, free association, and self-determination. Navio is a project, and a position.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS — feature cards */}
      <section id="pillars" className="max-w-7xl mx-auto px-4 pt-24 sm:pt-32">
        <SectionHeading
          eyebrow="Pillars"
          title={<>What makes Navio different</>}
          subtitle="Six properties that define the chain — and set the bar for anyone trying to do private money right."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard icon={<Shield className="w-5 h-5" />} title="NAV — Private Coin" accent="blue">
            NAV is the native asset. Every send hides the amount, the sender, the receiver, and the
            token type. Confirmations in one minute, fees in fractions of a cent.
          </FeatureCard>
          <FeatureCard icon={<Lock className="w-5 h-5" />} title="BLSCT Protocol" accent="purple">
            Navio's privacy engine: Pedersen commitments for amounts, stealth addresses via double
            public keys, and aggregated BLS signatures — small proofs, huge anonymity set.
          </FeatureCard>
          <FeatureCard icon={<Eye className="w-5 h-5" />} title="Proof-of-Private-Stake" accent="pink">
            The first production consensus where both the validator's identity and their stake
            amount are cryptographically hidden — no validator lists, no stake leaderboards.
          </FeatureCard>
          <FeatureCard icon={<Coins className="w-5 h-5" />} title="Private Tokens" accent="green">
            Mint your own tokens where balances and transfer amounts are confidential. Same
            privacy guarantees as NAV, same stealth-address plumbing, no new cryptography required.
          </FeatureCard>
          <FeatureCard icon={<Fingerprint className="w-5 h-5" />} title="Private NFTs" accent="purple">
            Own digital goods without publishing your collection to the world. Validate
            fungibility and authenticity without exposing ownership — a genuine first.
          </FeatureCard>
          <FeatureCard icon={<Network className="w-5 h-5" />} title="Private dApps" accent="blue">
            Build confidential applications on a chain that enforces privacy at the consensus
            layer — so you don't have to reinvent it at the app layer.
          </FeatureCard>
        </div>
      </section>

      {/* ECOSYSTEM BLURB */}
      <section className="max-w-6xl mx-auto px-4 pt-24 sm:pt-32">
        <SectionHeading
          eyebrow="Ecosystem"
          title={<>A platform, not a wallet.</>}
          subtitle="Navio is infrastructure: a privacy base layer for applications, issuers, and integrators that refuse to leak their users' data."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="glow-card overflow-hidden p-0">
            <img src="/illustrations/private-payments.jpg" alt="" className="w-full h-52 object-cover" />
            <div className="p-7 space-y-3">
              <h3 className="text-2xl font-semibold gradient-text">Private payments</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                NAV is confidential by default. Unlike Bitcoin — where chain surveillance firms
                can reconstruct your history — Navio sends reveal nothing to third parties, exchanges,
                or governments beyond the transaction's existence.
              </p>
              <p className="text-sm text-white/65 leading-relaxed">
                Fast, cheap, and anonymous — how digital cash was supposed to be.
              </p>
            </div>
          </div>
          <div className="glow-card overflow-hidden p-0">
            <img src="/illustrations/interoperability-defi.jpg" alt="" className="w-full h-52 object-cover" />
            <div className="p-7 space-y-3">
              <h3 className="text-2xl font-semibold gradient-text-pink">Interoperability & DeFi</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                The protocol includes atomic-swap primitives and BLSCT aggregation — the
                groundwork for trustless swaps with Bitcoin, Litecoin, and compatible chains.
                Cross-chain bridges for other tokens aren't live yet; they're on the roadmap.
              </p>
              <p className="text-sm text-white/65 leading-relaxed">
                Today the bridge handles the Navcoin → Navio migration during the mainnet swap
                window.
              </p>
              <a href="https://bridge.nav.io" target="_blank" rel="noreferrer" className="ghost-btn text-xs mt-2">
                Navcoin → Navio bridge <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONSENSUS */}
      <section className="max-w-6xl mx-auto px-4 pt-24 sm:pt-32">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glow-card overflow-hidden p-0">
            <img src="/illustrations/pops.jpg" alt="" className="w-full h-52 object-cover" />
            <div className="p-7 space-y-3">
              <h3 className="text-2xl font-semibold gradient-text">Proof-of-Private-Stake</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                Validators prove three things in zero-knowledge: that they control a staked output,
                that the stake is eligible, and that the proof is bound to this block — without
                revealing <em>which</em> output they control or <em>how much</em> is staked.
              </p>
            </div>
          </div>
          <div className="glow-card overflow-hidden p-0">
            <img src="/illustrations/decentralized-autonomous.jpg" alt="" className="w-full h-52 object-cover" />
            <div className="p-7 space-y-3">
              <h3 className="text-2xl font-semibold gradient-text-green">Decentralized &amp; autonomous</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                Navio is maintained by a distributed community of contributors — no foundation,
                no central company, no token-sale investors with veto power. Rules live in code.
                Changes ship when the community agrees on them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section className="max-w-6xl mx-auto px-4 pt-24 sm:pt-32">
        <SectionHeading
          eyebrow="Navio as a platform"
          title={<>With great privacy comes great utility.</>}
          subtitle="We didn't build a coin. We built a base layer — and invited everyone to ship on top of it."
          gradient="pink"
        />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="glow-card overflow-hidden p-0">
            <img src="/illustrations/private-tokens.jpg" alt="" className="w-full h-52 object-cover" />
            <div className="p-7 space-y-3">
              <h3 className="text-2xl font-semibold gradient-text">Private tokens</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                Anyone can mint a token on Navio. Balances are Pedersen commitments. Amounts are
                hidden. The token's identifier is public — balances and flows are not. Great for
                stablecoins, wrapped assets, governance units, or anything else that should not be a
                public spreadsheet.
              </p>
            </div>
          </div>
          <div className="glow-card overflow-hidden p-0">
            <img src="/illustrations/private-nfts.jpg" alt="" className="w-full h-52 object-cover" />
            <div className="p-7 space-y-3">
              <h3 className="text-2xl font-semibold gradient-text-pink">Private NFTs</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                Public NFTs leak collections, wealth, and association. Private NFTs prove ownership
                and authenticity without exposing who owns what. Creators and collectors both
                benefit from collections that aren't public advertising.
              </p>
            </div>
          </div>
          <div className="glow-card overflow-hidden p-0">
            <img src="/illustrations/private-dex.jpg" alt="" className="w-full h-52 object-cover" />
            <div className="p-7 space-y-3">
              <h3 className="text-2xl font-semibold gradient-text-green">Private DEX</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                BLSCT aggregation enables trustless swaps between NAV, tokens, and wrapped external
                assets in a single transaction — no order book surveillance, no front-running bots,
                no MEV. One tx in, matched tx out, both parties satisfied.
              </p>
            </div>
          </div>
          <div className="glow-card overflow-hidden p-0">
            <img src="/illustrations/community.jpg" alt="" className="w-full h-52 object-cover" />
            <div className="p-7 space-y-3">
              <h3 className="text-2xl font-semibold gradient-text">Community</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                Our community is made up of idealists united by a shared vision: a decentralized,
                private blockchain where every user action is private by default — no compromises,
                no exceptions. We are not driven by the pursuit of wealth, but by the pursuit of
                freedom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPS STRIP */}
      <section className="max-w-6xl mx-auto px-4 pt-24 sm:pt-32">
        <SectionHeading
          eyebrow="Apps & tools"
          title={<>Live on the network today</>}
          subtitle="Explore the chain, bridge in, and build on top."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          <AppCard
            title="Block Explorer"
            url="https://blocks.nav.io"
            desc="Browse blocks, inspect transactions, check the supply — what little is publicly visible. Self-hostable and fully open source."
            icon={<Layers className="w-5 h-5" />}
          />
          <AppCard
            title="Bridge"
            url="https://bridge.nav.io"
            desc="Migrate legacy Navcoin NAV to native NAVIO, or wrap/unwrap assets between chains. The canonical path into Navio privacy."
            icon={<GitBranch className="w-5 h-5" />}
          />
          <AppCard
            title="Developer Docs"
            url="https://docs.nav.io"
            desc="Protocol specs, RPC reference, SDK guides, running a node, BLSCT deep dive — everything you need to build."
            icon={<Cpu className="w-5 h-5" />}
          />
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="max-w-4xl mx-auto px-4 pt-24 sm:pt-32">
        <SectionHeading
          eyebrow="Roadmap"
          title={<>Where we've been, where we're going</>}
          gradient="green"
        />
        <ol className="mt-14 relative border-l border-white/10 ml-4 space-y-10">
          <Milestone
            status="done"
            title="Navcoin launch"
            date="2014"
            body="A fair launch — no pre-mine, no ICO, no VC allocation. The foundation of everything that came after."
          />
          <Milestone
            status="done"
            title="PoPS testnet — Phase 1"
            date="July 2024"
            body="First network in the world running Proof-of-Private-Stake, producing stable 1-minute testnet blocks."
          />
          <Milestone
            status="done"
            title="Bulletproofs++ & private tokens"
            date="Dec 2024 – 2025"
            body="New range-proof scheme deployed; private token and NFT primitives shipped to testnet."
          />
          <Milestone
            status="done"
            title="Pre-mainnet hardening"
            date="2026"
            body="Five targeted consensus patches: saturating min-value clamp, grinding-surface reduction (time bucketing + chain-work binding), G1 subgroup checks on deserialization, long-range-attack checkpoints. Slashing design reserved."
          />
          <Milestone
            status="active"
            title="Mainnet launch"
            date="Jun–Jul 2026"
            body="Activation at Navcoin height 10,500,000. Initial supply ~81.7M NAV migrated 1:1. Swap window closes at height 11,000,000."
          />
        </ol>
      </section>

      {/* WHAT ELSE */}
      <section className="max-w-6xl mx-auto px-4 pt-24 sm:pt-32">
        <SectionHeading eyebrow="Essentials" title={<>What else you should know</>} />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          <div className="glow-card overflow-hidden p-0">
            <img src="/illustrations/born-in-2014.jpg" alt="" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Born in 2014</h3>
              <p className="text-sm text-white/60">
                Launched as Navcoin with a fair distribution — no pre-mine, no ICO. Became Navio in
                2024 when we replaced the consensus with PoPS.
              </p>
            </div>
          </div>
          <div className="glow-card overflow-hidden p-0">
            <img src="/illustrations/open-source.jpg" alt="" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Open source</h3>
              <p className="text-sm text-white/60">
                MIT-licensed. Every line is public. Audit it, fork it, reuse it. Transparency is
                the only credible foundation for privacy software.
              </p>
            </div>
          </div>
          <div className="glow-card overflow-hidden p-0">
            <img src="/illustrations/passive-income.jpg" alt="" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Earn by securing</h3>
              <p className="text-sm text-white/60">
                Lock 10,000 NAV, run the staker binary, earn block rewards. No delegation required,
                no custodian involved — your keys, your stake, your coins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pt-24 sm:pt-32">
        <div className="glow-card text-center gradient-border relative overflow-hidden">
          <div className="mono text-[10px] tracking-[0.3em] uppercase text-neon-pink/80 mb-3">
            Join the fight
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold gradient-text-pink mb-4">
            Financial privacy is a human right.
          </h2>
          <p className="text-white/65 max-w-xl mx-auto mb-8">
            If our vision resonates with you, come build with us — or at minimum, come argue with
            us. Either way you'll learn something.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://discord.com/invite/eBQ2QUkVXy" target="_blank" rel="noreferrer" className="neon-btn">
              Join Discord
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/manifesto" className="ghost-btn">
              Read the manifesto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function AppCard({
  title, url, desc, icon,
}: { title: string; url: string; desc: string; icon: React.ReactNode }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="glow-card group flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-neon-blue">
          {icon}
        </div>
        <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/70 transition" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/60 leading-relaxed flex-1">{desc}</p>
      <div className="mono text-[10px] tracking-[0.2em] uppercase text-neon-blue/70 mt-5">
        {url.replace('https://', '')}
      </div>
    </a>
  );
}

function HeroBracket({
  className = '',
  corner,
}: {
  className?: string;
  corner: 'tl' | 'tr' | 'bl' | 'br';
}) {
  const rotation = {
    tl: 'rotate-0',
    tr: 'rotate-90',
    br: 'rotate-180',
    bl: '-rotate-90',
  }[corner];
  return (
    <div className={`absolute ${className} w-6 h-6 pointer-events-none`}>
      <div className={`w-full h-full ${rotation}`}>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-neon-blue/60" />
        <div className="absolute top-0 left-0 w-[1px] h-full bg-neon-blue/60" />
      </div>
    </div>
  );
}

function Milestone({
  status, title, date, body,
}: { status: 'done' | 'active' | 'todo'; title: string; date: string; body: string }) {
  const icons = {
    done: <Check className="w-3.5 h-3.5 text-neon-green" />,
    active: <Zap className="w-3.5 h-3.5 text-neon-pink animate-flicker" />,
    todo: <Clock className="w-3.5 h-3.5 text-white/40" />,
  };
  const rings = {
    done: 'border-neon-green/40 bg-neon-green/10',
    active: 'border-neon-pink/50 bg-neon-pink/10',
    todo: 'border-white/15 bg-white/5',
  };
  return (
    <li className="ml-6 relative">
      <span
        className={`absolute -left-[34px] top-0 flex items-center justify-center w-7 h-7 rounded-full border ${rings[status]}`}
      >
        {icons[status]}
      </span>
      <div className="mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-1">{date}</div>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-sm text-white/60 leading-relaxed">{body}</p>
    </li>
  );
}
