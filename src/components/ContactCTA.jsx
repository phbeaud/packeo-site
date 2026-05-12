import { LangLink, useT } from '../i18n/I18nContext';

export default function ContactCTA({ title, sub }) {
  const { t } = useT();
  const finalTitle = title || (
    <>
      {t.contactCTA.defaultTitleA}
      <br />
      <span className="text-ink-400">{t.contactCTA.defaultTitleB}</span>
    </>
  );

  return (
    <section className="relative bg-bone py-24 md:py-32 overflow-hidden border-t border-ink-100">
      <div className="container-page">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="font-display font-semibold text-display-md text-ink-900 tracking-ultra-tight">
              {finalTitle}
            </h2>
            {sub && (
              <p className="mt-6 text-ink-500 text-base md:text-lg leading-relaxed max-w-xl">
                {sub}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <LangLink
              to="/#contact"
              className="group inline-flex items-center gap-3 bg-ink-900 text-white text-sm font-medium px-6 py-3.5 rounded-full hover:bg-ember transition-all duration-300"
            >
              {t.contactCTA.ctaPrimary}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </LangLink>
            <a
              href="mailto:info@packeo.ca"
              className="inline-flex items-center gap-3 text-sm font-medium text-ink-900 px-6 py-3.5 rounded-full border border-ink-200 hover:border-ink-900 transition-colors duration-300"
            >
              info@packeo.ca
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
