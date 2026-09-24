import { Button, PillInfo } from './Button';
import { Badge, BadgeComboCircle } from './Badge';

/**
 * CardBackgroundImage component mapping m-card-background-image master
 */
export function CardBackgroundImage({
  tag = 'UNSJ ➔',
  tagValue = '#004741',
  page = 'PAGE 04',
  title = 'PORTAL INSTITUCIONAL BIBLIOTECAS UNSJ',
  description = 'Desarrollo con child theme a medida en HTML5/JS puro, Custom Post Types y optimización para baja velocidad.',
  badges = [
    { label: 'ACCESIBILIDAD', showDot: true, dotColor: 'bg-accent-highlight' },
    { label: 'WORDPRESS CPT', showDot: true, dotColor: 'bg-primary' },
  ],
  onAction,
  className = '',
}) {
  return (
    <div
      onClick={onAction}
      className={`relative overflow-hidden bg-surface border border-border rounded-[18px] p-6 sm:p-7 flex flex-col justify-between min-h-[380px] sm:min-h-[440px] cursor-pointer transition-all duration-300 hover:border-accent hover:shadow-xl ${className}`}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between gap-4">
        <PillInfo label={tag} value={tagValue} />
        <span className="text-xs font-mono font-extrabold text-muted-foreground tracking-wider">
          {page}
        </span>
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col gap-3 pt-12">
        <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold font-primary text-foreground leading-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {badges.map((b, idx) => (
            <Badge key={idx} variant="frontend" showDot={b.showDot}>
              {b.label}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}