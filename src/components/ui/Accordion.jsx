import { ChevronDownIcon } from './Icons';

/**
 * Native semantic Accordion using HTML5 <details> and <summary> (H-31 compliant)
 */
export function AccordionItem({ title, children, defaultOpen = false }) {
  return (
    <details
      open={defaultOpen}
      className="group border border-border rounded-xl overflow-hidden bg-surface transition-colors"
    >
      <summary className="w-full px-5 py-4 flex items-center justify-between text-left text-sm sm:text-base font-bold text-foreground hover:bg-surface-muted transition-colors cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
        <span>{title}</span>
        <ChevronDownIcon
          className="w-4 h-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180 group-open:text-accent-highlight"
        />
      </summary>
      <div className="px-5 pb-4 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/50">
        {children}
      </div>
    </details>
  );
}

export function Accordion({ items, className = '' }) {
  return (
    <div className={`flex flex-col gap-3 w-full ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id || item.title || index}
          title={item.title}
          defaultOpen={item.defaultOpen}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
