import { PillInfo, Button } from './ui/Button';

export function Footer({ onContactClick }) {
  return (
    <footer className="bg-surface-muted/95 border-t border-border py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-border">
          <div>
            <h3 className="text-xl sm:text-2xl font-black font-primary text-foreground mb-2 tracking-wide">
              CARLOS R. CATALAN
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
              Desarrollador Web Full Stack | Diseñador UX/UI | Administrador de Infraestructura IT (UNSJ / UTN FRBA).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <PillInfo label="Tel ➔" value="2645144094" />
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://linkedin.com/in/carlosrcatalan', '_blank')}
            >
              LinkedIn ➔
            </Button>
            <Button variant="primary" size="sm" onClick={onContactClick}>
              Escribir Email
            </Button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div>
            © 2026 Carlos R. Catalan • Cyprus & Sand Portfolio Design System
          </div>
          <div className="font-bold text-accent-highlight tracking-wider">
            UNSJ & UTN-FRBA • SAN JUAN, ARGENTINA
          </div>
        </div>
      </div>
    </footer>
  );
}
