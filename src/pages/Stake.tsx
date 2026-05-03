import { ExternalLink, Cpu, HardDrive, Wifi, Terminal, Coins } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import PageBanner from '../components/PageBanner';

export default function Stake() {
  return (
    <>
      <PageBanner src="/illustrations/moon-cityscape.webp"
        objectPosition="center 35%"
        alt="Distributed infrastructure" />
    <div className="max-w-5xl mx-auto px-4 space-y-24">
      {/* HEADER */}
      <section className="pt-8 space-y-6 text-center">
        <div className="mono text-[10px] tracking-[0.3em] uppercase text-neon-green/80 inline-flex items-center gap-2">
          <span className="neon-dot h-1.5 w-1.5" />
          Run a node
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          <span className="gradient-text-green">Stake NAV. Secure the network.</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          Stake directly; run your own node. You hold the keys, run the staker binary on
          hardware you control, and produce blocks while the protocol keeps your validator
          identity and stake amount hidden from everyone else on the network.
        </p>
      </section>

      {/* HARDWARE */}
      <section>
        <SectionHeading
          eyebrow="01 — Hardware"
          title={<>What you need to run</>}
          center={false}
          gradient="blue"
        />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Spec icon={<Cpu className="w-5 h-5" />} label="CPU">
            4+ vCPU x86-64 with AVX2, or ARMv8 with crypto extensions.
          </Spec>
          <Spec icon={<HardDrive className="w-5 h-5" />} label="Storage & Memory">
            40+ GB NVMe SSD. 8GB+ RAM.
          </Spec>
          <Spec icon={<Wifi className="w-5 h-5" />} label="Network">
            100 Mbps symmetric with low jitter.
          </Spec>
          <Spec icon={<Terminal className="w-5 h-5" />} label="OS & time">
            Linux or macOS. NTP configured.
          </Spec>
        </div>
      </section>

      {/* INSTALL */}
      <section>
        <SectionHeading
          eyebrow="02 — Install"
          title={<>Build the node</>}
          center={false}
          gradient="pink"
        />
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          <div className="glow-card">
            <div className="mono text-[10px] tracking-[0.22em] uppercase text-neon-blue/80 mb-2">Debian / Ubuntu</div>
            <h3 className="text-base font-semibold text-white mb-3">Dependencies</h3>
            <pre className="mono text-[11px] text-white/70 bg-black/40 rounded-lg p-4 overflow-x-auto">
{`sudo apt install -y \\
  build-essential libtool autotools-dev automake pkg-config \\
  libssl-dev libevent-dev bsdmainutils libsqlite3-dev \\
  libboost-system-dev libboost-filesystem-dev libboost-chrono-dev \\
  libboost-test-dev libboost-thread-dev \\
  libminiupnpc-dev libzmq3-dev git`}
            </pre>
          </div>
          <div className="glow-card">
            <div className="mono text-[10px] tracking-[0.22em] uppercase text-neon-pink/80 mb-2">macOS (Homebrew)</div>
            <h3 className="text-base font-semibold text-white mb-3">Dependencies</h3>
            <pre className="mono text-[11px] text-white/70 bg-black/40 rounded-lg p-4 overflow-x-auto">
{`brew install \\
  automake libtool boost pkg-config \\
  libevent miniupnpc zeromq sqlite`}
            </pre>
          </div>
        </div>
        <div className="glow-card mt-5">
          <div className="mono text-[10px] tracking-[0.22em] uppercase text-neon-green/80 mb-2">Build from source</div>
          <pre className="mono text-[11px] text-white/70 bg-black/40 rounded-lg p-4 overflow-x-auto">
{`git clone https://github.com/nav-io/navio-core.git
cd navio-core
./autogen.sh
./configure
make -j$(nproc)
sudo make install  # optional`}
          </pre>
          <p className="text-xs text-white/50 mt-3 leading-relaxed">
            Produces <code className="mono text-neon-blue">naviod</code> (full node),{' '}
            <code className="mono text-neon-blue">navio-cli</code> (RPC client),{' '}
            <code className="mono text-neon-blue">navio-staker</code> (block producer),{' '}
            <code className="mono text-neon-blue">navio-wallet</code> (wallet utility), and{' '}
            <code className="mono text-neon-blue">navio-tx</code> (transaction constructor).
          </p>
        </div>
      </section>

      {/* SECTION BREAK */}
      <section>
        <div className="rounded-2xl overflow-hidden border border-white/10 relative aspect-[3/1]">
          <img src="/illustrations/retro-tunnel.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* STAKE */}
      <section>
        <SectionHeading
          eyebrow="03 — Stake"
          title={<>Lock NAV, run the staker</>}
          center={false}
          gradient="green"
        />
        <div className="mt-8 space-y-5">
          <Numbered n="01" title="Sync the node">
            <pre className="mono text-[11px] text-white/70 bg-black/40 rounded-lg p-3 overflow-x-auto">
{`naviod -daemon -server=1 -rpcuser=... -rpcpassword=...`}
            </pre>
            <p className="text-xs text-white/55 mt-2">Wait for <code className="mono text-neon-blue">getblockchaininfo</code> to return tip height.</p>
          </Numbered>

          <Numbered n="02" title="Create a BLSCT wallet">
            <pre className="mono text-[11px] text-white/70 bg-black/40 rounded-lg p-3 overflow-x-auto">
{`navio-wallet -blsct -wallet=staker create`}
            </pre>
          </Numbered>

          {/* <Numbered n="03" title="Unlock for staking only">
            <pre className="mono text-[11px] text-white/70 bg-black/40 rounded-lg p-3 overflow-x-auto">
{`navio-cli walletpassphrase <password> <timeout> true`}
            </pre>
            <p className="text-xs text-white/55 mt-2">
              The trailing <code className="mono text-neon-blue">true</code> unlocks the wallet for staking only —
              spend authority stays locked.
            </p>
          </Numbered> */}

          <Numbered n="03" title="Lock stake">
            <pre className="mono text-[11px] text-white/70 bg-black/40 rounded-lg p-3 overflow-x-auto">
{`navio-cli stakelock 10000`}
            </pre>
            <p className="text-xs text-white/55 mt-2">
              Moves 10,000 NAV into the staking sub-address pool. Locked coins become eligible after
              confirmation.
            </p>
          </Numbered>

          <Numbered n="04" title="Run the staker daemon">
            <pre className="mono text-[11px] text-white/70 bg-black/40 rounded-lg p-3 overflow-x-auto">
{`navio-staker -wallet=staker`}
            </pre>
            <p className="text-xs text-white/55 mt-2">
              Polls the node every block, constructs PoPS proofs for each eligible output, and
              submits blocks when its proof wins.
            </p>
          </Numbered>

          {/* <Numbered n="06" title="Unlock when done">
            <pre className="mono text-[11px] text-white/70 bg-black/40 rounded-lg p-3 overflow-x-auto">
{`navio-cli stakeunlock 10000`}
            </pre>
          </Numbered> */}
        </div>
      </section>

      {/* REWARDS */}
      <section>
        <SectionHeading
          eyebrow="04 — Rewards"
          title={<>What you earn</>}
          center={false}
          gradient="pink"
        />
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          <div className="glow-card">
            <div className="flex items-center gap-2 text-neon-blue mb-3">
              <Coins className="w-5 h-5" />
              <span className="mono text-[10px] tracking-[0.22em] uppercase">Per block</span>
            </div>
            <div className="text-3xl font-semibold gradient-text mb-1">8 NAV</div>
            <p className="text-xs text-white/55 leading-relaxed mt-2">
              Mainnet subsidy paid to a fresh stealth address owned by your staking sub-account. No
              validator identity is ever revealed on-chain.
            </p>
          </div>
          <div className="glow-card">
            <div className="flex items-center gap-2 text-neon-purple mb-3">
              <Coins className="w-5 h-5" />
              <span className="mono text-[10px] tracking-[0.22em] uppercase">Block time</span>
            </div>
            <div className="text-3xl font-semibold gradient-text mb-1">120 sec</div>
            <p className="text-xs text-white/55 leading-relaxed mt-2">
              720 blocks per day on mainnet. Your share depends on the total staked supply relative
              to your locked amount.
            </p>
          </div>
          <div className="glow-card">
            <div className="flex items-center gap-2 text-neon-pink mb-3">
              <Coins className="w-5 h-5" />
              <span className="mono text-[10px] tracking-[0.22em] uppercase">Fees</span>
            </div>
            <div className="text-3xl font-semibold gradient-text mb-1">burned</div>
            <p className="text-xs text-white/55 leading-relaxed mt-2">
              Validators receive the block subsidy only. Transaction fees are destroyed, making
              heavy blocks mildly deflationary — a structural counterweight to inflation.
            </p>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section>
        <SectionHeading
          eyebrow="05 — Resources"
          title={<>Where to go next</>}
          center={false}
          gradient="blue"
        />
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          <a href="https://docs.nav.io/node/install" target="_blank" rel="noreferrer" className="glow-card group">
            <h3 className="text-base font-semibold text-white mb-2">Install guide</h3>
            <p className="text-sm text-white/60 leading-relaxed">Full install walkthrough — Docker, release binaries, source.</p>
            <div className="mono text-[10px] tracking-[0.2em] uppercase text-neon-blue/70 mt-4 flex items-center gap-1">
              docs.nav.io/node/install <ExternalLink className="w-3 h-3" />
            </div>
          </a>
          <a href="https://docs.nav.io/node/staking" target="_blank" rel="noreferrer" className="glow-card group">
            <h3 className="text-base font-semibold text-white mb-2">Staking docs</h3>
            <p className="text-sm text-white/60 leading-relaxed">Hardware, lock/unlock flow, navio-staker internals.</p>
            <div className="mono text-[10px] tracking-[0.2em] uppercase text-neon-blue/70 mt-4 flex items-center gap-1">
              docs.nav.io/node/staking <ExternalLink className="w-3 h-3" />
            </div>
          </a>
          <a href="https://docs.nav.io/guides/staking-vps" target="_blank" rel="noreferrer" className="glow-card group">
            <h3 className="text-base font-semibold text-white mb-2">VPS guide</h3>
            <p className="text-sm text-white/60 leading-relaxed">End-to-end VPS setup, hardening, monitoring.</p>
            <div className="mono text-[10px] tracking-[0.2em] uppercase text-neon-blue/70 mt-4 flex items-center gap-1">
              docs.nav.io/guides/staking-vps <ExternalLink className="w-3 h-3" />
            </div>
          </a>
        </div>
      </section>
    </div>
    </>
  );
}

function Spec({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="glow-card">
      <div className="flex items-center gap-2 text-neon-blue mb-3">
        {icon}
        <span className="mono text-[10px] tracking-[0.22em] uppercase">{label}</span>
      </div>
      <p className="text-sm text-white/70 leading-relaxed">{children}</p>
    </div>
  );
}

function Numbered({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="glow-card">
      <div className="flex items-start gap-4">
        <div className="mono text-2xl font-semibold gradient-text shrink-0">{n}</div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-white mb-3">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}
