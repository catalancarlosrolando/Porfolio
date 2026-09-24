import { useEffect } from 'react';
import { XIcon } from './Icons';

/**
 * Modal Dialog mapping m-modal-dialog master
 */
export function Modal({
  isOpen = false,
  onClose,
  title,
  subtitle,
  children,
  className = '',
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className={`relative w-full max-w-lg bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-2xl transition-all ${className}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-extrabold text-foreground font-primary">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                {subtitle}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-1.5 rounded-full bg-surface-muted text-muted-foreground hover:text-foreground hover:bg-secondary transition-all cursor-pointer"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
