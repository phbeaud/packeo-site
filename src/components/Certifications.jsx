import { useT } from '../i18n/I18nContext';

function Shield({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M16 3 L27 7 V16 Q27 24 16 29 Q5 24 5 16 V7 Z"
        stroke="#E85D1F"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M11 16 L14.5 19.5 L21 13"
        stroke="#E85D1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Certifications() {
  const { t } = useT();
  const items = t.certifications.items;

  return (
    <section className="relative bg-white py-24 md:py-32 border-t border-ink-100">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-10 md:gap-12 items-start mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-5">
            <div className="section-label mb-8 reveal">
              <span>{t.certifications.eyebrow}</span>
            </div>
            <h2 className="reveal font-display font-semibold text-display-md text-ink-900 tracking-ultra-tight">
              {t.certifications.titleA}
              <br />
              <span className="text-ink-400">{t.certifications.titleB}</span>
            </h2>
          </div>

          <div className="col-span-12 md:col-span-7 md:pt-3">
            <p
              className="reveal text-ink-500 text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ transitionDelay: '120ms' }}
            >
              {t.certifications.sub}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink-100 border border-ink-100">
          {items.map((cert, i) => (
            <div
              key={cert.code}
              className="reveal group bg-white p-6 md:p-8 transition-colors duration-500 hover:bg-bone flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <Shield className="w-7 h-7 md:w-8 md:h-8" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-ink-400 font-medium">
                  {cert.type}
                </span>
              </div>
              <div className="font-display text-2xl md:text-[28px] font-semibold text-ink-900 tracking-ultra-tight mb-3 leading-none">
                {cert.code}
              </div>
              <div className="text-sm font-medium text-ink-700 mb-3 leading-snug">
                {cert.name}
              </div>
              <p className="text-[13px] text-ink-500 leading-relaxed mt-auto">
                {cert.body}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 md:mt-14 hairline pt-8 md:pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[13px] text-ink-500 max-w-xl leading-relaxed">
            {t.certifications.footer}
          </p>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ember font-medium">
            <span className="w-2 h-2 rounded-full bg-ember" />
            {t.certifications.gfsiBadge}
          </div>
        </div>
      </div>
    </section>
  );
}
