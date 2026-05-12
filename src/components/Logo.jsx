export function LogoMark({ className = 'w-10 h-10', variant = 'dark' }) {
  const isLight = variant === 'light';
  const boxMain = isLight ? '#F7F7F8' : '#14161A';
  const boxTop = isLight ? '#FFFFFF' : '#2A3548';
  const boxRight = isLight ? '#C9CDD3' : '#0A0F1A';

  return (
    <svg
      viewBox="0 0 120 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0 40 L16 40"
        stroke="#E85D1F"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M6 26 L20 26"
        stroke="#E85D1F"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M6 54 L20 54"
        stroke="#E85D1F"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />

      <path d="M24 16 L52 8 L52 64 L24 72 Z" fill="#E85D1F" />
      <path d="M52 8 L86 2 L86 56 L52 64 Z" fill={boxMain} />
      <path d="M52 8 L86 2 L120 12 L86 18 Z" fill={boxTop} />
      <path d="M86 2 L120 12 L120 64 L86 68 Z" fill={boxRight} />
      <path d="M86 18 L120 12 L120 64 L86 68 Z" fill={boxMain} opacity="0.0" />
    </svg>
  );
}

export function LogoLockup({ className = '', variant = 'dark', tagline = null }) {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-white' : 'text-ink-900';
  const accentColor = 'text-ember';
  const taglineColor = isLight ? 'text-white/60' : 'text-ink-500';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-9 w-auto md:h-11" variant={variant} />
      <div className="flex flex-col">
        <span className={`font-display font-bold tracking-tight leading-none text-[22px] md:text-[26px] ${textColor}`}>
          PACK<span className={accentColor}>E</span>O
        </span>
        {tagline && (
          <span className={`mt-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.22em] font-medium ${taglineColor}`}>
            {tagline}
          </span>
        )}
      </div>
    </div>
  );
}

export default LogoLockup;
