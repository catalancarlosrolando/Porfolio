export function HeroPatternSection({ className = '' }) {
  return (
    <svg
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Cuadrícula fina de alta densidad (escala milimétrica ~12px) */}
        <pattern
          id="skill-grid-sub"
          width="12"
          height="12"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 12 0 L 0 0 0 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.55"
          />
        </pattern>

        {/* Guías principales cada 60px (5 divisiones) */}
        <pattern
          id="skill-grid-main"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <rect width="60" height="60" fill="url(#skill-grid-sub)" />
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.85"
            strokeOpacity="0.95"
          />
        </pattern>
      </defs>

      {/* Relleno completo de la cuadrícula */}
      <rect width="100%" height="100%" fill="url(#skill-grid-main)" />
    </svg>
  );
}

