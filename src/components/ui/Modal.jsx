import { useEffect, useRef } from 'react';
import { XIcon } from './Icons';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

/**
 * Modal Dialog component mapping m-modal-dialog master
 * Features focus trap, Escape key dismissal, and accessible dialog semantics
 */
export function Modal({
  isOpen = false,
  onClose,
  title,
  subtitle,
  children,
  className = '',
}) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousActiveElement = useRef(null);

  useLockBodyScroll(isOpen);

  // Focus management & Escape listener
  useEffect(() => {
    if (!isOpen) return;

    previousActiveElement.current = document.activeElement;

    // Focus close button on open
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose?.();
        return;
      }

      if (e.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose?.();
        }
      }}
    >
      <div
        ref={dialogRef}
        className={`relative w-full max-w-lg bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-2xl transition-all ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-dialog-title"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 id="modal-dialog-title" className="text-xl font-extrabold text-foreground font-primary">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-1.5 rounded-full bg-surface-muted text-muted-foreground hover:text-foreground hover:bg-secondary transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
