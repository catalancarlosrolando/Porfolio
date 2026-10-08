import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../components/Navbar';
import { ThemeProvider } from '../context/ThemeContext';

describe('Navbar', () => {
  const renderNavbar = (props = {}) => {
    return render(
      <ThemeProvider>
        <Navbar onContactClick={() => {}} {...props} />
      </ThemeProvider>
    );
  };

  it('renders brand as accessible anchor pointing to #top', () => {
    renderNavbar();

    const brand = screen.getByRole('link', { name: /carlos r\. catalan/i });
    expect(brand).toHaveAttribute('href', '#top');
  });

  it('renders desktop navigation with semantic nav, ul, and li elements (H-08/H-09 compliant)', () => {
    renderNavbar();

    const nav = screen.getByRole('navigation', { name: 'Navegación principal' });
    expect(nav).toBeInTheDocument();

    const list = nav.querySelector('ul');
    expect(list).toBeInTheDocument();

    const items = nav.querySelectorAll('li');
    expect(items.length).toBe(5);

    const aboutLink = screen.getByRole('link', { name: 'Sobre Mí' });
    expect(aboutLink).toHaveAttribute('href', '#sobre-mi');

    const projectLink = screen.getByRole('link', { name: 'Proyectos' });
    expect(projectLink).toHaveAttribute('href', '#proyectos');

    const skillsLink = screen.getByRole('link', { name: 'Stack Técnico' });
    expect(skillsLink).toHaveAttribute('href', '#skills');

    const timelineLink = screen.getByRole('link', { name: 'Experiencia' });
    expect(timelineLink).toHaveAttribute('href', '#trayectoria');

    const faqLink = screen.getByRole('link', { name: 'Preguntas Frecuentes' });
    expect(faqLink).toHaveAttribute('href', '#faq');
  });

  it('calls onContactClick when clicking Contactar button', () => {
    const handleContactClick = vi.fn();
    renderNavbar({ onContactClick: handleContactClick });

    const contactButtons = screen.getAllByRole('button', { name: /abrir formulario de contacto/i });
    expect(contactButtons.length).toBeGreaterThan(0);
  });
});
