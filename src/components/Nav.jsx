import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { LogoLockup } from './Logo';

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Produits', to: '/produits' },
  { label: 'Approche', to: '/approche' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // The hero on Accueil is dark; sub-pages start with PageHero (also dark).
  // So at the top of any page, the background is dark.
  const isOnDarkHero = !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const variant = isOnDarkHero ? 'light' : 'dark';
  const baseLink = isOnDarkHero
    ? 'text-white/75 hover:text-white'
    : 'text-ink-500 hover:text-ink-900';
  const activeLink = isOnDarkHero ? 'text-white' : 'text-ink-900';
  const ctaStyle = isOnDarkHero
    ? 'text-white bg-white/10 border-white/30 hover:bg-white hover:text-ink-900 backdrop-blur-sm'
    : 'text-ink-900 bg-white border-ink-200 hover:border-ink-900';
  const burgerColor = isOnDarkHero ? 'bg-white' : 'bg-ink-900';

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-ink-100'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center group">
          <LogoLockup variant={variant} />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `relative text-[13px] font-medium transition-colors duration-300 ${
                  isActive ? activeLink : baseLink
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 right-0 h-px bg-ember" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/#contact"
            className={`hidden md:inline-flex items-center gap-2 text-[13px] font-medium border px-4 py-2.5 rounded-full transition-colors duration-300 ${ctaStyle}`}
          >
            Analyser mon flux
            <span className="w-1 h-1 rounded-full bg-ember" />
          </Link>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`block w-5 h-px transition-all duration-300 ${burgerColor} ${
                open ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`block w-5 h-px transition-all duration-300 ${burgerColor} ${
                open ? '-translate-y-1 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? 'max-h-96 opacity-100 border-t border-ink-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-page py-6 flex flex-col gap-4 bg-white">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className="text-sm font-medium text-ink-700"
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/#contact" className="text-sm font-medium text-ember">
            Analyser mon flux →
          </Link>
        </nav>
      </div>
    </header>
  );
}
