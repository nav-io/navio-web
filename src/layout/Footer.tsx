import { Link } from 'react-router-dom';
import { Github, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-light/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/illustrations/logo.svg" alt="Navio" className="h-6" />
            </Link>
            <p className="text-sm text-white/60 max-w-sm mb-5">
              Confidentiality by default. Stake-secured. Open source. A base-layer blockchain
              built for people who believe financial privacy is a right — not a feature.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://discord.com/invite/eBQ2QUkVXy" target="_blank" rel="noreferrer"
                 className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] hover:border-neon-blue/50 hover:bg-white/[0.06] flex items-center justify-center text-white/60 hover:text-white transition">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="https://x.com/nav_io" target="_blank" rel="noreferrer"
                 className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] hover:border-neon-blue/50 hover:bg-white/[0.06] flex items-center justify-center text-white/60 hover:text-white transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com/nav-io" target="_blank" rel="noreferrer"
                 className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] hover:border-neon-blue/50 hover:bg-white/[0.06] flex items-center justify-center text-white/60 hover:text-white transition">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mono text-[10px] tracking-[0.28em] uppercase text-white/40 mb-4">Protocol</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/technology" className="text-white/70 hover:text-white transition">Technology</Link></li>
              <li><Link to="/stake" className="text-white/70 hover:text-white transition">Stake</Link></li>
              <li><Link to="/ecosystem" className="text-white/70 hover:text-white transition">Ecosystem</Link></li>
              <li><Link to="/manifesto" className="text-white/70 hover:text-white transition">Manifesto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mono text-[10px] tracking-[0.28em] uppercase text-white/40 mb-4">Apps</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://blocks.nav.io" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition">Block Explorer</a></li>
              <li><a href="https://bridge.nav.io" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition">Bridge</a></li>
              <li><a href="https://docs.nav.io" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition">Developer Docs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mono text-[10px] tracking-[0.28em] uppercase text-white/40 mb-4">Community</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://discord.com/invite/eBQ2QUkVXy" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition">Discord</a></li>
              <li><a href="https://x.com/nav_io" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition">Twitter / X</a></li>
              <li><a href="https://github.com/nav-io" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition">GitHub</a></li>
              <li><a href="https://navio.medium.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition">Medium</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="mono text-[10px] tracking-[0.22em] uppercase text-white/25">
            © 2014–2026 · Navio · MIT License · No Pre-Mine · No ICO
          </p>
          <p className="mono text-[10px] tracking-[0.22em] uppercase text-white/25">
            privacy is not a privilege
          </p>
        </div>
      </div>
    </footer>
  );
}
