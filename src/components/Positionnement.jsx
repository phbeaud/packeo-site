import { useT } from '../i18n/I18nContext';

export default function Positionnement() {
  const { t } = useT();
  return (
    <section id="positionnement" className="relative bg-white py-28 md:py-40">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="col-span-12 md:col-span-4 reveal md:sticky md:top-28">
            <div className="section-label mb-8">
              <span>{t.positionnement.eyebrow}</span>
            </div>
            <p className="text-sm text-ink-400 font-medium mb-10">{t.positionnement.label}</p>

            <div className="hidden md:block aspect-[4/5] rounded-[4px] bg-ink-900 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
                aria-hidden
              />
              <div
                className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-60 pointer-events-none"
                style={{
                  background: 'radial-gradient(closest-side, rgba(232, 93, 31, 0.35), transparent 70%)',
                }}
                aria-hidden
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-ember font-medium">
                  <span className="w-2 h-2 rounded-full bg-ember" />
                  {t.positionnement.sideboxTag}
                </div>

                <div className="flex flex-col gap-6">
                  {t.positionnement.sideboxChain.map((step) => (
                    <div key={step} className="flex items-center gap-3 text-xs text-white/50 line-through decoration-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      {step}
                    </div>
                  ))}
                  <div className="flex items-center gap-3 text-sm text-white font-medium">
                    <span className="w-2 h-2 rounded-full bg-ember" />
                    {t.positionnement.sideboxKeep[0]}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white font-medium pt-4 border-t border-white/15">
                    <span className="w-2 h-2 rounded-full bg-ember" />
                    {t.positionnement.sideboxKeep[1]}
                  </div>
                </div>

                <div className="font-display text-2xl font-semibold leading-tight tracking-tight">
                  {t.positionnement.sideboxA}
                  <br />
                  <span className="text-ember">{t.positionnement.sideboxB}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <h2 className="reveal font-display font-semibold text-display-lg text-ink-900 max-w-[22ch]">
              {t.positionnement.title}
            </h2>
            <p
              className="reveal mt-10 md:mt-12 text-lg md:text-xl text-ink-500 leading-relaxed max-w-3xl"
              style={{ transitionDelay: '120ms' }}
            >
              {t.positionnement.body}
            </p>

            <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-100 border border-ink-100">
              {t.positionnement.kpis.map((item, i) => (
                <div
                  key={item.kpi}
                  className="reveal bg-white p-8 md:p-10"
                  style={{ transitionDelay: `${160 + i * 100}ms` }}
                >
                  <div className="text-[11px] uppercase tracking-[0.22em] font-medium text-ember mb-6">
                    {item.kpi}
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-medium text-ink-900 mb-3 tracking-tight">
                    {item.label}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
