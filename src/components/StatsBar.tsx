"use client";

import { profile } from "@/content/profile";
import { CountUp } from "@/components/ui/CountUp";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const STATS: Stat[] = [
  { value: profile.achievements.repos, suffix: "+", label: "Public Repos" },
  { value: profile.achievements.yearsExperience, suffix: "+", label: "Years in Stack" },
  { value: profile.achievements.companies, suffix: "+", label: "Companies Served" },
  { value: profile.achievements.continents, suffix: "", label: "Continents" },
  { value: profile.achievements.systemsShipped, suffix: "+", label: "Production Systems" },
];

/**
 * Full-width horizontal stats band between the Hero and the Marquee.
 * Animates CountUp on mount. Gives recruiters instant quantified signal.
 */
export function StatsBar() {
  return (
    <aside
      aria-label="Engineering achievements"
      className="border-t border-b border-ink bg-paper-soft overflow-x-auto"
    >
      <dl className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 flex divide-x divide-ink/20">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex-1 min-w-[120px] flex flex-col items-center justify-center py-5 sm:py-6 px-3 sm:px-4 gap-1"
          >
            <dt className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-ink-mute order-2">
              {stat.label}
            </dt>
            <dd className="font-mono text-2xl sm:text-3xl font-bold text-ink tabular-nums order-1">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
