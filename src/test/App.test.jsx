import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Root Component', () => {
  it('renders skip link targeting #contenido (H-51 compliant)', () => {
    render(<App />);

    const skipLink = screen.getByRole('link', { name: /saltar al contenido principal/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#contenido');
  });

  it('renders main landmark with id="contenido"', () => {
    const { container } = render(<App />);

    const main = container.querySelector('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute('id', 'contenido');
  });

  it('renders all primary portfolio sections', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/01 \/\/ ACERCA DE MÍ & FILOSOFÍA/i)).toBeInTheDocument();
    expect(screen.getByText(/01 \/\/ PROYECTOS & SOLUCIONES END-TO-END/i)).toBeInTheDocument();
    expect(screen.getByText(/02 \/\/ HABILIDADES TÉCNICAS/i)).toBeInTheDocument();
    expect(screen.getByText(/03 \/\/ TRAYECTORIA & FORMACIÓN/i)).toBeInTheDocument();
    expect(screen.getByText(/CONSULTAS TÉCNICAS FRECUENTES/i)).toBeInTheDocument();
  });
});
