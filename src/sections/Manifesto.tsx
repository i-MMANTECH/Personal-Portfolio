import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/content/profile";

type Pillar = {
  id: string;
  symbol: string;
  heading: string;
  body: string;
};

const PILLARS: Pillar[] = [
  {
    id: "problem-first",
    symbol: "01",
    heading: "Problem first.",
    body: "I don't open an IDE until I understand the system boundary, the failure mode, and the non-negotiable constraint. The right solution is invisible — it's the one where the problem simply stops existing.",
  },
  {
    id: "systems-thinking",
    symbol: "02",
    heading: "Systems, not features.",
    body: "A feature is a UI decision. A system is a contract. Every API I design, every schema I model, every pipeline I ship is built to be extended by someone I haven't met yet — running load I haven't seen yet.",
  },
  {
    id: "ship-iterate",
    symbol: "03",
    heading: "Ship. Then improve.",
    body: "Production is the only environment that tells the truth. I bias toward shipping early and iterating fast — but I never ship without knowing exactly what I'll measure and what I'll fix first.",
  },
];

const TICKER_ITEMS = [
  "PRECISION",
  "OWNERSHIP",
  "VELOCITY",
  "CRAFT",
  "DISTRIBUTED SYSTEMS",
  "ZERO EXCUSES",
  "CLEAN ARCHITECTURE",
  "TRUTH IN METRICS",
  "DOMAIN-DRIVEN DESIGN",
  "PRODUCTION-GRADE",
  "GLOBAL TALENT",
  "LAGOS → WORLD",
];

/**
 * Manifesto — the "soul" section between Marquee and About.
 * Communicates who Emmanuel is beyond the spec sheet:
 * a confident, principled engineer with a clear philosophy.
 */
export function Manifesto() {
  return (
    <Section
      id="manifesto"
      label="// PHILOSOPHY"
      className="bg-ink text-paper border-ink"
      innerClassName=""
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        {/* Large statement */}
        <Reveal>
          <div className="mb-14 sm:mb-20">
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] text-paper/40 mb-6">
              {`// WHAT I BELIEVE`}
            </p>
            <h2 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-paper">
              I don&apos;t build
              <br />
              <span className="text-accent">features.</span>
              <br />I build systems.
            </h2>
          </div>
        </Reveal>

        {/* Manifesto quote */}
        <Reveal delay={100}>
          <blockquote className="mb-14 sm:mb-20 border-l-2 border-accent pl-6 max-w-3xl">
            {profile.manifesto.map((line, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-relaxed text-paper/70 mb-4 last:mb-0"
              >
                {line}
              </p>
            ))}
          </blockquote>
        </Reveal>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-paper/20 mb-14 sm:mb-20">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.id} delay={i * 80}>
              <div className="border-b md:border-b-0 md:border-r border-paper/20 last:border-0 p-6 sm:p-8 flex flex-col gap-4 group hover:bg-paper/5 transition-colors">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
                  {pillar.symbol}
                </span>
                <h3 className="font-mono text-lg sm:text-xl font-bold text-paper leading-tight">
                  {pillar.heading}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-paper/60">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Values ticker */}
        <Reveal delay={200}>
          <div className="border-t border-paper/20 pt-8 overflow-hidden">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {TICKER_ITEMS.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.35em] text-paper/30"
                >
                  {item}
                </span>
              ))}
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.35em] text-accent">
                ·
              </span>
              {TICKER_ITEMS.map((item) => (
                <span
                  key={`b-${item}`}
                  className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.35em] text-paper/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
