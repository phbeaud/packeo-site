import { IcoRestaurant, IcoTransformation, IcoIndustriel } from './Pictograms';

const segments = [
  {
    tag: '01',
    title: 'Restaurants et foodservice',
    body:
      "Contenants chauds et froids, emballage à emporter, produits de service. Approvisionnement récurrent aligné sur le rythme des opérations.",
    bullets: [
      'Chaînes multi-sites',
      'Restaurants indépendants',
      'Traiteurs et services alimentaires',
    ],
    Icon: IcoRestaurant,
  },
  {
    tag: '02',
    title: 'Transformation alimentaire',
    body:
      "Sous vide, sacs, pots, pellicules, contenants certifiés. Emballages techniques pour productions en usine et spécifications précises.",
    bullets: [
      'Transformateurs de viandes',
      'Boulangerie, pâtisserie',
      'Produits fins et spécialités',
    ],
    Icon: IcoTransformation,
  },
  {
    tag: '03',
    title: 'Industriel et manufacturier',
    body:
      "Protection, calage, pellicules étirables, cerclage. Emballages techniques pour entreposage, expédition et logistique.",
    bullets: [
      'Manufacturiers multi-produits',
      'Centres de distribution',
      'Exportateurs et e-commerce',
    ],
    Icon: IcoIndustriel,
  },
];

export default function Clienteles() {
  return (
    <section id="clienteles" className="relative bg-bone py-28 md:py-40">
      <div className="container-page">
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="section-label mb-8 reveal">
            <span>Clientèles</span>
          </div>
          <h2 className="reveal font-display font-semibold text-display-lg text-ink-900 tracking-ultra-tight">
            Trois secteurs.
            <br />
            Une même exigence opérationnelle.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {segments.map((s, i) => {
            const Icon = s.Icon;
            return (
              <a
                key={s.tag}
                href="#contact"
                className="reveal group relative bg-ink-900 rounded-[4px] overflow-hidden min-h-[520px] md:min-h-[580px] flex flex-col"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="absolute inset-0 opacity-[0.05] pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                  }}
                  aria-hidden
                />
                <div
                  className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(closest-side, rgba(232, 93, 31, 0.3), transparent 70%)',
                  }}
                  aria-hidden
                />

                <div className="relative flex-1 flex flex-col p-8 md:p-10 lg:p-12 text-white">
                  <div className="flex items-center justify-between mb-10">
                    <span className="font-display text-[11px] tracking-[0.22em] uppercase text-white/60 font-medium">
                      Segment {s.tag}
                    </span>
                    <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-ember group-hover:bg-ember/10 transition-all duration-500">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M1 6H11M11 6L6.5 1.5M11 6L6.5 10.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="w-16 h-16 md:w-20 md:h-20 mb-10 transition-transform duration-700 group-hover:-translate-y-1">
                    <Icon className="w-full h-full" variant="light" />
                  </div>

                  <h3 className="font-display text-2xl md:text-[28px] font-medium mb-6 tracking-tight leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-white/70 text-[15px] leading-relaxed mb-8 max-w-sm">
                    {s.body}
                  </p>

                  <div className="mt-auto pt-8 border-t border-white/15">
                    <ul className="space-y-2.5">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="text-[13px] text-white/90 flex items-center gap-3"
                        >
                          <span className="w-3 h-px bg-ember" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
