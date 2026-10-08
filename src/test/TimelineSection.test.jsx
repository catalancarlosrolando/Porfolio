import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TimelineSection } from '../components/TimelineSection';

describe('TimelineSection', () => {
  it('renders experience items by default', () => {
    render(<TimelineSection />);

    expect(screen.getByText(/desarrollador web full stack \(proyecto freelance\)/i)).toBeInTheDocument();
    expect(screen.getByText(/plataforma doctorado en geografía/i)).toBeInTheDocument();
  });

  it('switches tab to Formación Académica and updates items', () => {
    render(<TimelineSection />);

    const educationTab = screen.getByRole('button', { name: /formación académica/i });
    fireEvent.click(educationTab);

    expect(screen.getByText(/tecnicatura en programacion web/i)).toBeInTheDocument();
  });

  it('switches tab to Certificaciones IT and updates items', () => {
    render(<TimelineSection />);

    const certTab = screen.getByRole('button', { name: /certificaciones it/i });
    fireEvent.click(certTab);

    expect(screen.getByText(/experto universitario en hacking ético/i)).toBeInTheDocument();
    expect(screen.getByText(/cisco certified network associate/i)).toBeInTheDocument();
  });

  it('switches tab to Idiomas and displays language proficiencies', () => {
    render(<TimelineSection />);

    const langTab = screen.getByRole('button', { name: /idiomas/i });
    fireEvent.click(langTab);

    expect(screen.getByText(/español \(lengua materna\)/i)).toBeInTheDocument();
    expect(screen.getByText(/inglés técnico para ingeniería/i)).toBeInTheDocument();
  });
});
