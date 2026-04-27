import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function Ecosystem() {
  return (
    <div className="max-w-6xl mx-auto px-4 space-y-24">
      {/* HEADER */}
      <section className="pt-8 space-y-6 text-center">
        <div className="mono text-[10px] tracking-[0.3em] uppercase text-neon-purple/80 inline-flex items-center gap-2">
          <span className="neon-dot h-1.5 w-1.5" />
          Ecosystem
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          <span className="gradient-text">Wallets, tools, and apps</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          Everything running on or around Navio today. Open source, self-hostable, auditable —
          because that's the only acceptable foundation for privacy software.
        </p>
      </section>

      {/* WALLETS */}
      <section id="wallets">
        <SectionHeading
          eyebrow="01 — Wallets"
          title={<>Hold, send, stake</>}
          center={false}
          gradient="blue"
        />
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <WalletCard
            name="Navio Core"
            desc="The reference wallet. Bundled with the full node — full BLSCT support, CLI-first, ideal for stakers, developers, and anyone who wants to run their own stack."
            tags={['CLI', 'Full node', 'BLSCT']}
            links={[
              { label: 'Binaries', href: 'https://github.com/nav-io/navio-core/releases' },
              { label: 'Source', href: 'https://github.com/nav-io/navio-core', icon: true },
            ]}
          />
          <WalletCard
            name="Navio X"
            desc="Cross-platform desktop wallet. Electron app, tighter UX for everyday users. Available on macOS, Windows, and Linux."
            tags={['Desktop', 'Electron', 'Beta']}
            links={[
              { label: 'Website', href: 'https://navio-x.github.io/' },
              { label: 'Source', href: 'https://github.com/navio-x/navio-x', icon: true },
            ]}
          />
          <WalletCard
            name="Navio SDK"
            desc="TypeScript SDK for building browser and Node.js wallets. Key management, transaction construction, view-key audit wallets, everything a builder needs."
            tags={['TypeScript', 'Browser', 'Node']}
            links={[
              { label: 'Docs', href: 'https://docs.nav.io/sdk' },
              { label: 'Source', href: 'https://github.com/nav-io/navio-sdk', icon: true },
            ]}
          />
          <WalletCard
            name="libblsct bindings"
            desc="Native BLSCT primitives for integrators — TypeScript native/WASM, Python; C / Rust / Go on the roadmap. For lower level building."
            tags={['Native', 'WASM', 'Python']}
            links={[
              { label: 'Docs', href: 'https://docs.nav.io/blsct-lib' },
              { label: 'Source', href: 'https://github.com/nav-io/libblsct-bindings', icon: true },
            ]}
          />
        </div>
      </section>

      {/* APPS */}
      <section id="apps">
        <SectionHeading
          eyebrow="02 — Apps"
          title={<>Live right now</>}
          center={false}
          gradient="pink"
        />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          <AppCard
            title="Block Explorer"
            url="https://blocks.nav.io"
            desc="Browse blocks, inspect transactions, check the total supply. Every piece of publicly-visible chain data, indexed and searchable. Self-hostable."
          />
          <AppCard
            title="Bridge"
            url="https://bridge.nav.io"
            desc="Migrate legacy Navcoin NAV to native NAVIO during the swap window."
          />
          <AppCard
            title="Developer Docs"
            url="https://docs.nav.io"
            desc="Protocol specs, RPC reference, SDK guides, running a node, BLSCT cryptographic deep dive. Auto-generated from source so it doesn't drift."
          />
        </div>
      </section>

      {/* TRANSITION */}
      <section id="transition">
        <SectionHeading
          eyebrow="03 — Navcoin → Navio"
          title={<>Migrating legacy NAV</>}
          center={false}
          gradient="green"
          subtitle="If you hold Navcoin today, the bridge is how you get native NAVIO."
        />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          <Step n="01" title="Create a wallet">
            Generate a Navio wallet using Navio Core, Navio X, or the SDK. Capture your receive
            address — you'll paste it into the bridge.
          </Step>
          <Step n="02" title="Bridge in">
            Open <a href="https://bridge.nav.io" target="_blank" rel="noreferrer" className="text-neon-blue hover:underline">bridge.nav.io</a>,
            send Navcoin NAV to the generated deposit address, and watch the bridge burn your legacy
            coins.
          </Step>
          <Step n="03" title="Receive native NAV">
            Your Navio address receives native NAVIO 1:1 within minutes. Legacy coins are burned,
            so there's no double-spend. Swap window closes at Navcoin height 11,000,000.
          </Step>
        </div>
        <div className="glow-card mt-6">
          <p className="text-sm text-white/65 leading-relaxed">
            Mainnet activates at Navcoin block height <span className="mono text-neon-blue">10,500,000</span>{' '}
            (estimated end of June / beginning of July 2026). Initial supply is <span className="mono text-neon-blue">81,743,678 NAV</span>,
            migrated 1:1 from the Navcoin chain.
          </p>
        </div>
      </section>

      {/* SOURCE */}
      <section id="source">
        <SectionHeading
          eyebrow="04 — Source"
          title={<>Everything is on GitHub</>}
          center={false}
          gradient="blue"
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REPOS.map((r) => (
            <a key={r.name} href={r.url} target="_blank" rel="noreferrer" className="glow-card group flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <Github className="w-5 h-5 text-white/70" />
                <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/70 transition" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{r.name}</h3>
              <p className="text-sm text-white/60 leading-relaxed flex-1">{r.desc}</p>
              <div className="mono text-[10px] tracking-[0.2em] uppercase text-neon-blue/70 mt-4">
                {r.url.replace('https://github.com/', '')}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

const REPOS = [
  { name: 'navio-core', url: 'https://github.com/nav-io/navio-core',
    desc: 'C++ full node, wallet, staker. The canonical implementation.' },
  { name: 'navio-sdk', url: 'https://github.com/nav-io/navio-sdk',
    desc: 'TypeScript SDK for wallet developers.' },
  { name: 'libblsct-bindings', url: 'https://github.com/nav-io/libblsct-bindings',
    desc: 'Native BLSCT primitives — TS, WASM, Python. C/Rust/Go planned.' },
  { name: 'navio-blocks', url: 'https://github.com/nav-io/navio-blocks',
    desc: 'Block explorer: indexer, REST API, React frontend.' },
  { name: 'navio-bridge', url: 'https://github.com/nav-io/navio-bridge',
    desc: 'Bridge web app for Navcoin → Navio migration and wrapping.' },
  { name: 'navio-developer-docs', url: 'https://github.com/nav-io/navio-developer-docs',
    desc: 'Source of docs.nav.io. Contributions welcome.' },
];

function WalletCard({
  name, desc, tags, links,
}: {
  name: string;
  desc: string;
  tags: string[];
  links: { label: string; href: string; icon?: boolean }[];
}) {
  return (
    <div className="glow-card flex flex-col">
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-sm text-white/65 leading-relaxed mb-4 flex-1">{desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {tags.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="ghost-btn text-xs">
            {l.icon && <Github className="w-3 h-3" />}
            {l.label}
            <ExternalLink className="w-3 h-3" />
          </a>
        ))}
      </div>
    </div>
  );
}

function AppCard({ title, url, desc }: { title: string; url: string; desc: string }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="glow-card group flex flex-col">
      <h3 className="text-xl font-semibold gradient-text mb-2">{title}</h3>
      <p className="text-sm text-white/65 leading-relaxed flex-1 mb-4">{desc}</p>
      <div className="flex items-center justify-between">
        <div className="mono text-[10px] tracking-[0.2em] uppercase text-neon-blue/70">
          {url.replace('https://', '')}
        </div>
        <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/70 transition" />
      </div>
    </a>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="glow-card">
      <div className="mono text-2xl font-semibold gradient-text-green mb-3">{n}</div>
      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/65 leading-relaxed">{children}</p>
    </div>
  );
}
