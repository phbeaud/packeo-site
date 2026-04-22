import {
  IcoImportation,
  IcoEntrepot,
  IcoLivraison,
  IcoSurMesure,
  IcoContrat,
  IcoBoite,
} from './Pictograms';

const capacites = [
  {
    tag: 'Sourcing',
    title: 'Réseau manufacturier qualifié',
    body:
      "Relations directes avec fabricants domestiques et internationaux, sélectionnés pour leur fiabilité et leur capacité de production.",
    Icon: IcoBoite,
  },
  {
    tag: 'Logistique',
    title: 'Importation et consolidation',
    body:
      "Gestion complète de l'import — conteneurs dédiés, partagés, LCL — avec consolidation optimisée selon les volumes.",
    Icon: IcoImportation,
  },
  {
    tag: 'Entreposage',
    title: 'Tampon stratégique',
    body:
      "Capacité d'entreposage pour lisser les productions, sécuriser des stocks critiques, ou absorber la saisonnalité.",
    Icon: IcoEntrepot,
  },
  {
    tag: 'Distribution',
    title: 'Livraison structurée',
    body:
      "Planification récurrente, fréquences ajustées, points de livraison multiples. La logistique s'aligne sur vos opérations.",
    Icon: IcoLivraison,
  },
  {
    tag: 'Ingénierie',
    title: 'Sur mesure et prototypage',
    body:
      "Développement d'emballages dédiés — spécifications techniques, validation, mise en production.",
    Icon: IcoSurMesure,
  },
  {
    tag: 'Gouvernance',
    title: 'Contrats-cadres',
    body:
      "Ententes d'approvisionnement annuelles, prévisibilité des prix, engagements volumétriques documentés.",
    Icon: IcoContrat,
  },
];

export default function Capacites() {
  return (
    <section id="capacites" className="relative bg-white py-28 md:py-40">
      <div className="container-page">
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="section-label mb-8 reveal">
            <span>Capacités</span>
          </div>
          <h2 className="reveal font-display font-semibold text-display-lg text-ink-900 tracking-ultra-tight">
            Les fonctions d'une grande structure.
            <br />
            <span className="text-ink-400">L'agilité d'un partenaire dédié.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-10 md:gap-x-16">
          {capacites.map((c, i) => {
            const Icon = c.Icon;
            return (
              <div
                key={c.title}
                className="reveal group"
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 mb-8 transition-transform duration-500 group-hover:-translate-y-0.5">
                  <Icon className="w-full h-full" />
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-ember" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-500 font-medium">
                    {c.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-[28px] font-medium text-ink-900 mb-5 tracking-tight leading-tight">
                  {c.title}
                </h3>
                <p className="text-ink-500 text-[15px] md:text-base leading-relaxed max-w-sm">
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-24 md:mt-32 hairline pt-12 md:pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { big: 'Direct', small: 'Lien manufacturier' },
              { big: 'Flexible', small: 'Formats et volumes' },
              { big: 'Continu', small: 'Approvisionnement planifié' },
              { big: 'Structuré', small: 'Contractuel et documenté' },
            ].map((s, i) => (
              <div
                key={s.big}
                className="reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="font-display text-3xl md:text-4xl font-semibold text-ink-900 tracking-ultra-tight mb-2">
                  {s.big}
                </div>
                <div className="text-[13px] text-ink-500">{s.small}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
