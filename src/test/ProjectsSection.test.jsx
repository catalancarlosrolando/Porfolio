import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectsSection } from '../components/ProjectsSection';
import { DoctoradoProjectBreakdown } from '../components/ProjectTechnicalBreakdown';

describe('ProjectsSection Component', () => {
  it('renders section title, kicker, and featured projects', () => {
    render(<ProjectsSection />);

    expect(screen.getByText(/01 \/\/ PROYECTOS & SOLUCIONES END-TO-END/i)).toBeInTheDocument();
    expect(screen.getByText(/DESARROLLO(S)? DESTACADO(S)? & EVIDENCIA DE IMPACTO/i)).toBeInTheDocument();
    expect(screen.getByText(/Plataforma Doctorado en Geografía \(UNSJ\)/i)).toBeInTheDocument();
  });

  it('renders evidence of impact metrics and problem solved block', () => {
    render(<ProjectsSection />);

    expect(screen.getByText(/MÉTRICAS DE IMPACTO/i)).toBeInTheDocument();
    expect(screen.getAllByText(/PROBLEMA QUE RESUELVE/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/APORTACIÓN TÉCNICA REALIZADA/i)).toBeInTheDocument();
    expect(screen.getByText(/98\+/i)).toBeInTheDocument();
    expect(screen.getByText(/WCAG AA/i)).toBeInTheDocument();
  });

  it('switches between Frontend, Backend, and Despliegue tabs/layers interactively', async () => {
    const user = userEvent.setup();
    render(<DoctoradoProjectBreakdown onOpenDemo={() => { }} onOpenCode={() => { }} />);

    // Default tab is Frontend
    expect(screen.getByRole('tab', { name: /Frontend/i })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText(/React 19 \+ TypeScript/i)).toBeInTheDocument();

    // Switch to Backend tab
    const backendTab = screen.getByRole('tab', { name: /Backend/i });
    await user.click(backendTab);

    expect(backendTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText(/Node\.js \+ Express \+ Mongo/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Mongoose/i).length).toBeGreaterThanOrEqual(1);

    // Switch to Despliegue tab
    const deployTab = screen.getByRole('tab', { name: /Despliegue/i });
    await user.click(deployTab);

    expect(deployTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText(/Coolify \+ Docker \+ VPS/i)).toBeInTheDocument();
    expect(screen.getByText(/Continuous Deployment/i)).toBeInTheDocument();
  });

  it('calls onOpenDemo when "Ver Demo en Vivo" is clicked', async () => {
    const user = userEvent.setup();
    const handleDemo = vi.fn();

    render(<DoctoradoProjectBreakdown onOpenDemo={handleDemo} onOpenCode={() => { }} />);

    const demoBtn = screen.getByRole('button', { name: /ver demo en vivo/i });
    await user.click(demoBtn);

    expect(handleDemo).toHaveBeenCalledTimes(1);
  });
});
