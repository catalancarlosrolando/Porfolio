import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

function ThemeConsumer() {
  const { theme, toggleTheme, isDark } = useTheme();
  return (
    <div>
      <span data-testid="theme-value">{theme}</span>
      <span data-testid="is-dark-value">{String(isDark)}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  it('provides dark mode by default', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
    expect(screen.getByTestId('is-dark-value')).toHaveTextContent('true');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('toggles from dark to light and updates DOM classes and localStorage', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /toggle theme/i });
    fireEvent.click(button);

    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
    expect(screen.getByTestId('is-dark-value')).toHaveTextContent('false');
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');

    // Toggle back to dark
    fireEvent.click(button);
    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('initializes with theme saved in localStorage', () => {
    localStorage.setItem('theme', 'light');

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
    expect(document.documentElement.classList.contains('light')).toBe(true);
  });
});
