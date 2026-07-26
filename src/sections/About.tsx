import { Section } from "@/components/ui/Section";
import { CountUp } from "@/components/ui/CountUp";
import { profile } from "@/content/profile";

type Stat = {
  label: string;
  headline: React.ReactNode;
  sub?: string;
};

export function About() {
  const stats: Stat[] = [
    {
      label: "Experience",
      headline: (
        <span className="font-mono text-2xl md:text-3xl font-bold text-ink">
          <CountUp value={5} suffix="+" />
        </span>
      ),
      sub: "Years in Full-Stack Engineering",
    },
    {
      label: "Education",
      headline: (
        <span className="font-mono text-base md:text-lg font-bold text-ink leading-tight">
          {profile.meta.educationPrimary}
        </span>
      ),
      sub: profile.meta.educationSecondary,
    },
    {
      label: "Currently",
      headline: (
        <span className="font-mono text-base md:text-lg font-bold text-ink leading-tight">
          Tech4mation
          <span className="text-ink-mute"> · </span>
          Nativetalk
        </span>
      ),
      sub: "Senior Software Developer, Platform Engineering",
    },
    {
      label: "Open to",
      headline: (
        <span className="font-mono text-base md:text-lg font-bold text-ink leading-tight">
          Senior <span className="text-accent-deep">/</span> Staff roles
        </span>
      ),
      sub: "Remote-friendly · Global teams",
    },
  ];

  return (
    <Section
      id="about"
      number="01."
      label="// ABOUT"
      title="A bit about me."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border border-ink p-5 sm:p-6 flex flex-col"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute mb-2">
              {stat.label}
            </p>
            <div className="mt-0.5">{stat.headline}</div>
            {stat.sub && (
              <p className="mt-1 text-sm text-ink-soft leading-snug">
                {stat.sub}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-3xl">
        {profile.bio.map((para, i) => (
          <p
            key={i}
            className="text-base md:text-lg leading-relaxed text-ink-soft mb-4 last:mb-0"
          >
            {para}
          </p>
        ))}
      </div>
    </Section>
  );
}