/**
 * Reusable Badge & Tag components matching design system tokens
 */

export function Badge({
  variant = 'frontend',
  showDot = false,
  dotColor = '',
  className = '',
  children,
  ...props
}) {
  const variantStyles = {
    frontend: 'bg-badge-frontend-bg text-badge-frontend-fg border-primary/40',
    backend: 'bg-badge-backend-bg text-badge-backend-fg border-border',
    accent: 'bg-accent-highlight text-background font-bold border-transparent',
    muted: 'bg-surface-muted text-muted-foreground border-border',
    success: 'bg-badge-frontend-bg text-primary border-primary',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium border ${variantStyles[variant] || variantStyles.frontend} ${className}`}
      {...props}
    >
      {showDot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotColor || (variant === 'frontend' ? 'bg-primary' : 'bg-accent-highlight')}`}
        />
      )}
      <span>{children}</span>
    </span>
  );
}

/**
 * ComboCircle Badge mapping m-badge-combo master
 */
export function BadgeComboCircle({ header = 'STACK', number = 'MERN', className = '' }) {
  return (
    <div
      className={`w-20 h-20 sm:w-[84px] sm:h-[84px] rounded-full bg-surface border-2 border-accent-highlight flex flex-col items-center justify-center select-none shadow-sm ${className}`}
    >
      <span className="text-[10px] sm:text-[11px] font-extrabold font-primary text-foreground tracking-wider leading-none">
        {header}
      </span>
      <span className="text-base sm:text-lg font-black font-primary text-accent-highlight leading-tight mt-0.5">
        {number}
      </span>
    </div>
  );
}

/**
 * Kicker Badge with glowing dot (e.g. "04 / 06 // TRAYECTORIA & FORMACIÓN")
 */
export function KickerBadge({ text, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 h-8 px-4 rounded-full bg-surface border border-border text-xs font-mono font-bold text-accent-highlight tracking-wider ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-accent-highlight" />
      <span>{text}</span>
    </div>
  );
}
