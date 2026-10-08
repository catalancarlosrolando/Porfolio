import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { HeroSection } from '../components/HeroSection';

describe('HeroSection', () => {
  it('renders exactly one single H1 element in the DOM (H-13 compliant)', () => {
    render(<HeroSection onProjectsClick={() => {}} onContactClick={() => {}} />);

    const headings = screen.getAllByRole('heading', { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent('CARLOS CATALAN');
    expect(headings[0]).toHaveTextContent('FULL STACK');
  });

  it('has section landmark with aria-labelledby referencing hero-title (H-10 compliant)', () => {
    const { container } = render(<HeroSection onProjectsClick={() => {}} onContactClick={() => {}} />);

    const section = container.querySelector('section');
    expect(section).toHaveAttribute('aria-labelledby', 'hero-title');

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toHaveAttribute('id', 'hero-title');
  });

  it('triggers onProjectsClick when clicking Explorar Proyectos button', () => {
    const handleProjectsClick = vi.fn();
    render(<HeroSection onProjectsClick={handleProjectsClick} onContactClick={() => {}} />);

    const button = screen.getByRole('button', { name: /explorar proyectos/i });
    fireEvent.click(button);

    expect(handleProjectsClick).toHaveBeenCalledTimes(1);
  });

  it('contains accessible external link to LinkedIn with rel="noopener noreferrer"', () => {
    render(<HeroSection onProjectsClick={() => {}} onContactClick={() => {}} />);

    const link = screen.getByRole('link', { name: /linkedin/i });
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/carlosrcatalan');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
