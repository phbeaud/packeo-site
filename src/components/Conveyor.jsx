import {
  IcoBoite,
  IcoContenant,
  IcoSac,
  IcoSousVide,
  IcoPot,
  IcoProtection,
  IcoSurMesure,
} from './Pictograms';

const families = [
  IcoBoite,
  IcoContenant,
  IcoSac,
  IcoSousVide,
  IcoPot,
  IcoProtection,
  IcoSurMesure,
];

function makeLane(count = 12, offset = 0, scale = 1) {
  return Array.from({ length: count }, (_, i) => ({
    Icon: families[(i + offset) % families.length],
    scale,
    key: `${offset}-${i}`,
  }));
}

const laneA = [...makeLane(14, 0, 1), ...makeLane(14, 0, 1)];
const laneB = [...makeLane(12, 3, 0.85), ...makeLane(12, 3, 0.85)];
const laneC = [...makeLane(16, 5, 0.7), ...makeLane(16, 5, 0.7)];

export default function Conveyor() {
  return (
    <section className="relative bg-bone py-24 md:py-32 overflow-hidden border-y border-ink-100">
      <div className="container-page mb-12 md:mb-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="section-label mb-6 reveal">
              <span>Flux</span>
            </div>
            <h2 className="reveal font-display font-semibold text-2xl md:text-4xl text-ink-900 tracking-ultra-tight max-w-xl">
              Une chaîne qui ne s'arrête pas.
            </h2>
          </div>
          <span className="hidden md:inline text-[11px] uppercase tracking-[0.22em] text-ink-400 font-medium">
            Production · Importation · Distribution
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-bone to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-bone to-transparent" />

        <Lane items={laneA} duration={32} reverse={false} large />
        <Belt offset="35%" />

        <Lane items={laneB} duration={48} reverse className="mt-6" />
        <Belt offset="55%" />

        <Lane items={laneC} duration={64} reverse={false} className="mt-6 opacity-60" />
        <Belt offset="75%" />
      </div>

      <div className="container-page mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {[
          { kpi: 'Direct', sub: 'Du manufacturier au client' },
          { kpi: 'Continu', sub: 'Approvisionnement planifié' },
          { kpi: 'Tracé', sub: 'Documenté à chaque étape' },
          { kpi: 'Calibré', sub: 'Selon vos cadences' },
        ].map((s, i) => (
          <div
            key={s.kpi}
            className="reveal"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="font-display text-2xl md:text-3xl font-semibold text-ink-900 tracking-ultra-tight mb-1.5">
              {s.kpi}
            </div>
            <div className="text-[12px] md:text-[13px] text-ink-500">
              {s.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Lane({ items, duration = 40, reverse = false, large = false, className = '' }) {
  const size = large ? 'w-14 h-14 md:w-20 md:h-20' : 'w-10 h-10 md:w-14 md:h-14';
  const gap = large ? 'gap-16 md:gap-24' : 'gap-12 md:gap-20';
  const animation = reverse ? 'flowReverse' : 'flow';
  return (
    <div className={`relative h-20 md:h-24 ${className}`}>
      <div
        className={`flex w-max ${gap} items-center absolute top-1/2 -translate-y-1/2`}
        style={{ animation: `${animation} ${duration}s linear infinite` }}
      >
        {items.map((item) => {
          const Icon = item.Icon;
          return (
            <div
              key={item.key}
              className={`${size} flex-shrink-0`}
              style={{ transform: `scale(${item.scale})` }}
            >
              <Icon className="w-full h-full" variant="dark" />
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes flow {
          from { transform: translate(0, -50%); }
          to { transform: translate(-50%, -50%); }
        }
        @keyframes flowReverse {
          from { transform: translate(-50%, -50%); }
          to { transform: translate(0, -50%); }
        }
      `}</style>
    </div>
  );
}

function Belt({ offset = '50%' }) {
  return (
    <div
      className="absolute left-0 right-0 h-px bg-ink-200 pointer-events-none"
      style={{ top: offset }}
      aria-hidden
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          backgroundImage:
            'linear-gradient(to right, transparent, rgba(232, 93, 31, 0.6), transparent)',
          animation: 'beltGlow 4s ease-in-out infinite',
        }}
      />
      <style>{`
        @keyframes beltGlow {
          0%, 100% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
