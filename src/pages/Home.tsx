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
          <div className="relative mx-auto aspect-[2/1] max-w-5xl">
            <div className="absolute inset-0 rounded-full overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(79,179,255,0.15)]">
              <img src="/illustrations/hero.jpg" alt="Navio" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
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
            Navio is a blockahin where every transaction is confidential by default — amounts,
            senders, receivers. Secured by Proof-of-Private-Stake. Open source since 2014.
            Community-owned. Fair and verifiable.
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
          title={<>Privacy is a right. We are building the tools for it.</>}
          gradient="green"
        />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          <div className="glow-card">
            <div className="mono text-[10px] tracking-[0.22em] uppercase text-neon-blue/80 mb-2">01 · Default</div>
            <p className="text-white/70 leading-relaxed text-sm">
              Confidentiality is enforced at the base layer. Amounts,
              and counterparties are hidden by default. There is no optional
              shielded mode to opt into and no separate sidechain to bridge through.
            </p>
          </div>
          <div className="glow-card">
            <div className="mono text-[10px] tracking-[0.22em] uppercase text-neon-pink/80 mb-2">02 · Permissionless</div>
            <p className="text-white/70 leading-relaxed text-sm">
              The protocol is open source and runs on independently operated nodes. Anyone can
              validate, transact, or build on top without asking permission — and no one, can pause it, censor it, or roll it back.
            </p>
          </div>
          <div className="glow-card">
            <div className="mono text-[10px] tracking-[0.22em] uppercase text-neon-green/80 mb-2">03 · Political</div>
            <p className="text-white/70 leading-relaxed text-sm">
              Financial surveillance is a tool of coercion. When every payment is observable,
              dissent gets expensive and freedom gets threatened. The tech stack handling your money bears the responsibility of protecting your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS — feature cards */}
      <section id="pillars" className="max-w-7xl mx-auto px-4 pt-24 sm:pt-32">
        <SectionHeading
          eyebrow=""
          title={<>What makes Navio different</>}
          subtitle=""
        />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="glow-card text-center space-y-6">
            <div className="cyber-orb">
              <img src="/illustrations/private-payments.jpg" alt="" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold gradient-text">NAV</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                NAV is Navio&apos;s native asset with ~two-minute confirmations and
                negligible fees. Solid store of value, gas for your transfers and collateral for your stakes. Roughly 2.6% annualized
                inflation burned fees.
              </p>
            </div>
          </div>
          <div className="glow-card text-center space-y-6">
            <div className="cyber-orb">
              <img src="/illustrations/interoperability-defi.jpg" alt="" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold gradient-text-pink">BLSCT</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                Navio's privacy engine: Pedersen commitments for amounts, stealth addresses via double
                public keys, and aggregated BLS signatures — smaller proofs, anonymity set at the block level.
              </p>
            </div>
          </div>
          <div className="glow-card text-center space-y-6">
            <div className="cyber-orb">
              <img src="/illustrations/pops.jpg" alt="" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold gradient-text">Proof-of-Private-Stake</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                Stakers produce a zero-knowledge proof that they control an eligible staked
                output and that the proof is bound to the current block. The proof reveals neither
                <em> which</em> output is being used nor <em>how much</em> is staked.
              </p>
            </div>
          </div>
          <div className="glow-card text-center space-y-6">
            <div className="cyber-orb">
              <img src="/illustrations/decentralized-autonomous.jpg" alt="" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold gradient-text-green">Decentralized &amp; autonomous</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                Navio is maintained by an open community of contributors, self-funded by voluntary contributions. There is no entity
                that owns it, no central company that controls the roadmap. Updates ship through
                rough consensus among contributors and the network of stakers.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ECOSYSTEM BLURB */}
      < section className="max-w-6xl mx-auto px-4 pt-24 sm:pt-32" >
        <SectionHeading
          eyebrow="Ecosystem"
          title={<>Infrastructure for privacy</>}
          subtitle="The base layer for those who care about privacy."
        />


        {/* PLATFORM */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="glow-card text-center space-y-6">
            <div className="cyber-orb">
              <img src="/illustrations/private-tokens.jpg" alt="" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold gradient-text">Private tokens</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                Anyone can mint a token on Navio. Balances are Pedersen commitments. Amounts are
                hidden. Great for
                stablecoins, wrapped assets, governance units, or anything else that should not be a
                public spreadsheet.
              </p>
            </div>
          </div>
          <div className="glow-card text-center space-y-6">
            <div className="cyber-orb">
              <img src="/illustrations/private-nfts.jpg" alt="" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold gradient-text-pink">Private NFTs</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                On a transparent chain, an NFT collection exposes what someone owns and, by
                extension, a lot about who they are. On Navio, ownership and authenticity can be
                verified without making the holder's wallet public.
              </p>
            </div>
          </div>
          <div className="glow-card text-center space-y-6">
            <div className="cyber-orb">
              <img src="/illustrations/private-dex.jpg" alt="" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold gradient-text-green">Private DEX</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                BLSCT aggregation enables trustless swaps between NAV, tokens, and wrapped external
                assets in a single transaction — no order book surveillance, no front-running bots,
                no MEV. One tx in, matched tx out, both parties satisfied.
              </p>
            </div>
          </div>
          <div className="glow-card text-center space-y-6">
            <div className="cyber-orb">
              <img src="/illustrations/community.jpg" alt="" />
            </div>
            <div className="space-y-3">
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
            url="/swap"
            desc="Migrate legacy Navcoin NAV to native NAVIO during the swap window. Live countdown to mainnet activation."
            icon={<GitBranch className="w-5 h-5" />}
          />
          <AppCard
            title="Developer Docs"
            url="https://docs.nav.io"
            desc="Protocol specs, RPC reference, SDK guides, node operation, and the BLSCT cryptography reference."
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
            body="Launched as Navcoin with no pre-mine, no pre-sale, and no investor allocation. Open source from the first commit."
          />
          <Milestone
            status="done"
            title="PoPS testnet — Phase 1"
            date="July 2024"
            body="Public testnet running Proof-of-Private-Stake went live and started producing stable blocks."
          />
          <Milestone
            status="done"
            title="Bulletproofs++ & private tokens"
            date="Dec 2024 – 2025"
            body="New range-proof scheme deployed; private token and NFT primitives shipped to testnet."
          />
          <Milestone
            status="done"
            title="Pre-mainnet test"
            date="2026"
            body="Seven different test networks. Hardening and stress tests. Ready for launch."
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
        <SectionHeading eyebrow="" title={<>Earn by securing</>} />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          <div className="glow-card overflow-hidden p-0">
            <img src="/illustrations/pops.jpg" alt="" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Proof-of-stake over mining</h3>
              <p className="text-sm text-white/60">
                Staking ties security to locked economic weight instead of burning electricity. Incentives go to people who hold the asset and
                run honest nodes — free for everyone to participate.
              </p>
            </div>
          </div>
          
          <div className="glow-card overflow-hidden p-0">
            <img src="/illustrations/passive-income.jpg" alt="" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">How to get involved</h3>
              <p className="text-sm text-white/60">
                Lock 10,000 NAV, run the staker binary, earn 8 NAVIO per each block. No delegation required, you run your own infra — your keys, your stake, your coins.
              </p>
            </div>
          </div>
          <div className="glow-card overflow-hidden p-0">
            <img src="/illustrations/community.jpg" alt="" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Strengthen the network</h3>
              <p className="text-sm text-white/60">
                Your participation matters. Each added staker makes our network more resilient to external attacks and stronger and increases the anonymity set for all participants.
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
            us. 
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
  const isInternal = url.startsWith('/');
  const ChevronIcon = isInternal ? ArrowRight : ExternalLink;
  const display = isInternal ? `nav.io${url}` : url.replace('https://', '');

  const inner = (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-neon-blue">
          {icon}
        </div>
        <ChevronIcon className="w-4 h-4 text-white/30 group-hover:text-white/70 transition" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/60 leading-relaxed flex-1">{desc}</p>
      <div className="mono text-[10px] tracking-[0.2em] uppercase text-neon-blue/70 mt-5">
        {display}
      </div>
    </>
  );

  return isInternal ? (
    <Link to={url} className="glow-card group flex flex-col">{inner}</Link>
  ) : (
    <a href={url} target="_blank" rel="noreferrer" className="glow-card group flex flex-col">
      {inner}
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
