import { useT } from '../i18n/I18nContext';

export default function Showcase() {
  const { t } = useT();
  return (
    <section className="relative bg-ink-900 text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
        <div className="lg:col-span-5 relative flex flex-col justify-between p-8 md:p-14 lg:p-20 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
            aria-hidden
          />
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-50 pointer-events-none"
            style={{
              background: 'radial-gradient(closest-side, rgba(232, 93, 31, 0.4), transparent 70%)',
            }}
            aria-hidden
          />

          <div className="relative">
            <div className="section-label text-ink-300 mb-8 reveal">
              <span className="text-ink-300">{t.showcase.eyebrow}</span>
            </div>
            <h2 className="reveal font-display font-semibold text-display-lg tracking-ultra-tight">
              {t.showcase.titleA}
              <br />
              <span className="text-ember">{t.showcase.titleAccent}</span>
            </h2>
          </div>

          <div className="relative mt-12 lg:mt-0 max-w-md">
            <p className="reveal text-lg text-white/80 leading-relaxed" style={{ transitionDelay: '120ms' }}>
              {t.showcase.sub}
            </p>
            <div className="reveal mt-10 flex items-center gap-6 text-white/60 text-[11px] uppercase tracking-[0.22em] font-medium" style={{ transitionDelay: '220ms' }}>
              <span className="flex items-center gap-2">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-ember/50 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-ember" />
                </span>
                {t.showcase.flux}
              </span>
              <span>{t.showcase.year}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 relative min-h-[60vh] lg:min-h-0 overflow-hidden bg-ink-800">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ animation: 'kenBurns 22s ease-in-out infinite alternate' }}
          />
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-warehouse-operator-moving-boxes-on-a-cart-4837-large.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-ink-900/40" />

          <div className="absolute bottom-8 right-8 md:bottom-10 md:right-10 flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-white font-medium">
              {t.showcase.live}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
