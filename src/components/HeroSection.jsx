import { Button, PillInfo } from './ui/Button';
import { Badge, BadgeComboCircle } from './ui/Badge';
import { HeroPattern } from './ui/HeroPattern';

export function HeroSection({ onProjectsClick, onContactClick }) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden py-10 sm:py-16 md:py-20 lg:py-24 border-b border-border bg-background"
    >
      {/* SVG Background Pattern  */}
      <div
        className="absolute inset-0 pointer-events-none text-foreground/10 dark:text-accent-highlight/15 animate-hero-bg transition-opacity duration-300"
        aria-hidden="true"
      >
        <HeroPattern />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 sm:gap-8 md:gap-10">
        {/* Top Status Bar  */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 animate-hero-status">
          <Badge variant="frontend" showDot className="text-[11px] sm:text-xs">
            ● DISPONIBLE PARA PROYECTOS FULLSTACK
          </Badge>

          <PillInfo label="EXP ➔" value="UNSJ & UTN" />
        </div>

        {/* Title — Single Semantic H1 for entire page */}
        <div className="flex flex-col gap-1 sm:gap-2 animate-hero-title">
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-primary text-foreground leading-[0.95] tracking-tight sm:tracking-tighter"
          >
            <span className="block">CARLOS CATALAN</span>
            <span className="flex flex-wrap items-center gap-4 lg:gap-6 mt-1 sm:mt-2 text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-accent-highlight tracking-tight sm:tracking-tighter">
              <span>FULL STACK</span>
              <span className="hidden lg:inline-block shrink-0 animate-hero-badge">
                <BadgeComboCircle header="STACK" number="MERN" />
              </span>
            </span>
          </h1>
        </div>

        {/* Bio Box & Actions Grid (Enters smoothly: +220ms) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 pt-2 sm:pt-4 animate-hero-body">
          {/* Bio Column */}
          <div className="lg:col-span-8 flex flex-col gap-3.5 sm:gap-4">
            <p className="text-base sm:text-lg md:text-xl font-semibold font-primary text-foreground leading-relaxed">
              Profesional multidisciplinario con sólida experiencia en desarrollo web full stack (MERN + TypeScript), diseño UX/UI, administración de servidores y seguridad informática.
            </p>
          </div>

          {/* Actions Column */}
          <div className="lg:col-span-4 flex flex-col gap-4 justify-start">
            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-stretch gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={onProjectsClick}
                showArrow
                className="w-full sm:w-auto lg:w-full justify-center h-11"
              >
                Explorar Proyectos
              </Button>
              <Button
                variant="outline"
                size="md"
                href="https://linkedin.com/in/carlosrcatalan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver perfil de LinkedIn de Carlos R. Catalan (se abre en una pestaña nueva)"
                className="w-full sm:w-auto lg:w-full justify-center h-11"
              >
                Ver LinkedIn
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <PillInfo
                label="GitHub ➔"
                value="catalancarlosrolando"
                className="w-full sm:w-auto justify-between sm:justify-start"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
