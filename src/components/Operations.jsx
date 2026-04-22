import { IcoBoite, IcoImportation, IcoEntrepot, IcoLivraison } from './Pictograms';
import useCountUp from '../hooks/useCountUp';

const tiles = [
  {
    tag: 'Sourcing',
    title: 'Manufacturiers qualifiés',
    Icon: IcoBoite,
    href: '#modele',
  },
  {
    tag: 'Importation',
    title: 'Consolidation directe',
    Icon: IcoImportation,
    href: '#modele',
  },
  {
    tag: 'Entreposage',
    title: 'Tampon stratégique',
    Icon: IcoEntrepot,
    href: '#capacites',
  },
  {
    tag: 'Distribution',
    title: 'Livraisons planifiées',
    Icon: IcoLivraison,
    href: '#capacites',
  },
];

export default function Operations() {
  return (
    <section id="operations" className="relative bg-white py-28 md:py-40 overflow-hidden">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16 md:mb-24">
          <div className="max-w-3xl">
            <div className="section-label mb-8 reveal">
              <span>Opérations</span>
            </div>
            <h2 className="reveal font-display font-semibold text-display-lg text-ink-900 tracking-ultra-tight">
              De la ligne de production
              <br />
              <span className="text-ink-400">jusqu'à votre quai de réception.</span>
            </h2>
          </div>
          <p
            className="reveal text-ink-500 text-base md:text-lg max-w-sm leading-relaxed"
            style={{ transitionDelay: '120ms' }}
          >
            Une chaîne visible, documentée et maîtrisée — de la fabrication à la
            livraison, sans zone grise.
          </p>
        </div>
      </div>

      <div className="container-page">
        <div className="reveal relative aspect-[16/9] md:aspect-[21/9] bg-ink-900 rounded-[4px] overflow-hidden group">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-warehouse-operator-moving-boxes-on-a-cart-4837-large.mp4"
              type="video/mp4"
            />
          </video>
          <div
            className="absolute inset-0 bg-ink-900"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              zIndex: -1,
            }}
            aria-hidden
          />

          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/60 via-transparent to-transparent" />

          <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-white/90 text-[11px] uppercase tracking-[0.22em] font-medium">
              <span className="relative flex items-center justify-center w-2.5 h-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-ember/50 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ember" />
              </span>
              Opérations en direct
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl md:text-4xl font-semibold text-white tracking-tight max-w-xl">
                  Logistique adaptée au rythme de vos opérations.
                </h3>
                <p className="mt-4 text-white/70 text-sm md:text-base max-w-lg">
                  Planification récurrente, consolidation des volumes, et distribution
                  calibrée selon vos fréquences.
                </p>
              </div>
              <div className="flex items-center gap-6 md:gap-10 text-white">
                <Stat value={7} label="Familles produits" />
                <Stat value={3} label="Secteurs servis" />
                <Stat value="∞" label="Formats sur mesure" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {tiles.map((tile, i) => {
            const Icon = tile.Icon;
            return (
              <a
                key={tile.tag}
                href={tile.href}
                className="reveal group relative aspect-[4/5] bg-ink-900 rounded-[4px] overflow-hidden block transition-all duration-500 hover:bg-ink-800"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                  aria-hidden
                />
                <div
                  className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(closest-side, rgba(232, 93, 31, 0.35), transparent 70%)',
                  }}
                  aria-hidden
                />

                <div className="relative h-full p-6 md:p-8 flex flex-col justify-between text-white">
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-ember font-medium">
                      {tile.tag}
                    </span>
                    <span className="font-display text-[10px] tracking-[0.22em] text-white/40">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="flex justify-center my-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-105">
                      <Icon className="w-full h-full" variant="light" />
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-2">
                    <span className="font-display text-base md:text-lg font-medium tracking-tight leading-tight">
                      {tile.title}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:border-ember group-hover:bg-ember/10 transition-all duration-500">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M1 6H11M11 6L6.5 1.5M11 6L6.5 10.5"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          className="text-white/60 group-hover:text-ember transition-colors"
                        />
                      </svg>
                    </span>
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

function Stat({ value, label }) {
  const numericTarget = typeof value === 'number' ? value : null;
  const [count, ref] = useCountUp(numericTarget ?? 0, { enabled: numericTarget !== null });
  const display = numericTarget !== null ? count : value;
  return (
    <div className="flex flex-col" ref={ref}>
      <span className="font-display text-3xl md:text-5xl font-semibold tracking-ultra-tight leading-none">
        {display}
      </span>
      <span className="mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-white/60 font-medium">
        {label}
      </span>
    </div>
  );
}
