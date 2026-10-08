/**
 * Quick prompt suggestions to help visitors explore Carlos Catalán's portfolio.
 */
export const CHAT_QUICK_PROMPTS = [
  {
    id: 'stack',
    label: '💻 Stack Tecnológico',
    query: '¿Cuáles son las principales tecnologías y stack que maneja Carlos?',
  },
  {
    id: 'projects',
    label: '🚀 Proyecto Doctorado',
    query: '¿Qué hizo Carlos en el proyecto del Doctorado en Geografía y qué métricas logró?',
  },
  {
    id: 'security',
    label: '🛡️ Seguridad & Hacking',
    query: '¿Cuál es la formación y experiencia de Carlos en seguridad informática y hacking ético?',
  },
  {
    id: 'contact',
    label: '📬 ¿Cómo contactarlo?',
    query: '¿Cuáles son los canales oficiales para contactar a Carlos o agendar una entrevista?',
  },
];

/**
 * Mapping between cited section titles and DOM element IDs for host auto-scrolling.
 */
export const SECTION_SCROLL_TARGETS = {
  'Overview': 'top',
  'About Me': 'about',
  'Projects & Case Studies': 'proyectos',
  'Skills & Stack': 'skills',
  'Career & Education': 'trayectoria',
  'FAQ': 'faq',
  'Contact': 'contacto',
};
