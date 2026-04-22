const steps = [
  {
    n: '01',
    title: 'Importation directe',
    body:
      'Relations bâties avec les manufacturiers en amont. Nous négocions, qualifions et importons — sans couches de distribution.',
  },
  {
    n: '02',
    title: 'Réduction des intermédiaires',
    body:
      'Chaque maillon retiré est une marge commerciale éliminée et un prix ramené à sa juste valeur manufacturière.',
  },
  {
    n: '03',
    title: 'Flexibilité logistique',
    body:
      "Livraisons planifiées, conteneurs partagés, retraits ponctuels : le flux s'adapte à votre cadence opérationnelle.",
  },
  {
    n: '04',
    title: 'Entreposage possible',
    body:
      'Volume tamponné sur demande pour lisser la production, absorber les pics, ou sécuriser un inventaire stratégique.',
  },
];

export default function Approche() {
  return (
    <section id="approche" className="relative bg-bone py-28 md:py-40 overflow-hidden">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="section-label mb-8 reveal">
              <span>02 — Approche</span>
            </div>
            <h2 className="reveal font-display font-semibold text-display-lg text-ink-900 tracking-ultra-tight">
              Quatre leviers.
              <br />
              Une chaîne reprise à la source.
            </h2>
          </div>
          <p
            className="reveal text-ink-500 text-base md:text-lg max-w-sm leading-relaxed"
            style={{ transitionDelay: '120ms' }}
          >
            Chaque décision vise à réduire vos coûts réels, pas seulement le prix
            affiché.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal card-hover group relative bg-white border border-ink-100 p-8 md:p-10 lg:p-12 rounded-[4px] hover:border-ink-300"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="flex items-start justify-between mb-10 md:mb-14">
                <span className="font-display text-[11px] tracking-[0.22em] uppercase text-ink-400 font-medium">
                  Étape {s.n}
                </span>
                <span className="w-10 h-10 rounded-full border border-ink-100 flex items-center justify-center group-hover:border-ember/40 group-hover:bg-ember/5 transition-all duration-500">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M1 6H11M11 6L6.5 1.5M11 6L6.5 10.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      className="text-ink-400 group-hover:text-ember transition-colors"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-ink-900 mb-5 tracking-tight">
                {s.title}
              </h3>
              <p className="text-ink-500 text-[15px] md:text-base leading-relaxed max-w-md">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
