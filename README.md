# Carlos R. Catalán — Developer Portfolio & AI Assistant

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-5.0-FCC72B?style=flat-square&logo=vitest&logoColor=black)](https://vitest.dev/)
[![Oxlint](https://img.shields.io/badge/Oxlint-1.81-orange?style=flat-square)](https://oxc.rs/)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-2.5_Flash-4285F4?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

Portfolio web profesional e interactivo desarrollado como una **Single Page Application (SPA)** de alto rendimiento para **Carlos R. Catalán** (Desarrollador Full Stack MERN, Especialista en Infraestructura y Docente Universitario).

El proyecto combina una interfaz moderna bajo el sistema de diseño **"Cyprus & Sand"**, accesibilidad rigurosa (**WCAG 2.2 AA**), desglose técnico interactivo de casos de estudio reales, y un **asistente virtual inteligente integrado con la API de Google Gemini**.

---

## 🌟 Características Principales

### 1. 🤖 Asistente Virtual AI Integrado (Gemini 2.5 Flash)
- **Widget flotante interactivo** en la esquina inferior derecha (`bottom-5 right-5`), diseñado para no colisionar con menús de navegación ni interfaces móviles.
- **Consultas contextuales**: Responde dudas sobre experiencia técnica, proyectos, docencia universitaria, certificaciones de hacking ético y formas de contacto.
- **Acciones interactivas**:
  - *Chips de preguntas rápidas*: Sugerencias temáticas con un solo clic (Stack, Proyectos, Seguridad, Contacto).
  - *Auto-scroll sincronizado*: Desplaza suavemente la página hacia la sección relevante cuando el bot la cita.
  - *Persistencia local*: Mantiene el historial de conversación en `localStorage` entre recargas.
  - *Escalado humano directo*: Botón para abrir el modal de contacto formal en cualquier momento.
  - *Accesibilidad garantizada*: Anuncios en tiempo real con `role="log"` y `aria-live="polite"`, atajo de teclado <kbd>Escape</kbd> y control de foco.

### 2. 🔍 Desglose Técnico de Proyectos & Evidencia de Impacto
- Supera las tarjetas estáticas tradicionales mediante desgloses interactivos por capas:
  - **Capa Frontend**: React 19, TypeScript, Tailwind CSS v4, componentes accesibles y Lighthouse 98+.
  - **Capa Backend**: Node.js, Express, MongoDB/Mongoose, JWT httpOnly y protección contra inyecciones NoSQL.
  - **Capa Despliegue**: Despliegue soberano con **Coolify** y Docker en VPS propio, CI/CD automatizado y certificados SSL.
- **Métricas reales**: Usuarios concurrentes, rendimiento, accesibilidad y enlaces directos a código fuente y demos en producción (ej. *Plataforma Doctorado en Geografía UNSJ*).

### 3. 👤 Sección "Acerca de Mí" & Valores Humanos
- Más allá de un CV técnico: comunicación de principios profesionales, filosofía de código limpio, accesibilidad por diseño, soberanía de infraestructura y tarjeta de ubicación geográfica (San Juan, Argentina — UTC-3).

### 4. 🧭 Trayectoria & Matriz de Habilidades
- **Línea de tiempo interactiva** con pestañas para experiencia profesional, labor docente universitaria en la UNSJ y formación en ciberseguridad / hacking ético.
- **Matriz de tecnologías** organizada por dominios (Frontend, Backend, Bases de Datos, DevOps, Seguridad y Herramientas).

### 5. 🎨 Sistema de Diseño "Cyprus & Sand" & Accesibilidad
- Paleta cromática personalizada con tokens semánticos y soporte completo para **modo claro y oscuro** mediante `ThemeContext`.
- Cumplimiento **WCAG 2.2 AA**: enlaces de salto al contenido principal (*Skip Links*), ratios de contraste óptimos, semántica HTML5 y soporte para `prefers-reduced-motion`.

---

## 🛠️ Stack Tecnológico

### Frontend (SPA)
| Tecnología | Versión / Propósito |
| :--- | :--- |
| **React** | `19.2` — Componentes funcionales y optimización con React Compiler |
| **Vite** | `8.3` — Empaquetador y entorno de desarrollo ultra-rápido |
| **Tailwind CSS** | `v4.3` — Motor de estilos con variables CSS nativas |
| **Vitest & RTL** | Pruebas unitarias, integración y validación a11y |
| **Oxlint** | Linter de alto rendimiento para calidad de código |
| **Lucide / Heroicons** | Iconografía SVG vectorial optimizada |

### Backend Serverless (AI Chat API)
| Tecnología | Propósito |
| :--- | :--- |
| **Vercel Serverless Functions** | Endpoint REST `/api/chat` desacoplado |
| **Google Gemini API (`@google/genai`)** | Modelo `gemini-2.5-flash` con grounding estricto del portfolio |
| **CORS & Rate Limiting** | Manejo seguro de solicitudes cross-origin |

---

## 📁 Estructura del Proyecto

```text
PENDEV/
├── backend/                        # Backend Serverless para el Chatbot
│   ├── api/
│   │   └── chat.js                 # Endpoint /api/chat con Gemini SDK
│   └── package.json
│
└── portfolio/                      # Frontend SPA React 19 + Vite
    ├── public/                     # Recursos estáticos y favicons
    ├── src/
    │   ├── assets/                 # Imágenes optimizadas y capturas de proyectos
    │   ├── components/
    │   │   ├── ChatBot/            # Widget de Asistente Virtual AI
    │   │   │   └── ChatBotWidget.jsx
    │   │   ├── ui/                 # Componentes atómicos (Badge, Button, Card, Icons, etc.)
    │   │   ├── AboutSection.jsx    # Sección personal, valores y ubicación
    │   │   ├── ContactModal.jsx    # Modal de contacto accesible
    │   │   ├── FaqSection.jsx      # Preguntas frecuentes en acordeón
    │   │   ├── Footer.jsx          # Pie de página y enlaces sociales
    │   │   ├── HeroSection.jsx     # Encabezado principal y llamadas a la acción
    │   │   ├── Navbar.jsx          # Navegación con selector de tema
    │   │   ├── ProjectsSection.jsx # Sección principal de proyectos
    │   │   ├── ProjectTechnicalBreakdown.jsx # Desglose por capas (Frontend, Backend, Deploy)
    │   │   ├── SkillSection.jsx    # Matriz técnica categorizada
    │   │   └── TimelineSection.jsx # Experiencia, docencia y certificaciones
    │   ├── context/
    │   │   └── ThemeContext.jsx    # Proveedor de tema claro / oscuro persistente
    │   ├── data/
    │   │   ├── chatQuickPrompts.js # Chips de sugerencias y anclas de navegación
    │   │   └── doctoradoProjectData.js # Contenido técnico del caso de estudio
    │   ├── hooks/
    │   │   ├── useChatBot.js       # Lógica del chatbot, fetch, auto-scroll y persistencia
    │   │   └── useLockBodyScroll.js# Bloqueo accesible de scroll en modales
    │   ├── test/                   # Suite de pruebas automatizadas (Vitest)
    │   │   ├── App.test.jsx
    │   │   ├── ChatBotWidget.test.jsx
    │   │   ├── ContactModal.test.jsx
    │   │   ├── ProjectsSection.test.jsx
    │   │   └── ...
    │   ├── App.jsx                 # Composición raíz de la aplicación
    │   ├── index.css               # Directivas Tailwind v4 y tokens de tema
    │   └── main.jsx                # Punto de entrada de React
    ├── package.json
    ├── vite.config.js
    └── README.md
```

---

## 🚀 Guía de Inicio Rápido

### Requisitos Previos
- **Node.js**: v18.0.0 o superior
- **Gestor de paquetes**: [pnpm](https://pnpm.io/) (recomendado) o `npm`

### 1. Instalación de Dependencias

```bash
# Entrar a la carpeta del portfolio
cd portfolio

# Instalar dependencias con pnpm
pnpm install
```

### 2. Ejecutar en Servidor de Desarrollo

```bash
pnpm dev
```
La aplicación iniciará en `http://localhost:5173`.

### 3. Ejecutar Pruebas Automatizadas

```bash
# Ejecutar suite de pruebas completa (34 tests)
pnpm test

# Modo observación (watch mode)
pnpm test:watch
```

### 4. Análisis Estático de Código (Linter)

```bash
pnpm lint
```

### 5. Compilación para Producción

```bash
# Generar bundle optimizado en /dist
pnpm build

# Previsualizar el build de producción localmente
pnpm preview
```

---

## 🔒 Configuración del Backend (AI Chatbot)

El chatbot interactúa con el endpoint `/api/chat` desplegado en Vercel. Para ejecutarlo localmente:

1. Ingresar al directorio `backend/`:
   ```bash
   cd backend
   npm install
   ```
2. Crear un archivo `.env` en `backend/` con tu API Key de Google Gemini:
   ```env
   GEMINI_API_KEY=tu_clave_de_api_aqui
   ```
3. Iniciar el entorno serverless con Vercel CLI:
   ```bash
   vercel dev
   ```

---

## ♿ Estándares de Accesibilidad & Calidad

- **WCAG 2.2 Nivel AA**: Todos los componentes interactivos cuentan con `aria-label`, gestión semántica de encabezados (`h1`-`h4`), ratios de contraste validados y foco visible.
- **Teclado & Lectores de Pantalla**: Trampas de foco controladas en modales, tecla <kbd>Escape</kbd> para cerrar diálogos, y navegación secuencial fluida.
- **Cobertura de Pruebas**: 34 pruebas automatizadas con Vitest que validan renderizado, interacciones, estado de temas, flujo del chatbot y fallbacks de red.

---

## 👨‍💻 Autor & Contacto

**Carlos Rolando Catalán**  
*Desarrollador Full Stack & Infraestructura TI*  
San Juan, Argentina

- **GitHub:** [@DoctoradoGeografia](https://github.com/DoctoradoGeografia) / [@catalancarlosrolando](https://github.com/catalancarlosrolando)
- **LinkedIn:** [carlosrcatalan](https://linkedin.com/in/carlosrcatalan)
- **Portfolio Web:** [carloscatalan.dev](https://carloscatalan.dev)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.
