'use client';

import { skillComponents, heroConfig } from '@/config/Hero';

export default function FloatingSkills() {
  const skills = heroConfig.skills.slice(0, 4);

  return (
    <>
      {/* Left Sidebar - Hidden on mobile */}
      <div className="hidden lg:fixed lg:left-4 lg:top-1/2 lg:-translate-y-1/2 lg:z-0 lg:flex lg:flex-col lg:gap-4">
        {skills.map((skill, idx) => {
          const SkillIcon = skillComponents[skill.component as keyof typeof skillComponents];
          return (
            <div
              key={skill.name}
              className="animate-stagger-fade group relative flex flex-col items-center"
              style={{ animationDelay: `${(idx + 1) * 0.15}s` }}
            >
              {/* Skill Badge */}
              <div className="h-14 w-14 rounded-xl bg-linear-to-br from-secondary/20 via-accent/20 to-primary/20 border border-secondary/30 flex items-center justify-center shadow-lg hover:shadow-cyan-500/50 hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:from-secondary/40 hover:to-accent/40">
                <a
                  href={skill.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full text-2xl"
                  title={skill.name}
                >
                  {SkillIcon && <SkillIcon />}
                </a>
              </div>

              {/* Tooltip */}
              <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-secondary/90 text-background px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap backdrop-blur-sm">
                  {skill.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Sidebar - Hidden on mobile */}
      <div className="hidden lg:fixed lg:right-4 lg:top-1/2 lg:-translate-y-1/2 lg:z-0 lg:flex lg:flex-col lg:gap-4">
        {/* Stats or Quick Links could go here */}
        <div className="animate-stagger-fade text-center" style={{ animationDelay: '1.2s' }}>
          <div className="h-14 w-14 rounded-xl bg-linear-to-br from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 flex items-center justify-center shadow-lg hover:shadow-blue-500/50 hover:shadow-2xl transition-all duration-300 hover:scale-110">
            <a
              href="https://github.com/daamo31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl flex items-center justify-center w-full h-full"
              title="GitHub"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
