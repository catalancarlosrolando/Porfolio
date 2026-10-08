/**
 * InputGroup component mapping m-input-group master
 */

export function InputGroup({
  label,
  id,
  name,
  type = 'text',
  autoComplete,
  placeholder = '',
  value,
  onChange,
  required = false,
  error = '',
  helperText = '',
  className = '',
  ...props
}) {
  const inputId = id || (name ? `input-${name}` : (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined));

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label} {required && <span className="text-accent-highlight">*</span>}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full h-11 px-4 rounded-xl bg-surface-muted border border-border text-foreground placeholder-muted-foreground/60 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent focus:border-accent focus:ring-1 focus:ring-accent transition-all"
        {...props}
      />
      {helperText && !error && <span className="text-xs text-muted-foreground">{helperText}</span>}
      {error && <span className="text-xs text-rose-400 font-medium">{error}</span>}
    </div>
  );
}

export function TextareaGroup({
  label,
  id,
  name,
  rows = 4,
  autoComplete,
  placeholder = '',
  value,
  onChange,
  required = false,
  error = '',
  className = '',
  ...props
}) {
  const inputId = id || (name ? `textarea-${name}` : (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined));

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label} {required && <span className="text-accent-highlight">*</span>}
        </label>
      )}
      <textarea
        id={inputId}
        name={name}
        rows={rows}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-4 rounded-xl bg-surface-muted border border-border text-foreground placeholder-muted-foreground/60 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
        {...props}
      />
      {error && <span className="text-xs text-rose-400 font-medium">{error}</span>}
    </div>
  );
}
