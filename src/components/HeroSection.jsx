import { Button, PillInfo } from './ui/Button';
import { Badge, BadgeComboCircle } from './ui/Badge';
import { HeroPattern } from './ui/HeroPattern';

export function HeroSection({ onProjectsClick, onContactClick }) {
  return (
    <section className="relative overflow-hidden py-10 sm:py-16 md:py-20 lg:py-24 border-b border-border bg-background">
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

        {/* Title */}
        <div className="flex flex-col gap-1 sm:gap-2 animate-hero-title">
          {/* Desktop & Tablet Display */}
          <div className="hidden sm:block">
            <h1 className="text-5xl md:text-7xl lg:text-[84px] font-black font-primary text-foreground leading-[0.95] tracking-[-2.5px]">
              CARLOS CATALAN
            </h1>
            <div className="flex flex-wrap items-center gap-4 lg:gap-6 mt-2">
              <span className="text-5xl md:text-7xl lg:text-[84px] font-black font-primary text-accent-highlight leading-[0.95] tracking-[-2.5px]">
                FULL STACK
              </span>
              <div className="hidden lg:block shrink-0 animate-hero-badge">
                <BadgeComboCircle header="STACK" number="MERN" />
              </div>
            </div>
          </div>

          {/* Mobile Display */}
          <div className="block sm:hidden space-y-1">
            <h1 className="text-4xl font-black font-primary text-foreground leading-[0.95] tracking-[-1.5px]">
              CARLOS
            </h1>
            <h1 className="text-4xl font-black font-primary text-foreground leading-[0.95] tracking-[-1.5px]">
              CATALAN
            </h1>
            <div className="text-3xl font-black font-primary text-accent-highlight leading-tight tracking-[-1.2px]">
              FULL STACK
            </div>
          </div>
        </div>

        {/* Bio Box & Actions Grid (Enters smoothly: +220ms) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 pt-2 sm:pt-4 animate-hero-body">
          {/* Bio Column */}
          <div className="lg:col-span-8 flex flex-col gap-3.5 sm:gap-4">
            <p className="text-base sm:text-lg md:text-xl font-semibold font-primary text-foreground leading-relaxed">
              Profesional multidisciplinario con sólida experiencia en desarrollo web full stack (MERN + TypeScript), diseño UX/UI, administración de servidores y seguridad informática.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Docente en la Universidad Nacional de San Juan (UNSJ) y Experto Universitario en Hacking Ético (UTN FRBA). Liderazgo de ciclo completo de software, desarrollo de APIs en Node/Express, esquemas en MongoDB, optimización web y gestión de infraestructura Windows/Linux.
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
                onClick={() => window.open('https://linkedin.com/in/carlosrcatalan', '_blank')}
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
