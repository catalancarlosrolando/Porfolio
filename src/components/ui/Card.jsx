import { Button, PillInfo } from './Button';
import { Badge, BadgeComboCircle } from './Badge';
import { ArrowRightIcon, GlobeAltIcon, ShieldCheckIcon } from './Icons';
import doctoradoImg from '../../assets/doctorado.png';

/**
 * CardMediaTop component mapping m-card-media-top master
 */
export function CardMediaTop({
  image = doctoradoImg,
  title = 'Plataforma Doctorado Geografía (UNSJ)',
  description = 'Solución end-to-end con CMS personalizado en React/TypeScript, API RESTful en Node/Express, MongoDB y despliegue Coolify.',
  tags = [
    { label: 'FULL STACK', variant: 'frontend' },
    { label: 'MERN + TS', variant: 'frontend', showDot: true },
  ],
  onAction,
  onCodeClick,
  className = '',
}) {
  return (
    <div
      className={`overflow-hidden bg-surface border border-border rounded-[18px] flex flex-col transition-all duration-300 hover:border-accent hover:shadow-xl ${className}`}
    >
      {/* 16:9 Media Area */}
      <div className="w-full h-48 sm:h-52 bg-surface-muted border-b border-border/50 relative overflow-hidden group">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
            [ Project UI Preview • 16:9 ]
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-7 flex flex-col gap-3.5 flex-1 justify-between">
        <div className="space-y-3">
          {/* Tags row */}
          <div className="flex flex-wrap gap-2">
            {tags.map((t, idx) => (
              <Badge key={idx} variant={t.variant || 'frontend'} showDot={t.showDot}>
                {t.label}
              </Badge>
            ))}
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-primary text-foreground leading-snug">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Actions row */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button variant="primary" size="sm" onClick={onAction} showArrow>
            Ver Proyecto
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onCodeClick || (() => window.open('https://github.com/catalancarlosrolando', '_blank'))}
          >
            Código
          </Button>
        </div>
      </div>
    </div>
  );
}



