import { ExternalLink, MessageCircle, Github, Twitter } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import PageBanner from '../components/PageBanner';

export default function Manifesto() {
  return (
    <>
      <PageBanner src="/illustrations/autonomous-figure.webp" alt="Cypherpunk" />
      <div className="max-w-3xl mx-auto px-4 space-y-20">
        {/* HEADER */}
        <section className="pt-8 space-y-6 text-center">
          <div className="mono text-[10px] tracking-[0.3em] uppercase text-neon-pink/80 inline-flex items-center gap-2">
            <span className="neon-dot h-1.5 w-1.5 animate-pulseRing" />
            Manifesto
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            <span className="gradient-text-pink">Privacy is not a privilege.</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg italic">
            "Cypherpunks write code." Eric Hughes, 1993
          </p>
        </section>

        {/* BLOCK 1 */}
        <section className="space-y-6">
          <p className="text-lg text-white/80 leading-relaxed first-letter:text-5xl first-letter:font-semibold first-letter:gradient-text-pink first-letter:mr-2 first-letter:float-left first-letter:leading-none">
            Every transaction you make is surveillance bait. Payment processors sell it, banks flag
            it, governments subpoena it, exchanges hand it over without a fight. A pseudonymous
            chain like Bitcoin is not private. It is a public ledger with a thin layer of plausible
            deniability, pierced by any chain-analysis firm with a GPU and a court order.
          </p>
          <p className="text-lg text-white/80 leading-relaxed">
            This is not an accident. The financial surveillance apparatus was built on purpose. KYC,
            AML, FATF travel rules, sanctions screening, counterparty risk scoring. All of it exists
            to ensure that every dollar, every token, every satoshi you touch is legible to someone
            with authority. And that authority is expanding.
          </p>
        </section>

        {/* QUOTE */}

        <div className="mt-10 rounded-2xl overflow-hidden relative aspect-[3/1]">
          <img src="/illustrations/code-is-law.png"
            alt="Privacy layers" className="w-full h-full object-cover" style={{ objectPosition: 'center 15%' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent pointer-events-none" />
        </div>

        <section>
          <blockquote className="glow-card gradient-border relative">
            <div className="mono text-[10px] tracking-[0.3em] uppercase text-neon-blue/70 mb-4">
              A Cypherpunk's Manifesto · Eric Hughes, 9 March 1993
            </div>
            <p className="text-xl text-white/90 leading-relaxed italic">
              "Privacy is necessary for an open society in the electronic age. Privacy is not
              secrecy. A private matter is something one doesn't want the whole world to know, but a
              secret matter is something one doesn't want anybody to know. Privacy is the power to
              selectively reveal oneself to the world."
            </p>
          </blockquote>
        </section>


        {/* BLOCK 2 */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow=" "
            title={<>Opt-in privacy is a trap.</>}
            center={false}
            gradient="blue"
          />
          <p className="text-white/75 leading-relaxed">
            Every major chain with "optional" privacy ends up with a two-tier ledger: the unshielded
            majority and a suspicious minority who chose to shield. The small anonymity set is easier
            to deanonymize. The act of using privacy becomes itself a red flag. Exchanges refuse to
            process deposits from shielded pools. Regulators pressure wallet vendors to disable
            private features. The tool works technically and fails socially.
          </p>
          <p className="text-white/75 leading-relaxed">
            Navio doesn't have a shielded pool. It has a shielded <em>chain</em>. The anonymity set
            of any transaction is every other transaction in the same block. There is no unshielded
            option to contrast with. Privacy
            is the default, not a signal.
          </p>
        </section>

        {/* BLOCK 3 */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Why consensus privacy matters"
            title={<>Validators are surveillance targets too.</>}
            center={false}
            gradient="pink"
          />
          <p className="text-white/75 leading-relaxed">
            Standard Proof-of-Stake networks publish every validator's address and every stake
            amount in the clear. That means node operators can be subpoenaed, stakes sanctioned,
            rewards frozen. In a hostile legal environment, a transparent validator set is a direct
            attack surface on the chain's liveness and neutrality.
          </p>
          <p className="text-white/75 leading-relaxed">
            Proof-of-Private-Stake makes that surveillance harder. The block producer, the stake
            amount, the reward address, they are all obfuscated at the protocol level. We hide the
            most important layer of a blockchain: consensus. This is load-bearing, not paranoia.
            Privacy for the validator is privacy for every user who relies on the network remaining
            censorship-resistant.
          </p>
        </section>

        {/* BLOCK 4 */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow=" "
            title={<>Transparency is the only credible foundation for secrecy.</>}
            center={false}
            gradient="green"
          />
          <p className="text-white/75 leading-relaxed">
            The only way to know that the cryptography behind your transactions does what its
            authors claim is to read the code. Navio is MIT-licensed from genesis. Read it before
            you trust it. Fork it if you don't like where it's going.
          </p>
          <p className="text-white/75 leading-relaxed">
            A fair launch is part of the same ethic. No pre-mine. No ICO. No VC allocation with
            four-year vesting. No team tokens waiting to dump. The supply that exists on the chain
            today was earned, bought from the open market by users, by stakers, by people who staked or held it through
            a decade of market weather. You cannot buy your way to controlling this network.
          </p>
        </section>

        {/* SECTION BREAK */}
        <section>
          <div className="rounded-2xl overflow-hidden border border-white/10 relative aspect-[3/1]">
            <img src="/illustrations/cyberpunk-cable.webp" alt="Autonomous individual" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent pointer-events-none" />
          </div>
        </section>

        {/* BLOCK 5 — ANTI-CEX */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Against the gatekeepers"
            title={<>We do not pay to be listed. We do not bow to centralized exchanges.</>}
            center={false}
            gradient="pink"
          />
          <p className="text-white/75 leading-relaxed">
            Centralized exchanges are the surveillance layer of the crypto economy. They demand KYC,
            they freeze accounts, they hand user data to anyone with a badge and they charge
            six-figure listing fees to projects willing to submit to all of it. We are not that
            project. If an exchange wants to trade NAV, they can, on our terms or not at all.
          </p>
          <p className="text-white/75 leading-relaxed">
            Delisting a privacy coin is a badge of honor. It tells the user exactly which venues
            have chosen surveillance over sovereignty. That's information worth having.
            Atomic swaps and decentralized exchanges work. They are the correct venue for a
            confidential asset. If you need a custodian to hold your coins, you have not understood
            why we built this.
          </p>
          <div className="glow-card border-neon-pink/40">
            <p className="text-lg text-white/90 leading-relaxed font-semibold">
              If you are an enemy of privacy, we are not your friends.
            </p>
            <p className="text-sm text-white/60 leading-relaxed mt-3">
              That covers exchanges, chain-analysis firms, regulators drafting mass-surveillance
              statutes under the banner of "consumer protection," wallet vendors shipping
              closed-source spyware, foundations that trade user data for favorable regulatory
              treatment and "privacy" projects that fold the moment their soul can be sold. It
              also covers market participants who speculate on NAV without alignment with our
              principles. You are not welcome.
            </p>
          </div>
        </section>

        {/* BLOCK 6 — NO MARKETING */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow=" "
            title={<>We don't pay for attention. The community carries the torch.</>}
            center={false}
            gradient="green"
          />
          <p className="text-white/75 leading-relaxed">
            No influencer posts, no sponsored newsletters, no airdrops designed to manufacture a
            fake on-chain footprint. Every dollar spent on paid marketing is a dollar stolen from
            engineering, audits, documentation and infrastructure, the things that actually matter.
          </p>
          <p className="text-white/75 leading-relaxed">
            The people who believe in Navio spread the message. Stakers, developers, contributors,
            long-time holders who have stood by us for a decade, privacy advocates. They write the
            posts and run the channels.
          </p>
        </section>

        {/* VALUES */}
        <section>
          <SectionHeading eyebrow=" " title={<>TLDR: Our principles</>} gradient="blue" />
          <div className="mt-8 space-y-3">
            {PRINCIPLES.map((p, i) => (
              <div key={i} className="glow-card">
                <div className="mono text-[10px] tracking-[0.22em] uppercase text-neon-blue/80 mb-1">
                  Principle {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{p.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* JOIN */}
        <section className="text-center">
          <div className="glow-card gradient-border">
            <h2 className="text-3xl font-semibold gradient-text-pink mb-4">Come stand with us.</h2>
            <p className="text-white/65 max-w-xl mx-auto mb-8 leading-relaxed">
              We are not a foundation or a company. We are a community of idealists, developers
              and stakers united by the conviction that financial privacy is a human right.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://discord.com/invite/eBQ2QUkVXy" target="_blank" rel="noreferrer" className="neon-btn">
                <MessageCircle className="w-4 h-4" />
                Join Discord
              </a>
              <a href="https://x.com/navio_official" target="_blank" rel="noreferrer" className="ghost-btn">
                <Twitter className="w-4 h-4" />
                Follow on X
              </a>
              <a href="https://github.com/nav-io" target="_blank" rel="noreferrer" className="ghost-btn">
                <Github className="w-4 h-4" />
                Contribute on GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const PRINCIPLES = [
  {
    title: 'Privacy by default, not by opt-in',
    body: 'Every transaction on the chain is confidential. No shielded pools. No two-tier ledger. The anonymity set of any transaction is every other transaction in the same block.',
  },
  {
    title: 'No KYC, no permission, no whitelist',
    body: 'Anyone can run a node, stake coins, send a transaction or build an app.',
  },
  {
    title: 'Fair launch, no pre-mine, no ICO',
    body: 'No team tokens. No VC allocation. No treasury. We don\'t print coins "on demand".',
  },
  {
    title: 'Open source under MIT',
    body: 'Every piece of software is public. You can audit it, you can fork it.',
  },
  {
    title: 'No central authority',
    body: 'No entity controls Navio. No foundation. No single individual can veto a consensus change outside of the consensus rules. Rules live in code, changes ship through community agreement and forks are always an option.',
  },
  {
    title: 'No listing fees, no CEX tribute',
    body: 'We do not pay centralized exchanges to trade our coin. Atomic swaps and DEXs work. Custodial venues demanding fees, KYC and bribes are part of the problem.',
  },
  {
    title: 'Enemies of privacy are not our friends',
    body: 'Chain-analysis firms, surveillance-aligned regulators, KYC-mandating custodians, spyware wallets, market speculators. Go away.',
  },
  {
    title: 'No paid marketing, no bought attention',
    body: 'We do not pay influencers. We do not sponsor newsletters. Every dollar goes to engineering, audits, docs and infrastructure. The community carries the torch and spreads the message.',
  },
  {
    title: 'Fight financial surveillance',
    body: 'The surveillance financial system is not a neutral fact. It is an active tool of coercion. Private money is a tool of resistance.',
  },
];
