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
            testnet.live · mainnet.03_july_2026
          </div>

          {/* Slogan effect — preserved from nav.io */}
          <div className="pt-2 pb-4 flex justify-center">
            <Slogan />
          </div>

          <p className="text-base sm:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
            Navio is private money for the internet. Send and receive without anyone seeing
            amounts, senders or receivers. No company runs it. No one can freeze it. Open since
            2014.
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
      {/* <section id="mission" className="max-w-6xl mx-auto px-4 pt-24 sm:pt-32">
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
              validate, transact or build on top without asking permission. No one can pause it, censor it or roll it back.
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
      </section> */}

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
              <h3 className="text-2xl font-semibold gradient-text">Money you can actually own</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                NAV is the coin you send and hold. Confirms in about two minutes, fees are near
                zero. Use it to pay, save or earn rewards by helping secure the network.
              </p>
            </div>
          </div>
          <div className="glow-card text-center space-y-6">
            <div className="cyber-orb">
              <img src="/illustrations/interoperability-defi.jpg" alt="" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold gradient-text-pink">Private by default</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                Every transaction hides amounts, sender and receiver. Not an opt-in mode, not a
                separate app. Privacy is the only setting.{' '}
                <Link to="/technology" className="text-neon-pink/80 hover:text-neon-pink underline-offset-4 hover:underline">
                  How it works →
                </Link>
              </p>
            </div>
          </div>
          <div className="glow-card text-center space-y-6">
            <div className="cyber-orb">
              <img src="/illustrations/pops.jpg" alt="" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold gradient-text">Stakers, not miners</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                The network is secured by people running stakers, not power-hungry mining rigs.
                Stakers stay anonymous and earn NAV for keeping the chain honest.
              </p>
            </div>
          </div>
          <div className="glow-card text-center space-y-6">
            <div className="cyber-orb">
              <img src="/illustrations/decentralized-autonomous.jpg" alt="" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold gradient-text-green">No company. No boss.</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                Navio is built and funded by an open community. No foundation owns it, no investors
                control the roadmap. It moves forward when contributors and stakers agree.
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
                Anyone can issue a token on Navio with balances hidden by default. Useful for
                stablecoins, wrapped assets, governance, or anything that should not be a public
                spreadsheet.
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
                Swap NAV, tokens and wrapped assets directly between wallets. No order book to
                watch you, no bots front-running your trade. You ask, you get a price, you settle.
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
                private blockchain where every user action is private by default, with no
                compromises or exceptions. We care about freedom, not wealth.
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
          subtitle="Explore the chain, bridge in and build on top."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          <AppCard
            title="Block Explorer"
            url="https://blocks.nav.io"
            desc="Browse blocks, inspect transactions, check the supply, what little is publicly visible. Self-hostable and fully open source."
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
            desc="Protocol specs, RPC reference, SDK guides, node operation and the BLSCT cryptography reference."
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
            body="Launched as Navcoin with no pre-mine, no pre-sale and no investor allocation. Open source from the first commit."
          />
          <Milestone
            status="done"
            title="Private staking goes live"
            date="July 2024"
            body="First public test network where validators stake while protecting their privacy."
          />
          <Milestone
            status="done"
            title="Private tokens and NFTs"
            date="Dec 2024 – 2025"
            body="Anyone can now issue tokens or NFTs on Navio with amounts and ownership hidden."
          />
          <Milestone
            status="active"
            title="Mainnet launch"
            date="3 July 2026"
            body="Navio goes live. Existing Navcoin holders can migrate their NAV 1:1 through the bridge."
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
                run honest nodes. Free for everyone to participate.
              </p>
            </div>
          </div>
          
          <div className="glow-card overflow-hidden p-0">
            <img src="/illustrations/passive-income.jpg" alt="" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">How to get involved</h3>
              <p className="text-sm text-white/60">
                Lock 10,000 NAV, run the staker on your own machine, earn 8 NAV per block you produce. No middleman. Your keys, your stake, your coins.
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
            If you share the view, come build with us. Or come argue with us.
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
