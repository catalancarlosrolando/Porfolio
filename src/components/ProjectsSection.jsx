import { KickerBadge } from './ui/Badge';
import { PillInfo } from './ui/Button';
import { DoctoradoProjectBreakdown } from './ProjectTechnicalBreakdown';

export function ProjectsSection({ onOpenProject }) {
  const handleOpenDoctoradoDemo = () => {
    if (onOpenProject) {
      onOpenProject('doctorado');
    } else {
      window.open('https://doctoradogeografia.vercel.app/', '_blank', 'noopener,noreferrer');
    }
  };

  const handleOpenDoctoradoCode = (e) => {
    e.preventDefault();
    window.open('https://github.com/DoctoradoGeografia/doctoradogeografia', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="proyectos" className="relative py-20 sm:py-28 bg-background border-b border-border overflow-hidden">
      {/* Decorative Grid & Ambient Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40 -z-0" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-accent-highlight/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Section Heading Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-border/40">
          <div className="space-y-3 max-w-3xl">
            <KickerBadge text="01 // PROYECTOS & SOLUCIONES END-TO-END" className="mb-1" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-primary text-foreground tracking-tight leading-tight">
              DESARROLLO DESTACADO & EVIDENCIA DE IMPACTO
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Ingeniería de software de ciclo completo: desde el diseño arquitectónico y modelado de datos NoSQL, hasta interfaces reactivas accesibles (WCAG 2.2 AA) y despliegues contenerizados en producción.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <PillInfo label="STACK ➔" value="REACT + NODE + COOLIFY" />
          </div>
        </div>

        {/* Featured Case Study #1: Doctorado en Geografía with Live Layer Switcher */}
        <DoctoradoProjectBreakdown
          onOpenDemo={handleOpenDoctoradoDemo}
          onOpenCode={handleOpenDoctoradoCode}
        />

        {/* Secondary Grid: Library UNSJ */}

      </div>
    </section>
  );
}
