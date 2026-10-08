import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChatBotWidget } from '../components/ChatBot/ChatBotWidget';

// Mock scrollIntoView for jsdom
window.HTMLElement.prototype.scrollIntoView = vi.fn();

describe('ChatBotWidget Component', () => {
  const onOpenContactMock = vi.fn();

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders floating launcher button initially closed with correct accessibility attributes', () => {
    render(<ChatBotWidget onOpenContact={onOpenContactMock} />);

    const launcherBtn = screen.getByRole('button', {
      name: /abrir asistente virtual del portfolio de carlos catalán/i,
    });

    expect(launcherBtn).toBeInTheDocument();
    expect(launcherBtn).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('region', { name: /asistente virtual/i })).not.toBeInTheDocument();
  });

  it('opens chat window on click and displays initial greeting and quick prompts', async () => {
    const user = userEvent.setup();
    render(<ChatBotWidget onOpenContact={onOpenContactMock} />);

    const launcherBtn = screen.getByRole('button', {
      name: /abrir asistente virtual del portfolio de carlos catalán/i,
    });
    await user.click(launcherBtn);

    expect(screen.getByRole('region', { name: /asistente virtual de carlos catalán/i })).toBeInTheDocument();
    expect(screen.getByText(/¡Hola! 👋 Soy el asistente virtual/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /mensaje para el asistente virtual/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /stack tecnológico/i })).toBeInTheDocument();
  });

  it('sends user message and displays bot response on API success', async () => {
    const user = userEvent.setup();
    const fakeReply = 'Carlos trabaja principalmente con React, Node.js, MongoDB y Coolify.';

    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => ({ reply: fakeReply }),
    });

    render(<ChatBotWidget onOpenContact={onOpenContactMock} />);

    // Open chat
    const launcherBtn = screen.getByRole('button', {
      name: /abrir asistente virtual/i,
    });
    await user.click(launcherBtn);

    const input = screen.getByRole('textbox', { name: /mensaje para el asistente virtual/i });
    const sendBtn = screen.getByRole('button', { name: /enviar mensaje/i });

    await user.type(input, '¿Qué stack usas?');
    expect(input).toHaveValue('¿Qué stack usas?');

    await user.click(sendBtn);

    // User message should appear immediately
    expect(screen.getByText('¿Qué stack usas?')).toBeInTheDocument();
    expect(input).toHaveValue('');

    // Bot response should appear after fetch resolves
    await waitFor(() => {
      expect(screen.getByText(fakeReply)).toBeInTheDocument();
    });

    expect(globalThis.fetch).toHaveBeenCalledWith(
      'https://chatportfolio-lake.vercel.app/api/chat',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: '¿Qué stack usas?' }),
      })
    );
  });

  it('triggers message send when clicking a quick prompt chip', async () => {
    const user = userEvent.setup();
    const fakeReply = 'Carlos desarrolló la plataforma académica Doctorado en Geografía.';

    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => ({ reply: fakeReply }),
    });

    render(<ChatBotWidget onOpenContact={onOpenContactMock} />);

    await user.click(screen.getByRole('button', { name: /abrir asistente virtual/i }));

    const chip = screen.getByRole('button', { name: /proyecto doctorado/i });
    await user.click(chip);

    await waitFor(() => {
      expect(screen.getByText(fakeReply)).toBeInTheDocument();
    });
  });

  it('handles API error with error message and allows retry', async () => {
    const user = userEvent.setup();

    // First call fails
    vi.spyOn(globalThis, 'fetch')
      .mockRejectedValueOnce(new Error('Network error'))
      // Retry succeeds
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ reply: 'Respuesta recuperada exitosamente.' }),
      });

    render(<ChatBotWidget onOpenContact={onOpenContactMock} />);

    await user.click(screen.getByRole('button', { name: /abrir asistente virtual/i }));

    const input = screen.getByRole('textbox', { name: /mensaje para el asistente virtual/i });
    await user.type(input, 'Pregunta con fallo');
    await user.click(screen.getByRole('button', { name: /enviar mensaje/i }));

    await waitFor(() => {
      expect(screen.getByText(/ocurrió un problema de conexión/i)).toBeInTheDocument();
    });

    const retryBtn = screen.getByRole('button', { name: /reintentar pregunta/i });
    expect(retryBtn).toBeInTheDocument();

    await user.click(retryBtn);

    await waitFor(() => {
      expect(screen.getByText('Respuesta recuperada exitosamente.')).toBeInTheDocument();
    });
  });

  it('clears conversation history when clicking clear button', async () => {
    const user = userEvent.setup();
    render(<ChatBotWidget onOpenContact={onOpenContactMock} />);

    await user.click(screen.getByRole('button', { name: /abrir asistente virtual/i }));

    const clearBtn = screen.getByRole('button', { name: /limpiar historial de conversación/i });
    await user.click(clearBtn);

    expect(screen.getByText(/¡Hola! 👋 Soy el asistente virtual/i)).toBeInTheDocument();
    expect(localStorage.getItem('portfolio_chat_history_v1')).toContain('init-greeting');
  });

  it('closes dialog on Escape key', async () => {
    const user = userEvent.setup();
    render(<ChatBotWidget onOpenContact={onOpenContactMock} />);

    const launcherBtn = screen.getByRole('button', { name: /abrir asistente virtual/i });
    await user.click(launcherBtn);

    expect(screen.getByRole('region', { name: /asistente virtual/i })).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'Escape' });

    expect(screen.queryByRole('region', { name: /asistente virtual/i })).not.toBeInTheDocument();
  });

  it('invokes onOpenContact and closes chatbot when clicking contact fallback button', async () => {
    const user = userEvent.setup();
    render(<ChatBotWidget onOpenContact={onOpenContactMock} />);

    await user.click(screen.getByRole('button', { name: /abrir asistente virtual/i }));

    const contactBtn = screen.getByRole('button', { name: /contactar a carlos/i });
    await user.click(contactBtn);

    expect(onOpenContactMock).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('region', { name: /asistente virtual/i })).not.toBeInTheDocument();
  });
});
