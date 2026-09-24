export function HeroPattern({ className = '' }) {
  return (
    <svg
      viewBox="0 0 1000 500"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.40"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMid slice"
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    >
      {/* Parallel diagonal lines across top-left to center */}
      <line x1="-500" y1="0" x2="0" y2="500" />
      <line x1="-470" y1="0" x2="30" y2="500" />
      <line x1="-440" y1="0" x2="60" y2="500" />
      <line x1="-410" y1="0" x2="90" y2="500" />
      <line x1="-380" y1="0" x2="120" y2="500" />
      <line x1="-350" y1="0" x2="150" y2="500" />
      <line x1="-320" y1="0" x2="180" y2="500" />
      <line x1="-290" y1="0" x2="210" y2="500" />
      <line x1="-260" y1="0" x2="240" y2="500" />
      <line x1="-230" y1="0" x2="270" y2="500" />
      <line x1="-200" y1="0" x2="300" y2="500" />
      <line x1="-170" y1="0" x2="330" y2="500" />
      <line x1="-140" y1="0" x2="360" y2="500" />
      <line x1="-110" y1="0" x2="390" y2="500" />
      <line x1="-80" y1="0" x2="420" y2="500" />
      <line x1="-50" y1="0" x2="450" y2="500" />
      <line x1="-20" y1="0" x2="480" y2="500" />
      <line x1="10" y1="0" x2="510" y2="500" />
      <line x1="40" y1="0" x2="540" y2="500" />
      <line x1="70" y1="0" x2="570" y2="500" />
      <line x1="100" y1="0" x2="600" y2="500" />
      <line x1="130" y1="0" x2="630" y2="500" />
      <line x1="160" y1="0" x2="660" y2="500" />
      <line x1="190" y1="0" x2="690" y2="500" />
      <line x1="220" y1="0" x2="720" y2="500" />
      <line x1="250" y1="0" x2="750" y2="500" />
      <line x1="280" y1="0" x2="780" y2="500" />
      <line x1="310" y1="0" x2="810" y2="500" />
      <line x1="340" y1="0" x2="840" y2="500" />
      <line x1="370" y1="0" x2="870" y2="500" />
      <line x1="400" y1="0" x2="895" y2="495" />

      {/* Diagonal lines curving with rounded corner at bottom right */}
      <path d="M 430 0 L 905 475 Q 920 490 930 500" />
      <path d="M 460 0 L 920 460 Q 940 480 960 500" />
      <path d="M 490 0 L 935 445 Q 965 475 990 500" />
      <path d="M 520 0 L 945 425 Q 980 460 1000 480" />
      <path d="M 550 0 L 955 405 Q 985 435 1000 450" />
      <path d="M 580 0 L 965 385 Q 990 410 1000 420" />
      <path d="M 610 0 L 975 365 Q 992 382 1000 390" />
      <path d="M 640 0 L 985 345 Q 995 355 1000 360" />
      <path d="M 670 0 L 992 322 Q 998 328 1000 330" />

      {/* Remaining lines exiting right border */}
      <line x1="700" y1="0" x2="1000" y2="300" />
      <line x1="730" y1="0" x2="1000" y2="270" />
      <line x1="760" y1="0" x2="1000" y2="240" />
      <line x1="790" y1="0" x2="1000" y2="210" />
      <line x1="820" y1="0" x2="1000" y2="180" />
      <line x1="850" y1="0" x2="1000" y2="150" />
      <line x1="880" y1="0" x2="1000" y2="120" />
      <line x1="910" y1="0" x2="1000" y2="90" />
      <line x1="940" y1="0" x2="1000" y2="60" />
      <line x1="970" y1="0" x2="1000" y2="30" />
    </svg>
  );
}
