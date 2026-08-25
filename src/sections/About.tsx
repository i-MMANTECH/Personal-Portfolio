import { Section } from "@/components/ui/Section";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/content/profile";

type Stat = {
  label: string;
  headline: React.ReactNode;
  sub?: string;
  accent?: boolean;
};

export function About() {
  const stats: Stat[] = [
    {
      label: "Experience",
      headline: (
        <span className="font-mono text-2xl md:text-3xl font-bold text-ink">
          <CountUp value={profile.achievements.yearsExperience} suffix="+" />
        </span>
      ),
      sub: "Years in Full-Stack Engineering",
    },
    {
      label: "Repositories",
      headline: (
        <span className="font-mono text-2xl md:text-3xl font-bold text-ink">
          <CountUp value={profile.achievements.repos} suffix="+" />
        </span>
      ),
      sub: "Public GitHub repos",
    },
    {
      label: "Companies",
      headline: (
        <span className="font-mono text-2xl md:text-3xl font-bold text-ink">
          <CountUp value={profile.achievements.companies} suffix="+" />
        </span>
      ),
      sub: "Teams & organisations served",
    },
    {
      label: "Continents",
      headline: (
        <span className="font-mono text-2xl md:text-3xl font-bold text-ink">
          <CountUp value={profile.achievements.continents} />
        </span>
      ),
      sub: "Remote work across the globe",
    },
    {
      label: "Systems Shipped",
      headline: (
        <span className="font-mono text-2xl md:text-3xl font-bold text-ink">
          <CountUp value={profile.achievements.systemsShipped} suffix="+" />
        </span>
      ),
      sub: "Production systems delivered",
    },
    {
      label: "Uptime SLA",
      headline: (
        <span className="font-mono text-2xl md:text-3xl font-bold text-ink">
          {profile.achievements.uptimeSLA}
        </span>
      ),
      sub: "Track record in production",
      accent: true,
    },
  ];

  return (
    <Section
      id="about"
      number="01."
      label="// ABOUT"
      title="A bit about me."
    >
      {/* 6-column achievement stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 border border-ink mb-10 sm:mb-14">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`flex flex-col p-5 sm:p-6 border-r border-b border-ink last:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(6n)]:border-r-0 sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-child(3n)]:border-r lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r
            ${stat.accent ? "bg-accent/5" : ""}`}
          >
            <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-ink-mute mb-2">
              {stat.label}
            </p>
            <div className="mt-0.5">{stat.headline}</div>
            {stat.sub && (
              <p className="mt-1.5 text-xs text-ink-soft leading-snug">
                {stat.sub}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Bio with styled first words */}
      <div className="max-w-3xl">
        {profile.bio.map((para, i) => {
          const [firstWord, ...rest] = para.split(" ");
          return (
            <Reveal key={i} delay={i * 80}>
              <p className="text-base md:text-lg leading-relaxed text-ink-soft mb-5 last:mb-0">
                <span className="text-accent-deep font-bold">{firstWord} </span>
                {rest.join(" ")}
              </p>
            </Reveal>
          );
        })}

        {/* Currently building badge */}
        <Reveal delay={160}>
          <div className="mt-8 inline-flex items-center gap-3 border border-ink px-4 py-2.5">
            <span
              aria-hidden
              className="h-1.5 w-1.5 bg-accent animate-pulse shrink-0"
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute">
              Currently building
            </span>
            <span className="font-mono text-xs text-ink font-bold">
              Geod AI
              <span className="text-accent-deep"> · </span>
              Rosendahl @ LunarTech
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}