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
  { label: 'Boîtes et cartons', Icon: IcoBoite },
  { label: 'Contenants alimentaires', Icon: IcoContenant },
  { label: 'Sacs et pellicules', Icon: IcoSac },
  { label: 'Sous vide', Icon: IcoSousVide },
  { label: 'Pots, verres et couvercles', Icon: IcoPot },
  { label: 'Protection industrielle', Icon: IcoProtection },
  { label: 'Sur mesure', Icon: IcoSurMesure },
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className="relative bg-ink-900 text-white py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden
      />

      <div className="container-page mb-12 md:mb-16 relative">
        <div className="flex items-center justify-between">
          <div className="section-label text-ink-300 reveal">
            <span className="text-ink-300">En circulation</span>
          </div>
          <span className="hidden md:inline text-[11px] uppercase tracking-[0.22em] text-ink-400 font-medium">
            Sourcing continu — 52 semaines / année
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-ink-900 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-ink-900 to-transparent" />

        <div className="flex w-max marquee-track gap-12 md:gap-20 items-center">
          {doubled.map((item, i) => {
            const Icon = item.Icon;
            return (
              <div
                key={i}
                className="flex items-center gap-6 md:gap-10 flex-shrink-0"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0">
                  <Icon className="w-full h-full" variant="light" />
                </div>
                <span className="font-display text-2xl md:text-4xl lg:text-5xl font-semibold tracking-ultra-tight whitespace-nowrap">
                  {item.label}
                </span>
                <span className="w-2 h-2 rounded-full bg-ember flex-shrink-0" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
