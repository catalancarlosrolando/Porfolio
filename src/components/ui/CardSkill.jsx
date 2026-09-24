import { GlobeAltIcon, ShieldCheckIcon } from './Icons';
import { Badge, BadgeComboCircle } from './Badge';


/**
 * CardSkillMatrix component mapping m-card-skill-matrix master
 */
export function CardSkillMatrix({ className = '' }) {
    return (
        <div className={`bg-surface border border-border rounded-[18px] p-6 sm:p-8 flex flex-col gap-5 ${className}`}>
            {/* Header Row */}
            <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-foreground font-primary">
                    Fullstack & Infra Matrix (Carlos Catalan)
                </h3>
                <BadgeComboCircle header="STACK" number="MERN" />
            </div>

            {/* Columns Frame */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Frontend & Dev Col */}
                <div className="p-4 sm:p-5 rounded-xl bg-badge-frontend-bg border border-border/50 flex flex-col gap-2">
                    <div className="text-xs sm:text-sm font-bold text-accent-highlight flex items-center gap-2">
                        <GlobeAltIcon className="w-4 h-4 text-accent-highlight" />
                        <span>FULL STACK & DEV</span>
                    </div>
                    <div className="text-xs sm:text-sm text-foreground space-y-1 leading-relaxed">
                        <p>• React · TypeScript · Node.js</p>
                        <p>• .NET · C# · ASP.NET Core</p>
                        <p>• PHP · Laravel · Python · Flask</p>
                        <p>• Express · RESTful APIs · MongoDB</p>
                        <p>• Flutter · Cross-platform Development</p>
                        <p>• Git · GitHub</p>
                    </div>
                </div>

                {/* Backend & Databases Col */}
                <div className="p-4 sm:p-5 rounded-xl bg-badge-backend-bg border border-border/50 flex flex-col gap-2">
                    <div className="text-xs sm:text-sm font-bold text-accent-highlight flex items-center gap-2">
                        <ShieldCheckIcon className="w-4 h-4 text-accent-highlight" />
                        <span>BACKEND & DATABASES</span>
                    </div>
                    <div className="text-xs sm:text-sm text-foreground space-y-1 leading-relaxed">
                        <p>• Firebase · Backend Development</p>
                        <p>• SQL · PostgreSQL · MongoDB</p>
                        <p>• REST APIs · JWT · Authentication</p>
                        <p>• Database Design · Data Modeling</p>
                    </div>
                </div>
            </div>
            {/* Columns Frame */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Infra & Devops */}
                <div className="p-4 sm:p-5 rounded-xl bg-badge-frontend-bg border border-border/50 flex flex-col gap-2">
                    <div className="text-xs sm:text-sm font-bold text-accent-highlight flex items-center gap-2">
                        <GlobeAltIcon className="w-4 h-4 text-accent-highlight" />
                        <span>INFRA & DEVOPS</span>
                    </div>
                    <div className="text-xs sm:text-sm text-foreground space-y-1 leading-relaxed">
                        <p>• Docker · Coolify · Railway</p>
                        <p>• CI/CD · Backend Deployment</p>
                        <p>• Linux & Windows Server</p>
                        <p>• Cisco Routing · DNS/DHCP</p>
                        <p>• Server Administration · Networking</p>
                    </div>
                </div>

                {/* SECURITY Col */}
                <div className="p-4 sm:p-5 rounded-xl bg-badge-backend-bg border border-border/50 flex flex-col gap-2">
                    <div className="text-xs sm:text-sm font-bold text-accent-highlight flex items-center gap-2">
                        <ShieldCheckIcon className="w-4 h-4 text-accent-highlight" />
                        <span>SECURITY</span>
                    </div>
                    <div className="text-xs sm:text-sm text-foreground space-y-1 leading-relaxed">
                        <p>• Ethical Hacking (UTN 2025)</p>
                        <p>• API & Web Security</p>
                        <p>• Authentication · Authorization · JWT</p>
                        <p>• Data Security · Network Security</p>
                        <p>• Compliance · Privacy Standards</p>
                    </div>
                </div>
            </div>
        </div>
    );
}