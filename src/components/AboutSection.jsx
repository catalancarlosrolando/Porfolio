import { KickerBadge } from './ui/Badge';
import { PillInfo } from './ui/Button';
import { AcademicCapIcon, ShieldCheckIcon, GlobeAltIcon } from './ui/Icons';

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-16 sm:py-24 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Section Heading Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <KickerBadge text="01 // ACERCA DE MÍ & FILOSOFÍA" className="mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-primary text-foreground">
              Ingeniería con Sentido Humano
            </h2>
            <p className="max-w-2xl text-sm sm:text-base text-muted-foreground">
              Más allá del código: docencia universitaria, accesibilidad universal y seguridad informática preventiva.
            </p>
          </div>
          <PillInfo label="UBICACIÓN ➔" value="SAN JUAN, AR" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Personal Story, Teaching Mission & Avatar */}
          <div className="lg:col-span-6 bg-surface-muted/60 border border-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-sm">
            <div className="flex flex-col gap-5">
              {/* Avatar + Identity Block */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary border-2 border-accent-highlight flex items-center justify-center shrink-0 shadow-md">
                  <span className="text-xl font-black font-primary text-accent-highlight">
                    CR
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-primary text-foreground">
                    Carlos R. Catalan
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-accent-highlight">
                    Full Stack Developer · Docente UNSJ · Ciberseguridad UTN
                  </p>
                </div>
              </div>

              {/* Bio Paragraphs (The Human Side) */}
              <div className="space-y-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p className="text-foreground font-medium">
                  Mi vocación no se limita a estructurar código o desplegar servidores: creo en el software como una herramienta de impacto social, inclusión y formación.
                </p>
                <p>
                  Como docente en la <strong className="text-foreground">Universidad Nacional de San Juan (UNSJ)</strong>, acompaño a estudiantes universitarios en la comprensión profunda de la algoritmia y la programación orientada a objetos en Python. Esta experiencia en el aula me ha enseñado que la empatía, la comunicación clara y la paciencia son tan determinantes en ingeniería como la elección de un framework.
                </p>
                <p>
                  Mi especialización en <strong className="text-foreground">Hacking Ético (UTN FRBA)</strong> y redes me permite concebir cada desarrollo con una mentalidad holística: la seguridad, el rendimiento y la accesibilidad (WCAG) no son agregados finales, sino pilares estructurales presentes desde el primer diagrama de arquitectura.
                </p>
              </div>
            </div>

            {/* Micro Pillars */}
            <div className="pt-4 border-t border-border/60 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-foreground font-semibold">
                <AcademicCapIcon className="w-3.5 h-3.5 text-accent-highlight" />
                Docencia & Mentoría
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-foreground font-semibold">
                <GlobeAltIcon className="w-3.5 h-3.5 text-accent-highlight" />
                Accesibilidad Web AA
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-foreground font-semibold">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-accent-highlight" />
                Seguridad Defensiva
              </span>
            </div>
          </div>

          {/* Right Column: Core Values & Geographic Location */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            {/* Values Frame */}
            <div className="bg-surface-muted/60 border border-border rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-sm">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                Valores y Principios de Trabajo
              </h4>

              <div className="space-y-3">
                {/* Value 1 */}
                <div className="p-4 rounded-xl bg-surface border border-border/70 flex flex-col gap-1">
                  <span className="text-sm font-bold font-primary text-accent-highlight">
                    01. Claridad & Pedagogía
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Aprender enseñando. Explicar conceptos técnicos complejos de forma transparente tanto a colegas y alumnos como a clientes.
                  </p>
                </div>

                {/* Value 2 */}
                <div className="p-4 rounded-xl bg-surface border border-border/70 flex flex-col gap-1">
                  <span className="text-sm font-bold font-primary text-accent-highlight">
                    02. Inclusión & Accesibilidad Real
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    El software debe ser universalmente usable. interfaces pensadas para lectores de pantalla, contrastes óptimos y navegación por teclado.
                  </p>
                </div>

                {/* Value 3 */}
                <div className="p-4 rounded-xl bg-surface border border-border/70 flex flex-col gap-1">
                  <span className="text-sm font-bold font-primary text-accent-highlight">
                    03. Arquitectura Resiliente & Seguridad Preventiva
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Diseño modular, bases de datos consistentes y prevención activa de vulnerabilidades OWASP antes del pase a producción.
                  </p>
                </div>
              </div>
            </div>

            {/* Location & Timezone Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-badge-frontend-bg border border-primary/40 flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold text-accent-highlight tracking-wider">
                  UBICACIÓN & DISPONIBILIDAD
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-color-success">
                  <span className="w-2 h-2 rounded-full bg-color-success animate-pulse" />
                  DISPONIBLE
                </span>
              </div>
              <p className="text-sm font-bold font-primary text-foreground">
                San Juan, Argentina (Región de Cuyo, Cordillera de los Andes)
              </p>
              <p className="text-xs font-mono text-muted-foreground">
                LAT 31° 32' S · LON 68° 31' W · Zona Horaria ART (UTC-3)
              </p>
              <p className="text-xs text-muted-foreground pt-1">
                Disponible para desarrollo de software, consultoría técnica y proyectos remotos a nivel global.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
