import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation, useParams } from 'react-router-dom';
import { LogoLockup } from './Logo';
import { useT, LangLink } from '../i18n/I18nContext';

export default function Nav() {
  const { t, lang } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang: urlLang } = useParams();
  const safeLang = ['fr', 'en'].includes(urlLang) ? urlLang : 'fr';

  const links = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.products, to: '/produits' },
    { label: t.nav.approach, to: '/approche' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isOnDarkHero = !scrolled;
  const variant = isOnDarkHero ? 'light' : 'dark';
  const baseLink = isOnDarkHero
    ? 'text-white/75 hover:text-white'
    : 'text-ink-500 hover:text-ink-900';
  const activeLink = isOnDarkHero ? 'text-white' : 'text-ink-900';
  const ctaStyle = isOnDarkHero
    ? 'text-white bg-white/10 border-white/30 hover:bg-white hover:text-ink-900 backdrop-blur-sm'
    : 'text-ink-900 bg-white border-ink-200 hover:border-ink-900';
  const burgerColor = isOnDarkHero ? 'bg-white' : 'bg-ink-900';
  const togglerBase = isOnDarkHero
    ? 'border-white/20 text-white/60'
    : 'border-ink-200 text-ink-400';
  const togglerActive = isOnDarkHero
    ? 'text-white bg-white/10'
    : 'text-ink-900 bg-ink-50';

  // Build the same path in the other language
  const otherLang = safeLang === 'fr' ? 'en' : 'fr';
  const currentPath = location.pathname.replace(`/${safeLang}`, '') || '/';
  const otherLangPath = `/${otherLang}${currentPath === '/' ? '' : currentPath}`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-ink-100'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between h-20 md:h-24">
        <LangLink to="/" className="flex items-center group">
          <LogoLockup variant={variant} />
        </LangLink>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={`/${safeLang}${l.to === '/' ? '' : l.to}`}
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

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div className={`hidden md:inline-flex items-center text-[11px] font-medium tracking-[0.18em] uppercase rounded-full border overflow-hidden ${togglerBase}`}>
            <Link
              to={`/fr${currentPath === '/' ? '' : currentPath}`}
              className={`px-3 py-1.5 transition-colors ${safeLang === 'fr' ? togglerActive : ''}`}
              aria-current={safeLang === 'fr' ? 'true' : undefined}
            >
              FR
            </Link>
            <span className={`w-px h-3 ${isOnDarkHero ? 'bg-white/20' : 'bg-ink-200'}`} />
            <Link
              to={otherLangPath.replace(`/${otherLang}`, '/en')}
              className={`px-3 py-1.5 transition-colors ${safeLang === 'en' ? togglerActive : ''}`}
              aria-current={safeLang === 'en' ? 'true' : undefined}
            >
              EN
            </Link>
          </div>

          <LangLink
            to="/#contact"
            className={`hidden md:inline-flex items-center gap-2 text-[13px] font-medium border px-4 py-2.5 rounded-full transition-colors duration-300 ${ctaStyle}`}
          >
            {t.nav.cta}
            <span className="w-1 h-1 rounded-full bg-ember" />
          </LangLink>

          <button
            aria-label={t.nav.menu}
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
          open ? 'max-h-[28rem] opacity-100 border-t border-ink-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-page py-6 flex flex-col gap-4 bg-white">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={`/${safeLang}${l.to === '/' ? '' : l.to}`}
              end={l.to === '/'}
              className="text-sm font-medium text-ink-700"
            >
              {l.label}
            </NavLink>
          ))}
          <LangLink to="/#contact" className="text-sm font-medium text-ember">
            {t.nav.cta} →
          </LangLink>
          <div className="flex items-center gap-2 pt-4 border-t border-ink-100 mt-2">
            <Link
              to={`/fr${currentPath === '/' ? '' : currentPath}`}
              className={`text-[11px] uppercase tracking-[0.22em] px-3 py-1.5 rounded-full border ${safeLang === 'fr' ? 'border-ink-900 text-ink-900' : 'border-ink-200 text-ink-400'}`}
            >
              FR
            </Link>
            <Link
              to={`/en${currentPath === '/' ? '' : currentPath}`}
              className={`text-[11px] uppercase tracking-[0.22em] px-3 py-1.5 rounded-full border ${safeLang === 'en' ? 'border-ink-900 text-ink-900' : 'border-ink-200 text-ink-400'}`}
            >
              EN
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
