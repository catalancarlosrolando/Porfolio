import { useState } from 'react';
import { ChevronDownIcon } from './Icons';

export function AccordionItem({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-surface">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between text-left text-sm sm:text-base font-bold text-foreground hover:bg-surface-muted transition-colors cursor-pointer"
      >
        <span>{title}</span>
        <ChevronDownIcon
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-accent-highlight' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-4 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/50">
          {children}
        </div>
      )}
    </div>
  );
}

export function Accordion({ items, className = '' }) {
  return (
    <div className={`flex flex-col gap-3 w-full ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          defaultOpen={item.defaultOpen}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
