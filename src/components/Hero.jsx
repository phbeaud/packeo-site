export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-ink-900 text-white pt-24 md:pt-32"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="w-full h-full object-cover"
          style={{ animation: 'kenBurns 22s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/70 to-ink-900/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/70 via-transparent to-ink-900/40" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div
          className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{
            background:
              'radial-gradient(closest-side, rgba(232, 93, 31, 0.35), transparent 70%)',
          }}
        />

        <FloatingParticles />
        <FlowLines />
      </div>

      <div className="container-page relative flex-1 flex flex-col justify-center pb-16">
        <div className="animate-fade-in">
          <div className="section-label mb-8 md:mb-12 text-ink-300">
            <span className="text-ink-300">Approvisionnement structuré — B2B</span>
          </div>
        </div>

        <h1
          className="font-display font-semibold text-display-xl text-white max-w-[18ch] animate-fade-up"
          style={{ animationDelay: '120ms', opacity: 0 }}
        >
          Emballage au prix manufacturier.
          <br />
          <span className="text-ember">Sans intermédiaires.</span>
        </h1>

        <p
          className="mt-10 md:mt-12 max-w-xl text-lg md:text-xl text-ink-200 leading-relaxed animate-fade-up"
          style={{ animationDelay: '320ms', opacity: 0 }}
        >
          Une chaîne d'approvisionnement repensée pour éliminer les surcoûts et
          structurer vos opérations.
        </p>

        <div
          className="mt-12 md:mt-14 flex flex-wrap items-center gap-4 animate-fade-up"
          style={{ animationDelay: '520ms', opacity: 0 }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-white text-ink-900 text-sm font-medium px-6 py-3.5 rounded-full hover:bg-ember hover:text-white transition-all duration-300"
          >
            Analyser mon approvisionnement
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
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm font-medium text-white px-6 py-3.5 rounded-full border border-white/30 hover:border-white hover:bg-white/5 transition-colors duration-300"
          >
            Comparer mes prix actuels
          </a>
        </div>
      </div>

      <div className="container-page relative pb-10 md:pb-14">
        <div className="pt-6 md:pt-8 border-t border-white/15 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex items-center gap-3 text-ink-300 text-xs tracking-[0.18em] uppercase font-medium">
            <span className="w-6 h-px bg-ember" />
            Signature
          </div>
          <p className="text-white/90 text-sm md:text-[15px] max-w-md md:text-right">
            Nous structurons l'approvisionnement en emballage pour éliminer les
            intermédiaires et reprendre le contrôle sur vos coûts.
          </p>
        </div>

        <div className="mt-10 md:mt-12 flex items-center justify-between text-ink-300 text-[11px] tracking-[0.3em] uppercase font-medium">
          <span>Scroll</span>
          <span className="flex items-center gap-2">
            <span className="block w-px h-8 bg-white/30 relative overflow-hidden">
              <span
                className="absolute top-0 left-0 right-0 h-3 bg-white"
                style={{ animation: 'scrollIndicator 2.2s ease-in-out infinite' }}
              />
            </span>
          </span>
        </div>
      </div>

      <style>{`
        @keyframes scrollIndicator {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(10px, -20px); opacity: 0.6; }
        }
        @keyframes traceLine {
          0% { stroke-dashoffset: 1200; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes pulseDot {
          0%, 100% { r: 2; opacity: 0.6; }
          50% { r: 4; opacity: 1; }
        }
      `}</style>
    </section>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 18 });
  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((_, i) => {
        const size = 2 + (i % 3);
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const delay = (i * 0.4) % 6;
        const duration = 6 + (i % 5) * 2;
        const isOrange = i % 5 === 0;
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              backgroundColor: isOrange ? '#E85D1F' : '#FFFFFF',
              opacity: 0.3,
              animation: `float ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
              filter: isOrange ? 'blur(0.5px)' : 'none',
            }}
          />
        );
      })}
    </div>
  );
}

function FlowLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
      viewBox="0 0 1200 800"
      fill="none"
      aria-hidden
    >
      <path
        d="M0 600 Q300 580 600 600 T1200 600"
        stroke="#E85D1F"
        strokeWidth="1"
        strokeOpacity="0.35"
        strokeDasharray="1200"
        style={{ animation: 'traceLine 6s ease-in-out infinite alternate' }}
      />
      <path
        d="M0 660 Q400 640 800 660 T1200 660"
        stroke="#FFFFFF"
        strokeWidth="1"
        strokeOpacity="0.12"
        strokeDasharray="1200"
        style={{
          animation: 'traceLine 9s ease-in-out infinite alternate',
          animationDelay: '1.5s',
        }}
      />
      <circle cx="180" cy="200" r="2" fill="#E85D1F" opacity="0.7">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="950" cy="280" r="2" fill="#E85D1F" opacity="0.7">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" begin="1s" />
      </circle>
      <circle cx="600" cy="150" r="1.5" fill="#FFFFFF" opacity="0.6">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="5s" repeatCount="indefinite" begin="2s" />
      </circle>
    </svg>
  );
}
