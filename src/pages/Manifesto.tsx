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
            "Cypherpunks write code." — Eric Hughes, 1993
          </p>
        </section>

        {/* BLOCK 1 */}
        <section className="space-y-6">
          <p className="text-lg text-white/80 leading-relaxed first-letter:text-5xl first-letter:font-semibold first-letter:gradient-text-pink first-letter:mr-2 first-letter:float-left first-letter:leading-none">
            Every transaction you make is surveillance bait. Your payment processor sells it. Your
            bank flags it. Your government subpoenas it. Your exchange turns it over without a fight.
            A pseudonymous chain like Bitcoin is not private — it is a public ledger with a thin layer
            of plausible deniability, pierced by any chain-analysis firm with a GPU and a court order.
          </p>
          <p className="text-lg text-white/80 leading-relaxed">
            This is not an accident. The financial surveillance apparatus was built on purpose. KYC,
            AML, FATF travel rules, sanctions screening, counterparty risk scoring — all of it exists
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
            eyebrow="Why base-layer matters"
            title={<>Opt-in privacy is a trap.</>}
            center={false}
            gradient="blue"
          />
          <p className="text-white/75 leading-relaxed">
            Every major chain with "optional" privacy ends up with a two-tier ledger: the unshielded
            majority, and a suspicious minority who chose to shield. The small anonymity set is easier
            to deanonymize. The act of using privacy becomes itself a red flag. Exchanges refuse to
            process deposits from shielded pools. Regulators pressure wallet vendors to disable
            private features. The tool works technically, and fails socially.
          </p>
          <p className="text-white/75 leading-relaxed">
            Navio doesn't have a shielded pool. It has a shielded <em>chain</em>. The anonymity set
            of any transaction is every other transaction in the same block. There is no unshielded
            option to contrast with. Privacy
            isn't a signal — it's the default, like HTTPS on the web in 2026, like encrypted messaging
            on your phone. Unremarkable. Expected. The way things should have been from day one.
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
            amount. You can see who is producing blocks. You can see how much they hold. You can
            subpoena the node operator. You can sanction the stake. You can freeze the rewards. In a
            hostile legal environment, a transparent validator set is a direct attack surface on the
            chain's liveness and neutrality.
          </p>
          <p className="text-white/75 leading-relaxed">
            Proof-of-Private-Stake takes that surface away. Who produced the block? Unknown. How much
            stake did they use? Unknown. What address will receive the next reward? Unknown. This
            isn't paranoia. This is load-bearing — privacy for the validator is privacy for every user
            who relies on the network remaining censorship-resistant.
          </p>
        </section>

        {/* BLOCK 4 */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Why open source matters"
            title={<>Transparency is the only credible foundation for secrecy.</>}
            center={false}
            gradient="green"
          />
          <p className="text-white/75 leading-relaxed">
            The only way to know that the cryptography behind your transactions does what its
            authors claim is to read the code, or
            to read the work of others who read the code. Navio is MIT-licensed from genesis. Every
            consensus rule, every cryptographic primitive, every wallet heuristic is public. Audit it.
            Fork it. Port it. Attack it.
          </p>
          <p className="text-white/75 leading-relaxed">
            A fair launch is part of the same ethic. No pre-mine. No ICO. No VC allocation with
            four-year vesting. No team tokens waiting to dump. The supply that exists on the chain
            today was earned — by users, by validators, by people who mined or staked or held through
            a decade of market weather. You cannot buy your way to controlling this network. You can
            only earn your way.
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
            they freeze accounts, they hand user data to anyone with a badge, and they charge
            six-figure listing fees to projects willing to submit to all of it. We are not that
            project. If an exchange wants to trade NAV, they can — on our terms, or not at all.
          </p>
          <p className="text-white/75 leading-relaxed">
            Delisting a privacy coin is a badge of honor. It tells the user exactly which venues
            have chosen surveillance over sovereignty, and that's information worth having.
            Atomic swaps and decentralized exchanges work. They are the correct venue for a
            confidential asset. If you need a custodian to hold your coins, you have not understood
            why we built this.
          </p>
          <div className="glow-card border-neon-pink/40">
            <p className="text-lg text-white/90 leading-relaxed font-semibold">
              If you are an enemy of privacy, we are not your friends.
            </p>
            <p className="text-sm text-white/60 leading-relaxed mt-3">
              That applies to exchanges. It applies to chain-analysis firms. It applies to
              regulators drafting mass-surveillance statutes under the banner of "consumer
              protection." It applies to wallet vendors shipping closed-source spyware, to
              foundations that trade user data for favorable regulatory treatment, and to
              "privacy" projects that fold the moment a subpoena arrives. Pick a side. We picked
              ours in 2014.
            </p>
          </div>
        </section>

        {/* BLOCK 6 — NO MARKETING */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="No budget, no banners, no shilling"
            title={<>We don't pay for attention. The community carries the torch.</>}
            center={false}
            gradient="green"
          />
          <p className="text-white/75 leading-relaxed">
            We do not buy influencer posts. We do not sponsor newsletters. We do not run airdrops
            designed to manufacture a fake on-chain footprint. Every dollar spent on paid marketing
            is a dollar stolen from engineering, audits, documentation, and infrastructure — the
            things that actually matter.
          </p>
          <p className="text-white/75 leading-relaxed">
            The people who believe in Navio spread the message. Stakers, developers, contributors,
            long-time holders who have stood by us for a decade. They write the posts. They run
            the channels. They answer questions at 2am. That's not a growth strategy — that's a
            community. And it is worth more than any marketing budget.
          </p>
          <p className="text-white/75 leading-relaxed italic text-white/60">
            If you are reading this because someone you trust told you to, thank them. That's how
            this works.
          </p>
        </section>

        {/* VALUES */}
        <section>
          <SectionHeading eyebrow="What we stand for" title={<>Our principles, plainly stated</>} gradient="blue" />
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
              We are not a foundation. We are not a company. We are a community of idealists,
              developers, and stakers united by the conviction that financial privacy is a human right
              — and willing to write the code to defend it.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://discord.com/invite/eBQ2QUkVXy" target="_blank" rel="noreferrer" className="neon-btn">
                <MessageCircle className="w-4 h-4" />
                Join Discord
              </a>
              <a href="https://x.com/nav_io" target="_blank" rel="noreferrer" className="ghost-btn">
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
    body: 'Every transaction on the canonical chain is confidential. No shielded pools. No two-tier ledger. The anonymity set of any transaction is every other transaction in the same block.',
  },
  {
    title: 'No KYC, no permission, no whitelist',
    body: 'Anyone can run a node, stake coins, send a transaction, or build an app. If the protocol needs your identity to function, we have already lost.',
  },
  {
    title: 'Fair launch, no pre-mine, no ICO',
    body: 'No team tokens. No VC allocation. No foundation treasury carved out of supply. The chain started at zero and grew through use.',
  },
  {
    title: 'Open source under MIT',
    body: 'Every consensus rule, every cryptographic primitive, every wallet heuristic is public. You can audit it, you can fork it. Closed-source privacy software is an oxymoron.',
  },
  {
    title: 'No central authority',
    body: 'No company controls Navio. No foundation. No single individual can veto a consensus change. Rules live in code, changes ship through community agreement, and forks are always an option.',
  },
  {
    title: 'No listing fees, no CEX tribute',
    body: 'We do not pay centralized exchanges to trade our coin. Atomic swaps and DEXs work. Custodial venues demanding fees, KYC, and data hand-over are not partners — they are the problem.',
  },
  {
    title: 'Enemies of privacy are not our friends',
    body: 'Chain-analysis firms, surveillance-aligned regulators, KYC-mandating custodians, spyware wallets. Pick a side. We picked ours in 2014.',
  },
  {
    title: 'No paid marketing, no bought attention',
    body: 'We do not pay influencers. We do not sponsor newsletters. Every dollar goes to engineering, audits, docs, and infrastructure. The community carries the torch and spreads the message.',
  },
  {
    title: 'Fight financial surveillance',
    body: 'The surveillance financial system is not a neutral fact. It is an active tool of coercion, and private money is a precondition for resisting it. That fight is the reason Navio exists.',
  },
];
