import { ArrowRightIcon } from './Icons';

/**
 * Reusable Button component matching Cyprus & Sand design system masters
 * @param {object} props
 * @param {'primary' | 'secondary' | 'outline' | 'ghost'} [props.variant='primary']
 * @param {'sm' | 'md' | 'lg'} [props.size='md']
 * @param {boolean} [props.disabled=false]
 * @param {boolean} [props.showArrow=false]
 * @param {string} [props.className='']
 * @param {React.ReactNode} props.children
 */
export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  showArrow = false,
  className = '',
  children,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'h-9 px-4 text-xs gap-1.5',
    md: 'h-11 px-5 text-sm gap-2',
    lg: 'h-12 px-7 text-base gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-hover text-primary-foreground hover:text-primary-foreground shadow-sm hover:shadow-accent/20',
    secondary: 'bg-surface-muted hover:bg-secondary text-foreground border border-border',
    outline: 'bg-transparent hover:bg-surface text-foreground border border-border hover:border-accent',
    ghost: 'bg-transparent hover:bg-surface-muted text-foreground',
  };

  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showArrow && <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
}

/**
 * Pill Info component (m-btn-pill-info master)
 * e.g. "San Juan ➔ ARGENTINA" or "Tel ➔ 2645144094"
 */
export function PillInfo({ label, value, className = '', ...props }) {
  return (
    <div
      className={`inline-flex items-center gap-2 h-9 px-3.5 rounded-full bg-surface-muted border border-border text-xs font-mono text-foreground ${className}`}
      {...props}
    >
      <span className="text-muted-foreground">{label}</span>
      <span className="font-bold text-accent-highlight">{value}</span>
    </div>
  );
}
