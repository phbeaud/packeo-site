export default function Modele() {
  return (
    <section
      id="modele"
      className="relative bg-ink-900 text-white py-28 md:py-40 overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(232, 93, 31, 0.4), transparent)',
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
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <div className="section-label mb-8 reveal text-ink-300">
              <span className="text-ink-300">04 — Modèle d'affaires</span>
            </div>
            <h2 className="reveal font-display font-semibold text-display-lg tracking-ultra-tight">
              Un modèle
              <br />
              sans intermédiaires.
            </h2>
            <p
              className="reveal mt-10 text-lg text-ink-300 leading-relaxed max-w-md"
              style={{ transitionDelay: '120ms' }}
            >
              Nous opérons comme le prolongement du manufacturier — pas comme un
              distributeur additionnel. Chaque étape intermédiaire retirée se
              retrouve directement dans votre prix et votre délai.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div className="reveal" style={{ transitionDelay: '180ms' }}>
              <div className="space-y-px">
                <FlowRow
                  left="Manufacturier"
                  right="Manufacturier"
                  kept
                />
                <FlowRow
                  left="Exportateur"
                  removed
                  arrow
                />
                <FlowRow
                  left="Importateur"
                  removed
                />
                <FlowRow
                  left="Grossiste"
                  removed
                />
                <FlowRow
                  left="Distributeur régional"
                  removed
                />
                <FlowRow
                  left="Représentant"
                  removed
                />
                <FlowRow
                  left="Votre entreprise"
                  right="Votre entreprise"
                  kept
                  last
                />
              </div>
              <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-ink-400 font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-ember" />
                  Packeo
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-ink-600" />
                  Chaîne conventionnelle
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-700 border border-ink-700">
          {[
            { h: 'Prix direct', p: 'Aligné sur le coût manufacturier, pas sur une grille de distribution.' },
            { h: 'Délais compressés', p: 'Moins de mains, moins de stocks intermédiaires, moins d\'attente.' },
            { h: 'Imputabilité claire', p: 'Un seul interlocuteur responsable de la chaîne complète.' },
          ].map((b) => (
            <div key={b.h} className="bg-ink-900 p-8 md:p-10">
              <h3 className="font-display text-xl font-medium text-white mb-4">
                {b.h}
              </h3>
              <p className="text-ink-300 text-[15px] leading-relaxed">{b.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowRow({ left, right, kept, removed, last }) {
  return (
    <div
      className={`flex items-center justify-between py-4 md:py-5 ${
        last ? '' : 'border-b border-ink-700/60'
      }`}
    >
      <div className="flex items-center gap-4">
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            kept ? 'bg-ember' : 'bg-ink-600'
          }`}
        />
        <span
          className={`font-display text-lg md:text-xl tracking-tight ${
            kept ? 'text-white' : 'text-ink-500 line-through decoration-ink-600'
          }`}
        >
          {left}
        </span>
      </div>
      <div>
        {kept ? (
          <span className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium">
            Conservé
          </span>
        ) : (
          <span className="text-[11px] uppercase tracking-[0.22em] text-ink-500 font-medium">
            Retiré
          </span>
        )}
      </div>
    </div>
  );
}
