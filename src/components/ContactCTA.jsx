import { Link } from 'react-router-dom';

export default function ContactCTA({ title, sub }) {
  return (
    <section className="relative bg-bone py-24 md:py-32 overflow-hidden border-t border-ink-100">
      <div className="container-page">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="font-display font-semibold text-display-md text-ink-900 tracking-ultra-tight">
              {title || (
                <>
                  Analysons votre flux
                  <br />
                  <span className="text-ink-400">d'approvisionnement.</span>
                </>
              )}
            </h2>
            {sub && (
              <p className="mt-6 text-ink-500 text-base md:text-lg leading-relaxed max-w-xl">
                {sub}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/#contact"
              className="group inline-flex items-center gap-3 bg-ink-900 text-white text-sm font-medium px-6 py-3.5 rounded-full hover:bg-ember transition-all duration-300"
            >
              Recevoir mon analyse
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
            <a
              href="mailto:approvisionnement@packeo.ca"
              className="inline-flex items-center gap-3 text-sm font-medium text-ink-900 px-6 py-3.5 rounded-full border border-ink-200 hover:border-ink-900 transition-colors duration-300"
            >
              approvisionnement@packeo.ca
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
