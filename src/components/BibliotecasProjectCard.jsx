import { ArrowTopRightOnSquareIcon } from './ui/Icons';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

export function BibliotecasProjectCard({ onOpenProject }) {
    return (
        <article
            className="bg-surface border border-border rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md"
            aria-labelledby="project-bibliotecas-title"
        >
            <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <Badge variant="system" showDot>
                            INSTITUCIONAL
                        </Badge>
                        <Badge variant="frontend">WP CPT + JS</Badge>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground font-semibold">UNSJ • BIBLIOTECAS</span>
                </div>

                <h3
                    id="project-bibliotecas-title"
                    className="text-xl sm:text-2xl md:text-3xl font-bold font-primary text-foreground tracking-tight"
                >
                    Portal Institucional Bibliotecas UNSJ
                </h3>

                <div className="p-4 sm:p-5 rounded-2xl bg-surface-muted/60 border border-border space-y-2">
                    <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">PROBLEMA QUE RESUELVE:</span>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Centralización y acceso unificado a los acervos bibliográficos, repositorios y servicios de consulta para toda la comunidad universitaria de la UNSJ con alta velocidad en conexiones móviles lentas.
                    </p>
                </div>

                <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-foreground uppercase tracking-wider">APORTACIÓN TÉCNICA:</span>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Desarrollo de Child Theme a medida en HTML5 semántico, CSS3 modular y JS puro. Implementación de Custom Post Types y Taxonomías para categorización bibliográfica y optimización integral de accesibilidad.
                    </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-surface-muted/40 border border-border">
                        <span className="text-xs text-muted-foreground block font-medium">Accesibilidad</span>
                        <span className="text-xl font-bold font-primary text-accent">WCAG 2.1 AA</span>
                        <span className="text-[10px] text-muted-foreground block font-mono">100% Teclado</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-surface-muted/40 border border-border">
                        <span className="text-xs text-muted-foreground block font-medium">Consultas Activas</span>
                        <span className="text-xl font-bold font-primary text-accent">+5,000 / mes</span>
                        <span className="text-[10px] text-muted-foreground block font-mono">Red Universitaria</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-border/60 mt-6">
                <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onOpenProject?.('bibliotecas')}
                    aria-label="Abrir portal de Bibliotecas UNSJ (abre en pestaña nueva)"
                    showArrow
                >
                    Ver Portal
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    href="https://bibliotecas.unsj.edu.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visitar sitio web oficial de Bibliotecas UNSJ (abre en pestaña nueva)"
                >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-1.5" />
                    Sitio Oficial
                </Button>
            </div>
        </article>
    );
}
