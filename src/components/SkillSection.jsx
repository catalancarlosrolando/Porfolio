import { CardSkillMatrix } from './ui/CardSkill';
import { HeroPatternSection } from './ui/HeroPatternSection';
import { KickerBadge } from './ui/Badge';

export default function SkillSection(props) {
  return (
    <>
      <section id="skills" className="relative py-10 sm:py-16 bg-surface border-b border-border overflow-hidden">
        {/* Luminous Ambient Glow Orbs (shifting within palette tokens) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Glowing Orb 1: Cyprus Teal & Accent */}
          <div className="absolute -top-16 -left-16 w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full bg-accent/20 dark:bg-accent/30 blur-[90px] animate-ambient-1" />

          {/* Glowing Orb 2: Electric Lime / Luminous Turquoise Accent */}
          <div className="absolute -bottom-16 -right-16 w-72 sm:w-[380px] h-72 sm:h-[380px] rounded-full bg-badge-frontend-fg/25 dark:bg-accent-highlight/25 blur-[100px] animate-ambient-2" />
        </div>

        {/* Dynamic Color-Flowing Millimeter Grid */}
        <div
          className="absolute inset-0 z-0 pointer-events-none animate-grid-flow transition-colors duration-700"
          aria-hidden="true"
        >
          <HeroPatternSection />
        </div>

        {/* Subtle Scan-Wave */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="w-full h-32 bg-gradient-to-b from-transparent via-accent/10 dark:via-accent-highlight/15 to-transparent animate-scan" />
        </div>

        {/* Content Container (relative z-10 for high-contrast foreground) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-muted/95 backdrop-blur-xs border border-border/80 rounded-2xl p-6 sm:p-8 flex flex-col gap-8 shadow-lg transition-all duration-300 hover:border-accent/60">
            {/* Section Heading Bar */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <KickerBadge text="02 // HABILIDADES TÉCNICAS" className="mb-4" />
              </div>
            </div>

            {/* Skill Matrix Card */}
            <div>
              <CardSkillMatrix />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



