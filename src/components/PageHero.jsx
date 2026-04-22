export default function PageHero({ eyebrow, title, accent, sub, children }) {
  return (
    <section className="relative bg-ink-900 text-white pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden
      />
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-50 pointer-events-none"
        style={{
          background:
            'radial-gradient(closest-side, rgba(232, 93, 31, 0.3), transparent 70%)',
        }}
        aria-hidden
      />

      <div className="container-page relative">
        {eyebrow && (
          <div className="section-label text-ink-300 mb-8">
            <span className="text-ink-300">{eyebrow}</span>
          </div>
        )}
        <h1 className="font-display font-semibold text-display-lg md:text-display-xl text-white tracking-ultra-tight max-w-[20ch]">
          {title}
          {accent && (
            <>
              {' '}
              <span className="text-ember">{accent}</span>
            </>
          )}
        </h1>
        {sub && (
          <p className="mt-8 md:mt-10 max-w-2xl text-lg md:text-xl text-ink-200 leading-relaxed">
            {sub}
          </p>
        )}
        {children && <div className="mt-10 md:mt-14">{children}</div>}
      </div>
    </section>
  );
}
