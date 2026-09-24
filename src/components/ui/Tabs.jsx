/**
 * Filter Tabs Bar matching m-tab-active and m-tab-inactive design system masters
 */

export function TabFilterItem({
  active = false,
  icon,
  label,
  onClick,
  className = '',
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer select-none ${
        active
          ? 'bg-surface text-accent-highlight border-2 border-accent-highlight shadow-sm font-semibold'
          : 'bg-surface-muted text-muted-foreground border border-border hover:text-foreground hover:bg-secondary'
      } ${className}`}
    >
      {icon && <span className="inline-flex items-center shrink-0">{icon}</span>}
      <span>{label}</span>
    </button>
  );
}

export function TabFilterBar({ tabs, activeTab, onChange, className = '' }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {tabs.map((tab) => (
        <TabFilterItem
          key={tab.id}
          active={activeTab === tab.id}
          icon={tab.icon}
          label={tab.label}
          onClick={() => onChange(tab.id)}
        />
      ))}
    </div>
  );
}
