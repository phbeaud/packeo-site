import { Link } from 'react-router-dom';
import {
  IcoBoite,
  IcoContenant,
  IcoSac,
  IcoSousVide,
  IcoPot,
  IcoProtection,
  IcoSurMesure,
} from './Pictograms';

const items = [
  { title: 'Boîtes et cartons', Icon: IcoBoite },
  { title: 'Contenants alimentaires', Icon: IcoContenant },
  { title: 'Sacs et pellicules', Icon: IcoSac },
  { title: 'Sous vide', Icon: IcoSousVide },
  { title: 'Pots, verres et couvercles', Icon: IcoPot },
  { title: 'Protection industrielle', Icon: IcoProtection },
  { title: 'Sur mesure', Icon: IcoSurMesure },
];

export default function ApercuProduits() {
  return (
    <section className="relative bg-white py-28 md:py-40">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16 md:mb-20">
          <div className="max-w-3xl">
            <div className="section-label mb-8 reveal">
              <span>Univers produits</span>
            </div>
            <h2 className="reveal font-display font-semibold text-display-lg text-ink-900 tracking-ultra-tight">
              Sept familles.
              <br />
              <span className="text-ink-400">Une couverture étendue.</span>
            </h2>
          </div>
          <Link
            to="/produits"
            className="reveal group inline-flex items-center gap-3 self-start md:self-end text-sm font-medium text-ink-900 px-6 py-3.5 rounded-full border border-ink-200 hover:border-ink-900 transition-colors duration-300"
            style={{ transitionDelay: '120ms' }}
          >
            Voir tous les produits
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-px bg-ink-100 border border-ink-100">
          {items.map((it, i) => {
            const Icon = it.Icon;
            return (
              <Link
                key={it.title}
                to="/produits"
                className="reveal group bg-white p-6 md:p-8 flex flex-col items-center text-center transition-colors duration-500 hover:bg-bone"
                style={{ transitionDelay: `${(i % 7) * 60}ms` }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 mb-5 transition-transform duration-500 group-hover:-translate-y-0.5">
                  <Icon className="w-full h-full" />
                </div>
                <span className="font-display text-[13px] md:text-sm font-medium text-ink-900 tracking-tight leading-snug">
                  {it.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
