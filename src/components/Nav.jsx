import { useEffect, useState } from 'react';
import { LogoLockup } from './Logo';

const links = [
  { label: 'Positionnement', href: '#positionnement' },
  { label: 'Approche', href: '#approche' },
  { label: 'Opérations', href: '#operations' },
  { label: 'Produits', href: '#produits' },
  { label: 'Modèle', href: '#modele' },
  { label: 'Clientèles', href: '#clienteles' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const variant = scrolled ? 'dark' : 'light';
  const linkColor = scrolled
    ? 'text-ink-500 hover:text-ink-900'
    : 'text-white/75 hover:text-white';
  const ctaStyle = scrolled
    ? 'text-ink-900 bg-white border-ink-200 hover:border-ink-900'
    : 'text-white bg-white/10 border-white/30 hover:bg-white hover:text-ink-900 backdrop-blur-sm';
  const burgerColor = scrolled ? 'bg-ink-900' : 'bg-white';

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-ink-100'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between h-20 md:h-24">
        <a href="#top" className="flex items-center group">
          <LogoLockup variant={variant} />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium transition-colors duration-300 ${linkColor}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className={`hidden md:inline-flex items-center gap-2 text-[13px] font-medium border px-4 py-2.5 rounded-full transition-colors duration-300 ${ctaStyle}`}
          >
            Analyser mon flux
            <span className="w-1 h-1 rounded-full bg-ember" />
          </a>

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
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-ink-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-ember"
          >
            Analyser mon flux →
          </a>
        </nav>
      </div>
    </header>
  );
}
