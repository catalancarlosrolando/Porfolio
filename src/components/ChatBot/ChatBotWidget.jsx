import { useState, useRef, useEffect } from 'react';
import { useChatBot } from '../../hooks/useChatBot';
import { CHAT_QUICK_PROMPTS } from '../../data/chatQuickPrompts';
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  TrashIcon,
  SparklesIcon,
  ArrowTopRightOnSquareIcon,
} from '../ui/Icons';

export function ChatBotWidget({ onOpenContact }) {
  const {
    isOpen,
    setIsOpen,
    messages,
    isLoading,
    sendMessage,
    retryLastMessage,
    clearHistory,
  } = useChatBot();

  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const launcherRef = useRef(null);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Focus management: move focus to input on open, return to launcher on close
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Global Escape key listener when chat is open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
        setTimeout(() => launcherRef.current?.focus(), 50);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  const handleToggle = () => {
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => launcherRef.current?.focus(), 50);
    } else {
      setIsOpen(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputMessage.trim();
    if (!trimmed || isLoading) return;

    sendMessage(trimmed);
    setInputMessage('');
  };

  const handleQuickPrompt = (query) => {
    if (isLoading) return;
    sendMessage(query);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end pointer-events-none">
      {/* Chat Window Panel */}
      {isOpen && (
        <section
          role="region"
          aria-label="Asistente virtual de Carlos Catalán"
          className="pointer-events-auto w-[calc(100vw-2.5rem)] sm:w-[400px] h-[540px] max-h-[calc(100vh-6rem)] bg-surface border border-border rounded-3xl shadow-2xl flex flex-col overflow-hidden mb-4 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
        >
          {/* Header */}
          <div className="px-5 py-4 bg-surface-muted/90 border-b border-border flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-xs">
                <SparklesIcon className="w-5 h-5 text-accent-highlight" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold font-primary text-foreground leading-tight">
                    Carlos Catalán AI
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="En línea" />
                </div>
                <p className="text-[11px] font-mono text-muted-foreground">
                  Asistente Virtual • Gemini AI
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={clearHistory}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface transition-colors cursor-pointer"
                title="Limpiar conversación"
                aria-label="Limpiar historial de conversación"
              >
                <TrashIcon className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleToggle}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface transition-colors cursor-pointer"
                aria-label="Cerrar asistente virtual"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Fallback Banner: Talk to Human */}
          <div className="px-4 py-2 bg-accent/10 border-b border-accent/20 flex items-center justify-between text-xs text-foreground shrink-0">
            <span className="text-[11px] text-muted-foreground">
              ¿Deseas enviar un mensaje directo?
            </span>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenContact?.();
              }}
              className="text-[11px] font-bold text-accent hover:underline flex items-center gap-1 cursor-pointer"
            >
              Contactar a Carlos
              <ArrowTopRightOnSquareIcon className="w-3 h-3" />
            </button>
          </div>

          {/* Message List (role="log" & aria-live="polite") */}
          <div
            role="log"
            aria-live="polite"
            aria-atomic="false"
            className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-background/50 text-sm"
          >
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl leading-relaxed text-xs sm:text-sm shadow-2xs ${
                      isUser
                        ? 'bg-primary text-primary-foreground rounded-br-xs font-medium'
                        : msg.isError
                        ? 'bg-red-500/10 border border-red-500/30 text-foreground rounded-bl-xs'
                        : 'bg-surface border border-border text-foreground rounded-bl-xs'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>

                  {msg.isError && (
                    <button
                      type="button"
                      onClick={retryLastMessage}
                      className="mt-1 text-[11px] font-mono text-accent hover:underline cursor-pointer"
                    >
                      ↻ Reintentar pregunta
                    </button>
                  )}

                  <span className="text-[10px] font-mono text-muted-foreground/70 mt-1 px-1">
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 text-muted-foreground text-xs p-2 bg-surface border border-border rounded-xl w-fit">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent motion-safe:animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent motion-safe:animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent motion-safe:animate-bounce [animation-delay:0.4s]" />
                </div>
                <span className="font-mono text-[11px]">Consultando a Carlos AI…</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="p-2.5 bg-surface-muted/50 border-t border-border/60 overflow-x-auto shrink-0 flex gap-1.5 scrollbar-none">
            {CHAT_QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt.id}
                type="button"
                onClick={() => handleQuickPrompt(prompt.query)}
                disabled={isLoading}
                className="text-[11px] px-2.5 py-1 rounded-full bg-surface border border-border text-foreground hover:border-accent hover:text-accent whitespace-nowrap transition-colors cursor-pointer disabled:opacity-50"
              >
                {prompt.label}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-surface border-t border-border flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Escribe tu pregunta aquí…"
              disabled={isLoading}
              aria-label="Mensaje para el asistente virtual"
              className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-surface-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />

            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              aria-label="Enviar mensaje"
              className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-hover disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs shrink-0"
            >
              <PaperAirplaneIcon className="w-4 h-4" />
            </button>
          </form>
        </section>
      )}

      {/* Floating Launcher Button */}
      <button
        ref={launcherRef}
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Cerrar asistente virtual' : 'Abrir asistente virtual del portfolio de Carlos Catalán'}
        className={`pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-accent ${
          isOpen
            ? 'bg-surface border border-border text-foreground rotate-90 scale-95'
            : 'bg-primary text-primary-foreground hover:bg-primary-hover hover:scale-105 shadow-accent/20'
        }`}
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <div className="relative">
            <ChatBubbleLeftRightIcon className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent border-2 border-primary" />
          </div>
        )}
      </button>
    </div>
  );
}
