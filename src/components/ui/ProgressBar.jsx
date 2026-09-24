export function ProgressBar({ label, percentage = 0, className = '' }) {
  return (
    <div className={`w-full flex flex-col gap-1.5 ${className}`}>
      {label && (
        <div className="flex justify-between text-xs font-mono">
          <span className="text-foreground font-semibold">{label}</span>
          <span className="text-accent-highlight">{percentage}%</span>
        </div>
      )}
      <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-accent-highlight rounded-full transition-all duration-500"
          style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
        />
      </div>
    </div>
  );
}
