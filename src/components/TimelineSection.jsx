import { useState } from 'react';
import { KickerBadge } from './ui/Badge';
import { TabFilterBar } from './ui/Tabs';
import { TimelineItem } from './ui/TimelineItem';
import { BriefcaseIcon, AcademicCapIcon, ShieldCheckIcon, GlobeAltIcon } from './ui/Icons';

const TABS = [
  { id: 'experience', label: 'Experiencia Laboral', icon: <BriefcaseIcon className="w-4 h-4" /> },
  { id: 'education', label: 'Formación Académica', icon: <AcademicCapIcon className="w-4 h-4" /> },
  { id: 'certifications', label: 'Certificaciones IT', icon: <ShieldCheckIcon className="w-4 h-4" /> },
  { id: 'languages', label: 'Idiomas', icon: <GlobeAltIcon className="w-4 h-4" /> },
];

const EXPERIENCE_ITEMS = [
  {
    title: 'Desarrollador Web Full Stack (Proyecto Freelance)',
    date: '2025 – Actualidad',
    subtitle: 'Plataforma Doctorado en Geografía - FFHA (UNSJ) • Ingeniería de Software',
    description:
      'Liderazgo del ciclo de vida completo de la plataforma web institucional con CMS personalizado. Construcción con stack MERN + TypeScript, backend RESTful en Express/MongoDB, autenticación robusta con refresh tokens y CI/CD en Coolify.',
  },
  {
    title: 'Desarrollador Web y Diseñador UX/UI',
    date: '2025 – Actualidad',
    subtitle: 'Blog Institucional de las Bibliotecas - UNSJ • Desarrollo Web & UX',
    description:
      'Desarrollo de portal web institucional en WordPress optimizado para accesibilidad y redes lentas. Programación de child theme exclusivo en HTML5/CSS3/JS vanilla con Custom Post Types para autogestión de contenidos (Expte. N° 01-3266).',
  },
  {
    title: 'Auxiliar Docente de 2ª Categoría',
    date: 'Actualidad (2+ años)',
    subtitle: 'Universidad Nacional de San Juan (UNSJ) • Docencia Universitaria',
    description:
      'Cátedra Programación Procedural: Guía académica a estudiantes en algoritmia, estructuras de datos y depuración de código. Cátedra Programación Orientada a Objetos: Prácticas en arquitectura de software, paradigmas OOP y desarrollo en Python.',
  },
  {
    title: 'Administrador de Redes y Sistemas',
    date: 'Mar 2014 – Nov 2019',
    subtitle: 'INET – Conectar Igualdad, San Juan • Infraestructura & Redes',
    description:
      'Administración de infraestructura de red y entornos cliente-servidor en Windows Server y Linux. Mantenimiento de Active Directory, DNS, DHCP, políticas de seguridad informática, planes de backup y soporte integral.',
  },
  {
    title: 'Community Manager y Creador de Contenido',
    date: 'Mar 2025 – Jun 2025',
    subtitle: 'Campaña EUCS (UNSJ) – "SumarSalud 2025" • Comunicación & Métricas',
    description:
      'Estrategia integral de comunicación digital, diseño de identidad gráfica institucional, control de marca y análisis de rendimiento y métricas de alcance.',
  },
  {
    title: 'Voluntario en Comunicación Digital y Asistencia Técnica',
    date: '2007 – 2008',
    subtitle: 'ONG Alas Solidarias • Impacto Comunitario',
    description:
      'Mantenimiento informático preventivo, soporte técnico a equipamiento de computación y desarrollo de contenido multimedia de difusión institucional.',
  },
];

const EDUCATION_ITEMS = [
  {
    title: 'Tecnicatura en Programacion Web',
    date: 'Finalizando',
    subtitle: 'Universidad Nacional de San Juan (UNSJ) • FCEFN',
    description:
      'Formación universitaria rigurosa en algoritmia avanzada, estructuras de datos, diseño de sistemas, cálculo numérico, compiladores y metodologías de ingeniería de software.',
  },
  {
    title: 'Auxiliaturas y Proyectos Académicos de Extensión',
    date: '2023 – Presente',
    subtitle: 'UNSJ • Cátedras de Programación',
    description:
      'Formación docente continua, asistencia a cátedras universitarias y dictado de talleres prácticos de programación procedural y orientada a objetos en Python.',
  },
];

const CERTIFICATION_ITEMS = [
  {
    title: 'Experto Universitario en Hacking Ético & Ciberseguridad',
    date: '2025',
    subtitle: 'Universidad Tecnológica Nacional (UTN FRBA)',
    description:
      'Análisis de vulnerabilidades web (OWASP Top 10), pruebas de penetración, pentesting de redes, hardening de servidores y seguridad defensiva en infraestructuras críticas.',
  },
  {
    title: 'Cisco Certified Network Associate (CCNA) Curriculum',
    date: 'Certificado',
    subtitle: 'Cisco Networking Academy • INET',
    description:
      'Arquitectura de redes TCP/IP, enrutamiento estático y dinámico (OSPF), VLANs, switching, seguridad perimetral de red y resolución de fallas en redes de datos.',
  },
  {
    title: 'Administración Profesional de Servidores Linux & Windows',
    date: 'Certificado',
    subtitle: 'INET / UNSJ',
    description:
      'Gestión de servicios de red DNS, DHCP, Web Servers (Nginx/Apache), Active Directory, políticas de grupo (GPO), virtualización y planes de contingencia.',
  },
];

const LANGUAGE_ITEMS = [
  {
    title: 'Español (Lengua Materna)',
    date: 'Nativo',
    subtitle: 'Comunicación Oral y Escrita',
    description:
      'Capacidad de redacción técnica, documentación de proyectos de ingeniería de software y oratoria para dictado de cátedras universitarias.',
  },
  {
    title: 'Inglés Técnico para Ingeniería & Software',
    date: 'Profesional',
    subtitle: 'Lectura, Escritura y Comprensión Técnica',
    description:
      'Lectura fluida de documentación oficial, estándares RFC, especificaciones de arquitecturas cloud, redacción de documentación técnica y comunicación en entornos ágiles.',
  },
];

export function TimelineSection() {
  const [activeTab, setActiveTab] = useState('experience');

  const getItems = () => {
    switch (activeTab) {
      case 'education':
        return EDUCATION_ITEMS;
      case 'certifications':
        return CERTIFICATION_ITEMS;
      case 'languages':
        return LANGUAGE_ITEMS;
      case 'experience':
      default:
        return EXPERIENCE_ITEMS;
    }
  };

  const currentItems = getItems();

  return (
    <section id="trayectoria" className="py-20 sm:py-28 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Block */}
        <KickerBadge text="03 // TRAYECTORIA & FORMACIÓN" className="mb-4" />
        <div className="flex flex-col items-left text-left mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-primary text-foreground mb-4">
            Experiencia Laboral, Docencia & Formación
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-muted-foreground">
            Evolución profesional continua avalada por instituciones académicas de prestigio (UNSJ, UTN, Cisco).
          </p>
        </div>

        {/* Filter Tabs Bar */}
        <div className="mb-14">
          <TabFilterBar
            tabs={TABS}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {/* Timeline Items List */}
        <div className="w-full flex flex-col items-stretch">
          {currentItems.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.title}
              date={item.date}
              subtitle={item.subtitle}
              description={item.description}
              isLast={index === currentItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
