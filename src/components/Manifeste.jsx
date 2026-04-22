export default function Manifeste() {
  const chain = [
    'Exportateur',
    'Importateur',
    'Grossiste',
    'Distributeur',
    'Représentant',
  ];

  return (
    <section className="relative bg-ink-900 text-white py-28 md:py-40 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(232, 93, 31, 0.5), transparent)',
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden
      />

      <div className="container-page relative">
        <div className="grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 md:col-span-5 reveal">
            <div className="section-label text-ink-300 mb-8">
              <span className="text-ink-300">Le constat</span>
            </div>
            <p className="text-ink-400 text-sm md:text-base max-w-sm leading-relaxed">
              Avant de parler d'emballage, il faut parler de ce qu'il y a entre le
              manufacturier et vous.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7">
            <h2 className="reveal font-display font-semibold text-display-xl tracking-tightest leading-[0.95]">
              Chaque intermédiaire
              <br />
              vous{' '}
              <span className="relative inline-block">
                coûte
                <span
                  className="absolute left-0 right-0 top-1/2 h-[0.12em] bg-ember"
                  style={{ transform: 'translateY(-50%)' }}
                  aria-hidden
                />
              </span>
              .
            </h2>

            <p
              className="reveal mt-12 md:mt-16 text-lg md:text-xl text-ink-200 leading-relaxed max-w-2xl"
              style={{ transitionDelay: '160ms' }}
            >
              Chaque maillon ajoute une marge.
              <br className="hidden md:inline" />
              <span className="text-ink-400"> Aucun n'ajoute de valeur.</span>
            </p>

            <div
              className="reveal mt-14 md:mt-20 flex flex-wrap items-center gap-x-2 gap-y-3"
              style={{ transitionDelay: '280ms' }}
            >
              {chain.map((step, i) => (
                <span
                  key={step}
                  className="inline-flex items-center gap-3 text-sm md:text-base"
                >
                  <span className="text-ink-400 line-through decoration-ink-600 decoration-2">
                    {step}
                  </span>
                  {i < chain.length - 1 && (
                    <span className="text-ink-700">/</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
