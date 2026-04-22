import { useState } from 'react';
import {
  IcoBoite,
  IcoContenant,
  IcoSac,
  IcoSousVide,
  IcoPot,
  IcoProtection,
  IcoSurMesure,
} from './Pictograms';

const BASE = import.meta.env.BASE_URL;

const produits = [
  {
    title: 'Boîtes et cartons',
    items: ['Ondulé simple et double', 'RSC, die-cut, mailer', 'Formats personnalisés'],
    Icon: IcoBoite,
    image: null,
  },
  {
    title: 'Contenants alimentaires',
    items: ['Carton, pulpe, PP, PET', 'Chaud, froid, congélation', 'Certifications contact alimentaire'],
    Icon: IcoContenant,
    image: `${BASE}images/produits/contenants.jpg`,
  },
  {
    title: 'Sacs et pellicules',
    items: ['LDPE, HDPE, compostables', 'Rouleaux, sachets, gousset', 'Impression personnalisée'],
    Icon: IcoSac,
    image: `${BASE}images/produits/sacs.jpg`,
  },
  {
    title: 'Sous vide',
    items: ['Sacs lisses et gaufrés', 'Rouleaux industriels', 'Machines et consommables'],
    Icon: IcoSousVide,
    image: `${BASE}images/produits/sous-vide.jpg`,
  },
  {
    title: 'Pots, verres et couvercles',
    items: ['Verre, PET, PP', 'Capsules et bouchons', 'Étiquetage disponible'],
    Icon: IcoPot,
    image: `${BASE}images/produits/pots.jpg`,
  },
  {
    title: 'Protection industrielle',
    items: ['Pellicules étirables', 'Cerclage et sangles', 'Coussins et calage'],
    Icon: IcoProtection,
    image: null,
  },
  {
    title: 'Sur mesure',
    items: ['Développement manufacturier', 'Prototypage et validation', 'Production dédiée'],
    Icon: IcoSurMesure,
    image: null,
  },
];

function Visual({ image, Icon }) {
  const [failed, setFailed] = useState(!image);
  if (!image || failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-bone">
        <div className="w-20 h-20 md:w-24 md:h-24">
          <Icon className="w-full h-full" />
        </div>
      </div>
    );
  }
  return (
    <img
      src={image}
      alt=""
      onError={() => setFailed(true)}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
    />
  );
}

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
          {produits.map((p, i) => (
            <a
              key={p.title}
              href="#contact"
              className="reveal group relative bg-white flex flex-col transition-colors duration-500 hover:bg-bone overflow-hidden"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Visual image={p.image} Icon={p.Icon} />
                <span className="absolute top-5 right-5 text-[10px] uppercase tracking-[0.22em] text-white font-medium px-2.5 py-1 rounded-full bg-ink-900/60 backdrop-blur-sm">
                  0{i + 1}
                </span>
              </div>

              <div className="p-8 md:p-10 flex flex-col flex-1">
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
