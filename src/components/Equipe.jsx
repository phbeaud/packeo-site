import { useState } from 'react';
import { useT } from '../i18n/I18nContext';

const BASE = import.meta.env.BASE_URL;

// Keyed by name so photos always follow the right person,
// regardless of the display order set in translations.
const PHOTO_BY_NAME = {
  'Isabelle Paradis': `${BASE}images/equipe/isabelle-paradis.jpg`,
  'Philippe Beaudoin': `${BASE}images/equipe/philippe-beaudoin.jpg`,
  'Daniel Mireault': `${BASE}images/equipe/daniel-mireault.jpg`,
  'Alexandre Benoit': `${BASE}images/equipe/alexandre-benoit.jpg`,
};

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

function Portrait({ src, name }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 bg-ink-900 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          aria-hidden
        />
        <div
          className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-50 pointer-events-none"
          style={{
            background:
              'radial-gradient(closest-side, rgba(232, 93, 31, 0.35), transparent 70%)',
          }}
          aria-hidden
        />
        <span className="relative font-display text-6xl md:text-7xl font-semibold text-white/90 tracking-ultra-tight">
          {initials(name)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
    />
  );
}

export default function Equipe() {
  const { t } = useT();

  return (
    <section id="equipe" className="relative bg-white py-24 md:py-32">
      <div className="container-page">
        {t.equipe.members.map((m, i) => {
          const reversed = i % 2 === 1;
          return (
            <article
              key={m.name}
              className={`reveal group grid grid-cols-12 gap-8 md:gap-14 items-start ${
                i > 0 ? 'mt-20 md:mt-28 pt-20 md:pt-28 border-t border-ink-100' : ''
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Portrait */}
              <div
                className={`col-span-12 md:col-span-5 lg:col-span-4 ${
                  reversed ? 'md:order-2' : ''
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-ink-100">
                  <Portrait src={PHOTO_BY_NAME[m.name]} name={m.name} />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
                </div>
              </div>

              {/* Bio */}
              <div
                className={`col-span-12 md:col-span-7 lg:col-span-8 ${
                  reversed ? 'md:order-1' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-ember" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-500 font-medium">
                    {m.role}
                  </span>
                </div>

                <h2 className="font-display text-display-md font-semibold text-ink-900 tracking-ultra-tight mb-8">
                  {m.name}
                </h2>

                <div className="space-y-5 max-w-2xl">
                  {m.bio.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-ink-500 text-[15px] md:text-base leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {m.focus && m.focus.length > 0 && (
                  <div className="mt-10 pt-8 border-t border-ink-100">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-ink-400 font-medium mb-5">
                      {t.equipe.focusLabel}
                    </div>
                    <ul className="flex flex-wrap gap-x-6 gap-y-3">
                      {m.focus.map((f) => (
                        <li
                          key={f}
                          className="text-[13px] md:text-sm text-ink-700 flex items-center gap-2.5"
                        >
                          <span className="w-3 h-px bg-ember" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
