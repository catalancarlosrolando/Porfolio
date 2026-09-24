import { Accordion } from './ui/Accordion';
import { KickerBadge } from './ui/Badge';

const FAQ_ITEMS = [
  {
    title: '¿Qué stack tecnológico utilizas para desarrollo Full Stack?',
    content:
      'Mi stack principal comprende React 19, TypeScript, Node.js, Express y MongoDB (MERN). Para soluciones institucionales y CMS también integro WordPress avanzado con desarrollo de temas hijos (Child Themes) personalizados en HTML5/CSS3/JS vanilla y despliegues con Coolify y Docker.',
    defaultOpen: true,
  },
  {
    title: '¿Cuál es tu experiencia en infraestructura de redes y seguridad?',
    content:
      'Cuento con más de 5 años de experiencia en administración de servidores Linux y Windows Server, Active Directory, políticas de seguridad informática, redes Cisco (CCNA) y especialización en Hacking Ético (UTN FRBA 2025).',
  },
  {
    title: '¿Cómo abordas la docencia y la formación técnica?',
    content:
      'Como Auxiliar Docente de 2ª Categoría en la UNSJ por más de 2 años consecutivos, guío a estudiantes en cátedras de Programación Procedural y Programación Orientada a Objetos en Python, promoviendo buenas prácticas de arquitectura, depuración y algoritmia.',
  },
  {
    title: '¿Estás disponible para proyectos freelance o contratación remota?',
    content:
      'Sí, estoy disponible para desarrollo de plataformas web, auditorías de accesibilidad, consultoría en infraestructura y proyectos de software desde San Juan, Argentina con alcance global.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-surface/30 border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <KickerBadge text="CONSULTAS TÉCNICAS FRECUENTES" className="mb-4" />
        <div className="flex flex-col items-left text-left mb-12">
          <h2 className="text-3xl sm:text-4xl font-black font-primary text-foreground mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm text-muted-foreground">
            Respuestas directas sobre metodologías de trabajo, docencia y capacidades técnicas.
          </p>
        </div>

        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
