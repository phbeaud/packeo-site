import { LangLink, useT } from '../i18n/I18nContext';
import { LogoLockup } from './Logo';

export default function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-ink-900 text-white pt-20 md:pt-28 pb-10 overflow-hidden">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-10 pb-16 md:pb-24 border-b border-ink-700">
          <div className="col-span-12 md:col-span-6">
            <div className="mb-10">
              <LogoLockup variant="light" tagline={t.common.logoTagline} />
            </div>
            <p className="font-display text-2xl md:text-3xl font-medium tracking-tight max-w-xl leading-tight">
              {t.footer.tagline}
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-ink-400 font-medium mb-6">
              {t.footer.nav}
            </h4>
            <ul className="space-y-3 text-sm text-ink-200">
              <li><LangLink to="/" className="hover:text-white transition-colors">{t.footer.links.home}</LangLink></li>
              <li><LangLink to="/produits" className="hover:text-white transition-colors">{t.footer.links.products}</LangLink></li>
              <li><LangLink to="/approche" className="hover:text-white transition-colors">{t.footer.links.approach}</LangLink></li>
              <li><LangLink to="/#modele" className="hover:text-white transition-colors">{t.footer.links.modele}</LangLink></li>
              <li><LangLink to="/#clienteles" className="hover:text-white transition-colors">{t.footer.links.clienteles}</LangLink></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-ink-400 font-medium mb-6">
              {t.footer.reach}
            </h4>
            <ul className="space-y-3 text-sm text-ink-200">
              <li>
                <a href="mailto:info@packeo.ca" className="hover:text-white transition-colors">info@packeo.ca</a>
              </li>
              <li>
                <a href="tel:+14189536132" className="hover:text-white transition-colors">418 953-6132</a>
              </li>
              <li><LangLink to="/#contact" className="hover:text-white transition-colors">{t.footer.links.analysis}</LangLink></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs text-ink-400">
          <div>© {year} Packeo. {t.footer.rights}</div>
          <div className="flex items-center gap-6">
            <span className="uppercase tracking-[0.22em] font-medium">{t.footer.location}</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ember" />
              <span>{t.footer.b2b}</span>
            </span>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none select-none absolute -bottom-12 md:-bottom-20 left-0 right-0 text-center font-display font-bold tracking-ultra-tight text-ink-800/60"
        style={{ fontSize: 'clamp(5rem, 22vw, 20rem)', lineHeight: 1 }}
        aria-hidden
      >
        PACKEO
      </div>
    </footer>
  );
}
