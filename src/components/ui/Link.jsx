/**
 * Reusable Nav Link component matching Cyprus & Sand design system
 * @param {object} props
 * @param {'desktop' | 'mobile'} [props.variant='desktop']
 * @param {boolean} [props.isActive=false]
 * @param {string} [props.label='']
 * @param {function} [props.onClick]
 * @param {string} [props.className='']
 * @param {React.ReactNode} [props.children]
 */
export default function Link({
  variant = 'desktop',
  label = '',
  onClick,
  className = '',
  children,
  ...props
}) {

  const variantStyles = {
    desktop: 'text-sm font-semibold text-foreground hover:text-accent transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full px-3.5',
    mobile: 'block w-full text-left py-2.5 px-3.5 rounded-xl text-sm transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',

  };
  const selectedStyles = variantStyles[variant];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${selectedStyles} ${className}`}
      {...props}
    >
      {label || children}
    </button>
  );
}

