import { CardMediaTop } from './ui/Card';

import { KickerBadge } from './ui/Badge';
import { CardBackgroundImage } from './ui/CardBackgroundImage';
import { PillInfo } from './ui/Button';

export function ProjectsSection({ onOpenProject }) {
  return (
    <section id="proyectos" className="py-16 sm:py-24 bg-surface  border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Section Heading Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <KickerBadge text="01 // PROYECTOS & SOLUCIONES END-TO-END" className="mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal  font-primary text-foreground">
              DESARROLLOS DESTACADOS
            </h2>
          </div>
          <PillInfo label="STACK ➔" value="REACT + NODE + DOCKER" />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {/* Card 1: Doctorado en Geografía */}
          <CardMediaTop
            title="Doctorado en Geografía - FFHA (UNSJ)"
            description="Solución web institucional con CMS personalizado MERN + TypeScript. API RESTful en Node/Express, MongoDB con índices optimizados, JWT y despliegue continuo en Coolify."
            tags={[
              { label: 'FULL STACK', variant: 'frontend' },
              { label: 'MERN + TS', variant: 'frontend', showDot: true },
            ]}
            onAction={() => onOpenProject?.('doctorado')}
          />

          {/* Card 2: Portal Bibliotecas UNSJ */}
          <CardBackgroundImage
            tag="UNSJ ➔"
            tagValue="#004741"
            page="PAGE 04"
            title="PORTAL INSTITUCIONAL BIBLIOTECAS UNSJ"
            description="Portal web de alta accesibilidad con child theme a medida en HTML5, CSS3 y JS puro. Implementación de Custom Post Types y optimización para baja velocidad."
            badges={[
              { label: 'ACCESIBILIDAD', showDot: true },
              { label: 'WORDPRESS CPT', showDot: true },
            ]}
            onAction={() => onOpenProject?.('bibliotecas')}
          />


        </div>


      </div>
    </section>
  );
}
