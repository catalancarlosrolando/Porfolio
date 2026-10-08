import { useState, useEffect, useCallback, useRef } from 'react';
import { SECTION_SCROLL_TARGETS } from '../data/chatQuickPrompts';

const STORAGE_KEY = 'portfolio_chat_history_v1';
const CHAT_ENDPOINT = 'https://chatportfolio-lake.vercel.app/api/chat';

const INITIAL_BOT_MESSAGE = {
  id: 'init-greeting',
  sender: 'bot',
  text: '¡Hola! 👋 Soy el asistente virtual del portfolio de Carlos Catalán. Puedo responder tus dudas sobre su stack fullstack (React, Node, MongoDB, Coolify), casos de estudio, formación en hacking ético o canales de contacto. ¿En qué puedo ayudarte?',
  timestamp: Date.now(),
};

export function useChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback on storage read error
    }
    return [INITIAL_BOT_MESSAGE];
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const lastUserMessageRef = useRef(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // Storage quota or privacy mode error
    }
  }, [messages]);

  // Attempt auto-scroll to cited sections if detected in bot response
  const handleSectionScroll = useCallback((replyText) => {
    if (!replyText || typeof replyText !== 'string') return;

    for (const [sectionTitle, elementId] of Object.entries(SECTION_SCROLL_TARGETS)) {
      if (replyText.includes(sectionTitle)) {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
      }
    }
  }, []);

  const sendMessage = useCallback(
    async (text) => {
      const trimmed = text?.trim();
      if (!trimmed || isLoading) return;

      const userMsg = {
        id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        sender: 'user',
        text: trimmed,
        timestamp: Date.now(),
      };

      lastUserMessageRef.current = trimmed;
      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(CHAT_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: trimmed }),
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.detail || errData.error || `HTTP ${response.status}: Error al procesar respuesta`);
        }

        const data = await response.json();
        const replyText = data.reply || 'No se recibió una respuesta válida.';

        const botMsg = {
          id: `bot-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          sender: 'bot',
          text: replyText,
          timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, botMsg]);
        handleSectionScroll(replyText);
      } catch (err) {
        const errorMessage = err?.message || 'Error de conexión con el servicio de IA.';
        setError(errorMessage);

        const botErrorMsg = {
          id: `bot-err-${Date.now()}`,
          sender: 'bot',
          text: 'Disculpa, ocurrió un problema de conexión al consultar el asistente. Puedes reintentar o comunicarte directamente con Carlos mediante el formulario de contacto.',
          timestamp: Date.now(),
          isError: true,
        };

        setMessages((prev) => [...prev, botErrorMsg]);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, handleSectionScroll]
  );

  const retryLastMessage = useCallback(() => {
    if (lastUserMessageRef.current) {
      sendMessage(lastUserMessageRef.current);
    }
  }, [sendMessage]);

  const clearHistory = useCallback(() => {
    setMessages([
      {
        ...INITIAL_BOT_MESSAGE,
        id: `init-greeting-${Date.now()}`,
        timestamp: Date.now(),
      },
    ]);
    setError(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
  }, []);

  return {
    isOpen,
    setIsOpen,
    messages,
    isLoading,
    error,
    sendMessage,
    retryLastMessage,
    clearHistory,
  };
}
