/**
 * TimelineItem component mapping the m-timeline-item master
 */

export function TimelineItem({
  title,
  date,
  subtitle,
  description,
  isLast = false,
  className = '',
}) {
  return (
    <div className={`flex items-stretch gap-5 sm:gap-7 w-full group ${className}`}>
      {/* Rail Column */}
      <div className="flex flex-col items-center shrink-0 w-6">
        {/* Node Dot with Glow */}
        <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-background border-[2.5px] border-accent-highlight mt-5 shadow-sm transition-transform group-hover:scale-110">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-highlight" />
        </div>
        {/* Rail Line */}
        {!isLast && (
          <div className="w-0.5 grow bg-accent/40 group-hover:bg-accent transition-colors mt-2" />
        )}
      </div>

      {/* Card Container */}
      <div className="grow bg-surface border border-border hover:border-accent/60 rounded-2xl p-5 sm:p-6 mb-6 transition-all shadow-sm hover:shadow-md">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <h4 className="text-base sm:text-lg font-extrabold text-foreground font-primary">
            {title}
          </h4>
          <span className="inline-flex items-center self-start sm:self-auto px-3 py-1 rounded-full bg-surface-muted border border-border text-xs font-mono font-bold text-accent-highlight">
            {date}
          </span>
        </div>

        {/* Institution / Role Tag */}
        {subtitle && (
          <p className="text-sm font-semibold text-accent-highlight mb-3">
            {subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
