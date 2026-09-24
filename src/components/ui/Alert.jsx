import { CheckIcon } from './Icons';

export function Alert({
  variant = 'info',
  title,
  children,
  className = '',
}) {
  const styles = {
    info: 'bg-badge-frontend-bg border-accent text-badge-frontend-fg',
    success: 'bg-primary border-accent text-foreground',
    warning: 'bg-secondary border-accent-highlight/50 text-accent-highlight',
  };

  return (
    <div className={`flex items-start gap-3 p-4 rounded-xl border ${styles[variant] || styles.info} ${className}`}>
      <div className="w-5 h-5 rounded-full bg-current/20 flex items-center justify-center shrink-0 mt-0.5">
        <CheckIcon className="w-3.5 h-3.5 text-current" />
      </div>
      <div className="text-sm">
        {title && <div className="font-bold mb-0.5">{title}</div>}
        <div className="opacity-90">{children}</div>
      </div>
    </div>
  );
}
