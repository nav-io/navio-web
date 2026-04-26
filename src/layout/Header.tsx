import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';

const internalLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/technology', label: 'Technology' },
  { to: '/stake', label: 'Stake' },
  { to: '/ecosystem', label: 'Ecosystem' },
  { to: '/manifesto', label: 'Manifesto' },
];

const externalLinks = [
  { href: 'https://blocks.nav.io', label: 'Explorer' },
  { href: 'https://bridge.nav.io', label: 'Bridge' },
  { href: 'https://docs.nav.io', label: 'Docs' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-navy/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-5 shrink-0" aria-label="Navio">
          <img src="/illustrations/logo.svg" alt="" className="h-6 w-auto" />
          <span className="mono text-[10px] tracking-[0.28em] uppercase text-white/40 hidden md:inline border-l border-white/10 pl-5">
            Network of Anonymous Validators
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.03] p-0.5">
          {internalLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                  isActive ? 'text-white bg-white/10' : 'text-white/50 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          {externalLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="ghost-btn text-xs"
            >
              {label}
              <ExternalLink className="w-3 h-3" />
            </a>
          ))}
        </div>

        <button
          className="lg:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-navy/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {internalLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                    isActive ? 'text-white bg-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="h-px bg-white/5 my-2" />
            {externalLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-lg flex items-center justify-between"
                onClick={() => setOpen(false)}
              >
                {label}
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
