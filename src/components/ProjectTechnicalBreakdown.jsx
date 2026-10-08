import { useState } from 'react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import {
  CodeBracketIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  GithubIcon,
  CheckIcon,
  GlobeAltIcon,
  SparklesIcon,
} from './ui/Icons';
import doctoradoImg from '../assets/doctorado.png';
import { DOCTORADO_LAYERS, DOCTORADO_METRICS } from '../data/doctoradoProjectData';

export function DoctoradoProjectBreakdown({ onOpenDemo, onOpenCode }) {
  const [activeTab, setActiveTab] = useState('frontend'); // 'frontend' | 'backend' | 'despliegue'
  const [copied, setCopied] = useState(false);

  const currentLayer = DOCTORADO_LAYERS.find((l) => l.id === activeTab) || DOCTORADO_LAYERS[0];

  const handleCopy = () => {
    navigator.clipboard?.writeText(currentLayer.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleKeyDown = (e) => {
    const currentIndex = DOCTORADO_LAYERS.findIndex((l) => l.id === activeTab);
    if (e.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % DOCTORADO_LAYERS.length;
      setActiveTab(DOCTORADO_LAYERS[nextIndex].id);
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + DOCTORADO_LAYERS.length) % DOCTORADO_LAYERS.length;
      setActiveTab(DOCTORADO_LAYERS[prevIndex].id);
    }
  };

  return (
    <article
      className="relative bg-surface border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
      aria-labelledby="project-doctorado-title"
    >
      {/* Subtle Luminous Ambient Accent Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 dark:bg-accent/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-highlight/10 dark:bg-accent-highlight/15 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Header Bar */}
      <div className="relative z-10 p-6 sm:p-8 md:p-10 border-b border-border/60 bg-surface/80 backdrop-blur-md flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-3.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-primary text-primary-foreground shadow-sm">
              <SparklesIcon className="w-3.5 h-3.5 text-accent-highlight" />
              CASO DE ESTUDIO DESTACADO
            </span>
            <Badge variant="system" showDot>
              FULL STACK MERN + TS
            </Badge>
            <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold text-muted-foreground bg-surface-muted border border-border">
              UNSJ • FFHA
            </span>
          </div>

          <h3
            id="project-doctorado-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-primary text-foreground tracking-tight leading-tight"
          >
            Plataforma Doctorado en Geografía (UNSJ)
          </h3>

          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
            Plataforma web académica integral con CMS a medida para la difusión de producción científica, cursos de posgrado,
            inscripciones en línea y noticias institucionales con soberanía tecnológica.
          </p>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Button
            variant="primary"
            size="md"
            onClick={onOpenDemo}
            aria-label="Ver demo en vivo del Doctorado en Geografía (abre en pestaña nueva)"
            showArrow
            className="shadow-md hover:shadow-accent/20"
          >
            Ver Demo en Vivo
          </Button>

          <Button
            variant="outline"
            size="md"
            href="https://github.com/DoctoradoGeografia/doctoradogeografia"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onOpenCode}
            aria-label="Ver código fuente en GitHub del Doctorado en Geografía (abre en pestaña nueva)"
          >
            <GithubIcon className="w-4 h-4 mr-2" />
            Código en GitHub
          </Button>
        </div>
      </div>

      {/* Main Grid: Architecture Carousel/Switcher (8 cols) + Impact & Problem (4 cols) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">
        {/* Left / Middle: Interactive Architecture Explorer */}
        <div className="lg:col-span-8 p-6 sm:p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-border/60 flex flex-col justify-between">
          <div>
            {/* Wheel / Carousel Layer Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-mono font-bold text-accent tracking-widest uppercase">
                  EXPLORADOR DE ARQUITECTURA TÉCNICA:
                </span>
              </div>

              {/* Layer Selection Carousel Tabs */}
              <div
                role="tablist"
                aria-label="Capas técnicas del proyecto"
                onKeyDown={handleKeyDown}
                className="inline-flex p-1.5 bg-surface-muted rounded-2xl border border-border shadow-inner"
              >
                {DOCTORADO_LAYERS.map((layer) => {
                  const Icon = layer.icon;
                  const isSelected = activeTab === layer.id;
                  return (
                    <button
                      key={layer.id}
                      role="tab"
                      id={`tab-${layer.id}`}
                      aria-selected={isSelected}
                      aria-controls={`panel-${layer.id}`}
                      tabIndex={isSelected ? 0 : -1}
                      onClick={() => setActiveTab(layer.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'bg-surface text-accent font-bold shadow-md border border-border ring-1 ring-accent/30 scale-[1.02]'
                          : 'text-muted-foreground hover:text-foreground hover:bg-surface/60'
                      }`}
                    >
                      <Icon className={`w-4 h-4 transition-colors ${isSelected ? 'text-accent' : 'text-muted-foreground'}`} />
                      <span>{layer.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Layer Dynamic Card */}
            <div
              role="tabpanel"
              id={`panel-${currentLayer.id}`}
              aria-labelledby={`tab-${currentLayer.id}`}
              className="bg-surface-muted/40 border border-border/80 rounded-2xl p-5 sm:p-7 transition-all duration-300 shadow-sm"
            >
              {/* Layer Tagline & Tech Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-border/60">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center border border-accent/20 shadow-sm shrink-0">
                    <currentLayer.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold font-primary text-foreground">
                      {currentLayer.label}: {currentLayer.sublabel}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{currentLayer.tagline}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {currentLayer.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-surface border border-border text-foreground font-semibold shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Topology / Flow Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
                {currentLayer.architectureNodes.map((node, i) => (
                  <div
                    key={node.name}
                    className={`p-3 rounded-xl border ${node.color} flex flex-col justify-between`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                      <span>NODO 0{i + 1}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                    <div className="mt-2">
                      <span className="text-xs font-bold font-mono text-foreground block">{node.name}</span>
                      <span className="text-[11px] text-muted-foreground font-medium">{node.role}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Breakdown Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                {currentLayer.details.map((item, idx) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-surface border border-border/80 flex flex-col justify-between shadow-2xs"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-accent text-xs font-bold font-mono">
                        <CheckIcon className="w-4 h-4 shrink-0 text-accent" />
                        <span>0{idx + 1}. {item.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Code Snippet / Config Viewer with IDE styling */}
              <div className="mt-6 rounded-xl bg-surface border border-border overflow-hidden shadow-sm">
                <div className="px-4 py-2.5 bg-surface-muted/80 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="text-xs font-mono text-foreground font-semibold ml-2 flex items-center gap-1.5">
                      <CodeBracketIcon className="w-3.5 h-3.5 text-accent" />
                      {currentLayer.codeFileName}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      aria-label="Copiar snippet de código"
                    >
                      {copied ? '¡Copiado!' : 'Copiar'}
                    </button>
                    <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded font-bold">
                      {currentLayer.id === 'despliegue' ? 'Docker & Coolify' : currentLayer.id === 'backend' ? 'Node / Express' : 'React / TypeScript'}
                    </span>
                  </div>
                </div>
                <pre className="p-4 text-xs font-mono text-foreground/90 overflow-x-auto leading-relaxed bg-[#0B2421]/5 dark:bg-[#001715]/80">
                  <code>{currentLayer.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Student Specific Contribution Summary */}
          <div className="mt-8 pt-6 border-t border-border/60">
            <h5 className="text-xs font-mono font-bold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
              <ShieldCheckIcon className="w-4 h-4 text-accent" />
              Aportación Técnica Realizada:
            </h5>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Diseño integral de la solución end-to-end: arquitectura frontend en React 19 + TS, modelado de colecciones e índices en MongoDB,
              desarrollo de la API RESTful segura en Node.js, y aprovisionamiento de la infraestructura contenerizada con Docker en Coolify.
            </p>
          </div>
        </div>

        {/* Right: Problem Solved & Evidence of Impact Metrics (4 cols) */}
        <div className="lg:col-span-4 p-6 sm:p-8 md:p-10 bg-surface-muted/30 flex flex-col justify-between space-y-6">
          {/* Problem Solved Card */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              PROBLEMA QUE RESUELVE
            </span>
            <div className="p-5 rounded-2xl bg-surface border border-border shadow-2xs space-y-2.5">
              <h4 className="text-sm font-bold font-primary text-foreground">
                Autonomía institucional y gestión académica
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                La facultad dependía de procesos manuales e infraestructura dispersa para difundir el programa de posgrado.
                Esta plataforma centraliza inscripciones, programas curriculares y novedades con un CMS rápido, autónomo y sin costos recurrentes de licencias.
              </p>
            </div>
          </div>

          {/* Impact Metrics Grid */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-foreground uppercase tracking-widest flex items-center gap-1.5">
                <ChartBarIcon className="w-4 h-4 text-accent" />
                MÉTRICAS DE IMPACTO
              </span>
              <span className="text-[10px] font-mono text-accent-highlight bg-primary px-2.5 py-0.5 rounded-full font-bold shadow-2xs">
                AUDITADO
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {DOCTORADO_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="p-4 rounded-2xl bg-surface border border-border shadow-2xs flex flex-col justify-between hover:border-accent/40 transition-colors"
                >
                  <span className="text-[11px] text-muted-foreground font-medium">{metric.label}</span>
                  <div className="mt-1.5 mb-1">
                    <span className="text-2xl font-black font-primary text-accent tracking-tight">{metric.value}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">{metric.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UI Preview Card */}
          <div className="rounded-2xl overflow-hidden border border-border bg-surface relative group shadow-sm">
            <img
              src={doctoradoImg}
              alt="Vista previa de la interfaz del Doctorado en Geografía"
              className="w-full h-36 object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent flex items-end p-3.5">
              <div className="flex items-center justify-between w-full">
                <span className="text-xs font-mono text-foreground font-semibold flex items-center gap-1.5">
                  <GlobeAltIcon className="w-4 h-4 text-accent" />
                  doctoradogeografia.vercel.app
                </span>
                <span className="text-[10px] font-mono text-accent bg-accent/15 px-2 py-0.5 rounded font-bold">
                  PRODUCCIÓN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
