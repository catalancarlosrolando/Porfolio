import {
  CodeBracketIcon,
  ServerStackIcon,
  CloudArrowUpIcon,
} from '../components/ui/Icons';

/**
 * Architectural layers metadata for Doctorado en Geografía showcase.
 */
export const DOCTORADO_LAYERS = [
  {
    id: 'frontend',
    label: 'Frontend',
    sublabel: 'React 19 + TypeScript',
    icon: CodeBracketIcon,
    badgeVariant: 'frontend',
    tagline: 'SPA Reactiva, Accesible & Alto Rendimiento',
    techs: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'WCAG 2.2 AA', 'Aria-Live'],
    architectureNodes: [
      { name: 'Vite Client', role: 'SPA Bundler / HMR', color: 'border-accent/40 bg-accent/5' },
      { name: 'React 19 + TS', role: 'Atomic Component UI', color: 'border-badge-frontend-fg/40 bg-badge-frontend-bg/30' },
      { name: 'Tailwind Tokens', role: 'Accessible Contrast 7:1', color: 'border-primary/40 bg-surface-muted' },
    ],
    details: [
      {
        title: 'Arquitectura de Componentes & Estado',
        desc: 'Modularización con TypeScript estricto, hooks personalizados para fetch y validación reactiva en formularios de cursos e inscripciones.',
      },
      {
        title: 'Accesibilidad & UX Inclusiva',
        desc: 'Cumplimiento WCAG 2.2 AA: contrastes 7:1, navegación por teclado completa, landmarks semánticos y soporte para lectores de pantalla.',
      },
      {
        title: 'Optimización de Carga',
        desc: 'Code splitting por rutas y compresión de assets logrando un First Contentful Paint < 0.8s.',
      },
    ],
    codeFileName: 'CourseProgram.tsx',
    codeSnippet: `// Interfaz académica con tipado estricto y accesibilidad WAI-ARIA
export interface CourseProgram {
  readonly id: string;
  readonly title: string;
  readonly professor: string;
  readonly startDate: string;
  readonly syllabusUrl: string;
  readonly isEnrolled: boolean;
  readonly status: 'draft' | 'published' | 'archived';
}`,
  },
  {
    id: 'backend',
    label: 'Backend',
    sublabel: 'Node.js + Express + Mongo',
    icon: ServerStackIcon,
    badgeVariant: 'backend',
    tagline: 'API RESTful Robusta, Escalable & Segura',
    techs: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT Auth', 'Bcrypt', 'CORS / Helmet'],
    architectureNodes: [
      { name: 'Express Router', role: 'REST API & Rate Limiter', color: 'border-accent/40 bg-accent/5' },
      { name: 'JWT Auth Guard', role: 'httpOnly Cookie Rotation', color: 'border-badge-frontend-fg/40 bg-badge-frontend-bg/30' },
      { name: 'Mongoose Engine', role: 'Compound Indexed Queries', color: 'border-primary/40 bg-surface-muted' },
    ],
    details: [
      {
        title: 'API RESTful & Controladores Modulares',
        desc: 'Arquitectura en capas (Routes, Controllers, Services, Models) para gestión de noticias, cursos, actas y autenticación institucional.',
      },
      {
        title: 'Base de Datos NoSQL Optimizada',
        desc: 'Esquemas Mongoose con índices compuestos y agregaciones para consultas rápidas de contenidos académicos.',
      },
      {
        title: 'Seguridad & Autenticación',
        desc: 'Tokens JWT con rotación, cookies httpOnly, hash Bcrypt para credenciales, rate limiting y sanitización contra inyecciones NoSQL.',
      },
    ],
    codeFileName: 'enrollment.controller.ts',
    codeSnippet: `// Node.js Express Controller con validación y JWT Guard
export const enrollStudent = async (req: AuthenticatedRequest, res: Response) => {
  const { courseId } = req.params;
  const studentId = req.user.id;
  const registration = await CourseService.register(courseId, studentId);
  return res.status(200).json({ success: true, data: registration });
};`,
  },
  {
    id: 'despliegue',
    label: 'Despliegue',
    sublabel: 'Coolify + Docker + VPS',
    icon: CloudArrowUpIcon,
    badgeVariant: 'system',
    tagline: 'Infraestructura Contenerizada & CI/CD Automatizado',
    techs: ['Coolify', 'Docker', 'Docker Compose', 'VPS Linux', 'NGINX Proxy', 'SSL Let\'s Encrypt'],
    architectureNodes: [
      { name: 'GitHub Webhook', role: 'Push to Main CI/CD', color: 'border-accent/40 bg-accent/5' },
      { name: 'Docker Multi-stage', role: 'Alpine Node 20 Container', color: 'border-badge-frontend-fg/40 bg-badge-frontend-bg/30' },
      { name: 'Coolify PaaS', role: 'Linux VPS + SSL Auto-renew', color: 'border-primary/40 bg-surface-muted' },
    ],
    details: [
      {
        title: 'Orquestación con Coolify & VPS Linux',
        desc: 'Servidor VPS autogestionado con Coolify como plataforma PaaS Open Source, eliminando costos de hosting privativo.',
      },
      {
        title: 'Contenedores Docker Multi-stage',
        desc: 'Dockerfiles optimizados en multi-stage para backend y base de datos, reduciendo el tamaño de imagen en más del 65%.',
      },
      {
        title: 'Continuous Deployment (CI/CD)',
        desc: 'Despliegue automatizado con webhooks de GitHub en cada push a main con zero-downtime y certificados SSL automáticos.',
      },
    ],
    codeFileName: 'Dockerfile',
    codeSnippet: `# Dockerfile multi-stage para Node.js en Coolify
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
CMD ["node", "dist/server.js"]`,
  },
];

/**
 * Quantifiable impact metrics for Doctorado en Geografía case study.
 */
export const DOCTORADO_METRICS = [
  { label: 'Lighthouse Performance', value: '98+', detail: 'LCP < 1.1s, FCP < 0.8s', badge: '100% Score' },
  { label: 'Accesibilidad', value: 'WCAG AA', detail: '100% navegable por teclado', badge: 'Auditado' },
  { label: 'Uptime & Despliegue', value: '99.9%', detail: 'Coolify + Docker en VPS', badge: 'Zero Downtime' },
  { label: 'Comunidad Académica', value: 'UNSJ', detail: 'Docentes, alumnos y posgrado', badge: 'En Producción' },
];
