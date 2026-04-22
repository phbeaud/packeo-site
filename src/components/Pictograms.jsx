const STROKE = 1.4;
const EMBER = '#E85D1F';

function useColors(variant) {
  return variant === 'light' ? '#FFFFFF' : '#14161A';
}

function Frame({ children, className = 'w-full h-full' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function IcoBoite({ className, variant }) {
  const ink = useColors(variant);
  return (
    <Frame className={className}>
      <path d="M8 20 L32 10 L56 20 L32 30 Z" stroke={EMBER} strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M8 20 V48 L32 58 L56 48 V20" stroke={ink} strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M32 30 V58" stroke={ink} strokeWidth={STROKE} />
      <path d="M16 16 L40 6" stroke={EMBER} strokeWidth={STROKE} strokeLinecap="round" opacity="0.4" />
      <path d="M48 16 L56 20" stroke={EMBER} strokeWidth={STROKE} strokeLinecap="round" opacity="0.4" />
    </Frame>
  );
}

export function IcoContenant({ className, variant }) {
  const ink = useColors(variant);
  return (
    <Frame className={className}>
      <path d="M14 20 H50 L46 54 H18 Z" stroke={ink} strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M14 20 Q32 12 50 20" stroke={EMBER} strokeWidth={STROKE} strokeLinecap="round" />
      <path d="M20 10 H44" stroke={EMBER} strokeWidth={STROKE} strokeLinecap="round" />
      <path d="M22 30 H42" stroke={ink} strokeWidth={STROKE} strokeLinecap="round" opacity="0.3" />
      <path d="M23 40 H41" stroke={ink} strokeWidth={STROKE} strokeLinecap="round" opacity="0.3" />
    </Frame>
  );
}

export function IcoSac({ className, variant }) {
  const ink = useColors(variant);
  return (
    <Frame className={className}>
      <path d="M16 16 L22 10 H42 L48 16 V54 H16 Z" stroke={ink} strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M22 10 V6 Q22 4 24 4 H40 Q42 4 42 6 V10" stroke={EMBER} strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M24 28 H40" stroke={EMBER} strokeWidth={STROKE} strokeLinecap="round" />
      <path d="M22 38 H42" stroke={ink} strokeWidth={STROKE} strokeLinecap="round" opacity="0.3" />
    </Frame>
  );
}

export function IcoSousVide({ className, variant }) {
  const ink = useColors(variant);
  return (
    <Frame className={className}>
      <rect x="10" y="18" width="44" height="32" rx="2" stroke={ink} strokeWidth={STROKE} />
      <path d="M10 28 H54" stroke={ink} strokeWidth={STROKE} opacity="0.3" />
      <path d="M16 36 Q32 30 48 36" stroke={EMBER} strokeWidth={STROKE} strokeLinecap="round" />
      <path d="M16 42 Q32 36 48 42" stroke={EMBER} strokeWidth={STROKE} strokeLinecap="round" opacity="0.5" />
      <circle cx="50" cy="24" r="1.8" fill={EMBER} />
    </Frame>
  );
}

export function IcoPot({ className, variant }) {
  const ink = useColors(variant);
  return (
    <Frame className={className}>
      <rect x="18" y="6" width="28" height="8" rx="1.5" stroke={EMBER} strokeWidth={STROKE} />
      <path d="M16 18 H48 V54 Q48 58 44 58 H20 Q16 58 16 54 Z" stroke={ink} strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M16 24 H48" stroke={ink} strokeWidth={STROKE} opacity="0.25" />
      <circle cx="32" cy="40" r="4" fill={EMBER} opacity="0.2" />
      <circle cx="32" cy="40" r="4" stroke={EMBER} strokeWidth={STROKE} />
    </Frame>
  );
}

export function IcoProtection({ className, variant }) {
  const ink = useColors(variant);
  return (
    <Frame className={className}>
      <path d="M32 4 L54 14 V32 Q54 48 32 58 Q10 48 10 32 V14 Z" stroke={ink} strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M22 30 L30 38 L44 22" stroke={EMBER} strokeWidth={STROKE * 1.3} strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  );
}

export function IcoSurMesure({ className, variant }) {
  const ink = useColors(variant);
  return (
    <Frame className={className}>
      <circle cx="32" cy="32" r="10" stroke={ink} strokeWidth={STROKE} />
      <path d="M32 6 V14 M32 50 V58 M6 32 H14 M50 32 H58" stroke={EMBER} strokeWidth={STROKE} strokeLinecap="round" />
      <path d="M14 14 L20 20 M44 44 L50 50 M14 50 L20 44 M44 20 L50 14" stroke={EMBER} strokeWidth={STROKE} strokeLinecap="round" opacity="0.5" />
      <circle cx="32" cy="32" r="3" fill={EMBER} />
    </Frame>
  );
}

export function IcoImportation({ className, variant }) {
  const ink = useColors(variant);
  return (
    <Frame className={className}>
      <path d="M6 48 H58" stroke={ink} strokeWidth={STROKE} />
      <rect x="12" y="28" width="20" height="20" stroke={ink} strokeWidth={STROKE} />
      <rect x="32" y="20" width="16" height="28" stroke={ink} strokeWidth={STROKE} />
      <path d="M4 32 L12 32" stroke={EMBER} strokeWidth={STROKE * 1.3} strokeLinecap="round" />
      <path d="M6 24 L10 24" stroke={EMBER} strokeWidth={STROKE} strokeLinecap="round" opacity="0.5" />
      <path d="M6 40 L10 40" stroke={EMBER} strokeWidth={STROKE} strokeLinecap="round" opacity="0.5" />
    </Frame>
  );
}

export function IcoEntrepot({ className, variant }) {
  const ink = useColors(variant);
  return (
    <Frame className={className}>
      <path d="M6 26 L32 10 L58 26 V54 H6 Z" stroke={ink} strokeWidth={STROKE} strokeLinejoin="round" />
      <rect x="14" y="34" width="8" height="8" stroke={EMBER} strokeWidth={STROKE} />
      <rect x="28" y="34" width="8" height="8" stroke={EMBER} strokeWidth={STROKE} />
      <rect x="42" y="34" width="8" height="8" stroke={EMBER} strokeWidth={STROKE} />
      <path d="M6 46 H58" stroke={ink} strokeWidth={STROKE} opacity="0.3" />
    </Frame>
  );
}

export function IcoLivraison({ className, variant }) {
  const ink = useColors(variant);
  return (
    <Frame className={className}>
      <rect x="6" y="22" width="30" height="22" stroke={ink} strokeWidth={STROKE} />
      <path d="M36 28 H50 L56 36 V44 H36 Z" stroke={ink} strokeWidth={STROKE} strokeLinejoin="round" />
      <circle cx="18" cy="48" r="4" stroke={EMBER} strokeWidth={STROKE} />
      <circle cx="44" cy="48" r="4" stroke={EMBER} strokeWidth={STROKE} />
      <path d="M10 30 H22" stroke={EMBER} strokeWidth={STROKE} strokeLinecap="round" opacity="0.5" />
    </Frame>
  );
}

export function IcoRestaurant({ className, variant }) {
  const ink = useColors(variant);
  return (
    <Frame className={className}>
      <path d="M18 8 V30 Q18 34 14 34 V56" stroke={ink} strokeWidth={STROKE} strokeLinecap="round" />
      <path d="M22 8 V20" stroke={ink} strokeWidth={STROKE} strokeLinecap="round" />
      <path d="M14 8 V20" stroke={ink} strokeWidth={STROKE} strokeLinecap="round" />
      <path d="M42 8 Q50 10 50 22 Q50 30 46 32 V56" stroke={EMBER} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  );
}

export function IcoTransformation({ className, variant }) {
  const ink = useColors(variant);
  return (
    <Frame className={className}>
      <rect x="10" y="20" width="44" height="30" stroke={ink} strokeWidth={STROKE} />
      <path d="M10 20 V14 H54 V20" stroke={ink} strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M18 30 V42" stroke={EMBER} strokeWidth={STROKE * 1.3} strokeLinecap="round" />
      <path d="M26 30 V42" stroke={EMBER} strokeWidth={STROKE * 1.3} strokeLinecap="round" />
      <path d="M34 30 V42" stroke={EMBER} strokeWidth={STROKE * 1.3} strokeLinecap="round" />
      <path d="M42 30 V42" stroke={EMBER} strokeWidth={STROKE * 1.3} strokeLinecap="round" />
      <circle cx="46" cy="10" r="2" fill={EMBER} />
    </Frame>
  );
}

export function IcoIndustriel({ className, variant }) {
  const ink = useColors(variant);
  return (
    <Frame className={className}>
      <path d="M8 54 V30 L22 38 V30 L36 38 V22 L54 30 V54 Z" stroke={ink} strokeWidth={STROKE} strokeLinejoin="round" />
      <rect x="14" y="42" width="6" height="8" fill={EMBER} />
      <rect x="26" y="42" width="6" height="8" fill={EMBER} />
      <rect x="38" y="42" width="6" height="8" fill={EMBER} />
      <path d="M44 10 V22" stroke={ink} strokeWidth={STROKE} strokeLinecap="round" />
      <path d="M44 10 L40 6 M44 10 L48 6" stroke={EMBER} strokeWidth={STROKE} strokeLinecap="round" />
    </Frame>
  );
}

export function IcoContrat({ className, variant }) {
  const ink = useColors(variant);
  return (
    <Frame className={className}>
      <path d="M14 8 H42 L50 16 V56 H14 Z" stroke={ink} strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M42 8 V16 H50" stroke={ink} strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M20 26 H40" stroke={ink} strokeWidth={STROKE} strokeLinecap="round" opacity="0.4" />
      <path d="M20 34 H44" stroke={ink} strokeWidth={STROKE} strokeLinecap="round" opacity="0.4" />
      <path d="M20 42 L26 48 L40 36" stroke={EMBER} strokeWidth={STROKE * 1.3} strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  );
}
