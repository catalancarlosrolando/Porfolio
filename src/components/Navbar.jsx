import { useState, useEffect, useCallback } from 'react';
import { Button, PillInfo } from './ui/Button';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon, XMarkIcon } from './ui/Icons';
import Link from './ui/Link';

export function Navbar({ onContactClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const { isDark, toggleTheme } = useTheme();



  const NAV_ITEMS = [
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'skills', label: 'Stack Técnico' },
    { id: 'trayectoria', label: 'Experiencia' },
    { id: 'faq', label: 'Preguntas Frecuentes' },
  ];

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Auto-close mobile menu on desktop viewport resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = useCallback((id) => {
    setMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  }, []);

  const handleBrandClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBrandKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleBrandClick();
    }
  };

  return (
    <>
      <header
        role="banner"
        className="sticky top-0 z-40 w-full bg-surface/90 backdrop-blur-md border-b border-border transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Ir al inicio de la página - Carlos R. Catalan"
            onClick={handleBrandClick}
            onKeyDown={handleBrandKeyDown}
            className="flex items-center gap-3 cursor-pointer group select-none min-w-0 shrink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1 -m-1"
          >
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
              <div className="w-2.5 h-2.5 rounded-full bg-accent-highlight" />
            </div>
            <span className="text-base sm:text-lg font-extrabold text-foreground font-primary tracking-wide transition-colors group-hover:text-accent truncate">
              CARLOS R. CATALAN
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8 shrink-0">
            {NAV_ITEMS.map((item) => (
              <Link
                className={active === item.id ? 'bg-secondary transition-all duration-300' : ''}
                key={item.id}
                label={item.label}
                variant="desktop"
                onClick={() => scrollToSection(item.id)}
              />
            ))}
          </nav>

          {/* Right CTA / Location & Theme Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <div aria-label="Ubicación: San Juan, Argentina" className="hidden lg:inline-flex shrink-0">
              <PillInfo label="San Juan ➔" value="ARGENTINA" />
            </div>

            {/* Theme Switch Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Activar tema claro' : 'Activar tema oscuro'}
              title={isDark ? 'Activar tema claro' : 'Activar tema oscuro'}
              className="p-2 rounded-full bg-surface-muted border border-border text-foreground hover:text-accent hover:border-accent transition-all cursor-pointer shadow-xs active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent shrink-0"
            >
              {isDark ? <SunIcon className="w-4 h-4 text-accent-highlight" /> : <MoonIcon className="w-4 h-4 text-primary" />}
            </button>

            <Button
              variant="primary"
              size="sm"
              onClick={onContactClick}
              aria-label="Abrir formulario de contacto"
              className="hidden sm:inline-flex shrink-0"
            >
              Contactar
            </Button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-xl bg-surface-muted text-foreground border border-border md:hidden hover:border-accent transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent shrink-0"
              aria-label={mobileMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-5 h-5 text-foreground" />
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Smooth Animation */}
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Navegación móvil"
            className="md:hidden bg-surface/98 backdrop-blur-lg border-b border-border px-5 py-5 space-y-3.5 shadow-xl animate-hero-status"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                className={active === item.id ? 'bg-secondary' : ''}
                key={item.id}
                label={item.label}
                variant="mobile"
                onClick={() => scrollToSection(item.id)}
              />
            ))}
            <div className="pt-2 border-t border-border/50">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                aria-label="Abrir formulario de contacto"
                className="w-full justify-center h-11"
              >
                Contactar
              </Button>
            </div>
          </nav>
        )}
      </header>

      {/* Backdrop for closing mobile menu by clicking outside */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 top-20 z-30 bg-black/40 backdrop-blur-[2px] md:hidden animate-hero-bg"
          aria-hidden="true"
        />
      )}
    </>
  );
}

