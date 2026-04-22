import {
  IcoBoite,
  IcoContenant,
  IcoSac,
  IcoSousVide,
  IcoPot,
  IcoProtection,
  IcoSurMesure,
} from './Pictograms';

const produits = [
  {
    title: 'Boîtes et cartons',
    items: ['Ondulé simple et double', 'RSC, die-cut, mailer', 'Formats personnalisés'],
    Icon: IcoBoite,
  },
  {
    title: 'Contenants alimentaires',
    items: ['Carton, pulpe, PP, PET', 'Chaud, froid, congélation', 'Certifications contact alimentaire'],
    Icon: IcoContenant,
  },
  {
    title: 'Sacs et pellicules',
    items: ['LDPE, HDPE, compostables', 'Rouleaux, sachets, gousset', 'Impression personnalisée'],
    Icon: IcoSac,
  },
  {
    title: 'Sous vide',
    items: ['Sacs lisses et gaufrés', 'Rouleaux industriels', 'Machines et consommables'],
    Icon: IcoSousVide,
  },
  {
    title: 'Pots, verres et couvercles',
    items: ['Verre, PET, PP', 'Capsules et bouchons', 'Étiquetage disponible'],
    Icon: IcoPot,
  },
  {
    title: 'Protection industrielle',
    items: ['Pellicules étirables', 'Cerclage et sangles', 'Coussins et calage'],
    Icon: IcoProtection,
  },
  {
    title: 'Sur mesure',
    items: ['Développement manufacturier', 'Prototypage et validation', 'Production dédiée'],
    Icon: IcoSurMesure,
  },
];

export default function Produits() {
  return (
    <section id="produits" className="relative bg-white py-28 md:py-40">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16 md:mb-24">
          <div className="max-w-3xl">
            <div className="section-label mb-8 reveal">
              <span>Univers produits</span>
            </div>
            <h2 className="reveal font-display font-semibold text-display-lg text-ink-900 tracking-ultra-tight">
              Une couverture étendue,
              <br />
              <span className="text-ink-400">sans compromis sur la précision.</span>
            </h2>
          </div>
          <p
            className="reveal text-ink-500 text-base md:text-lg max-w-sm leading-relaxed"
            style={{ transitionDelay: '120ms' }}
          >
            Sept familles de produits, sélectionnées et qualifiées pour répondre à la
            majorité des besoins d'emballage industriel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100 border border-ink-100">
          {produits.map((p, i) => {
            const Icon = p.Icon;
            return (
              <a
                key={p.title}
                href="#contact"
                className="reveal group relative bg-white p-8 md:p-10 transition-colors duration-500 hover:bg-bone flex flex-col min-h-[320px]"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <span className="absolute top-8 right-8 md:top-10 md:right-10 text-[11px] uppercase tracking-[0.22em] text-ink-300 font-medium">
                  0{i + 1}
                </span>

                <div className="w-14 h-14 md:w-16 md:h-16 mb-10 md:mb-12 transition-transform duration-500 group-hover:-translate-y-0.5">
                  <Icon className="w-full h-full" />
                </div>

                <h3 className="font-display text-xl md:text-2xl font-medium text-ink-900 mb-5 tracking-tight">
                  {p.title}
                </h3>
                <ul className="space-y-2 mb-8">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="text-[13px] md:text-sm text-ink-500 flex items-center gap-2.5"
                    >
                      <span className="w-3 h-px bg-ember" />
                      {item}
                    </li>
                  ))}
                </ul>

                <span className="mt-auto inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ember font-medium transition-all duration-300 group-hover:gap-3">
                  Demander les formats
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path
                      d="M1 5H11M11 5L6.5 1M11 5L6.5 9"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
