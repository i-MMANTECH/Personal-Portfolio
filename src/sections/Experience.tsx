import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/content/experience";

/** One-line impact summary per company — the strongest bullet condensed. */
const IMPACT: Record<string, string> = {
  LunarTech:
    "Shipped Rosendahl (Legal AI), Dark Phoenix (GPU pipeline) & QA'd Octavia — db optimisation recommendations adopted team-wide for thousands of concurrent users.",
  "Boxonia Blueprint":
    "Built Boxonia's entire digital presence from zero — single-handedly brought a Nigerian 360° film production & talent studio fully online, from infrastructure to production launch.",
  "Tech4mation (NativeTalk)":
    "Shipped NativeTalk CRM end-to-end (frontend + backend) with PMs — reset company delivery velocity and formally awarded by leadership for customer impact.",
  "Ornament & Crime":
    "Rebuilt Shopify Plus storefront from scratch — 48% faster load time, 31% checkout conversion uplift, zero downtime migration.",
  "Bincom Dev Center":
    "Drove frontend performance gains (35% faster FCP) and database optimizations while mentoring the next wave of tech talent.",
  "Cyberbuddies.com":
    "Shipped production-ready frontend for an AI-powered Business Operating System™ at early stage — UI patterns became the foundation of the product's visual language.",
  "SafeSpace.org Association":
    "Automated review pipelines in Python/Django — 30% throughput gain, 50% fewer data errors.",
  "Fiatci.io":
    "The humble beginning — chosen to lead a 7-engineer team within months of joining, at a young age, through pure passion and dedication. Shipped the company's first ever commercial product.",
};

export function Experience() {
  return (
    <Section
      id="experience"
      number="03."
      label="// EXPERIENCE"
      title="The systems I've shipped."
    >
      <div className="relative">
        {/* Vertical timeline line */}
        <div
          aria-hidden
          className="absolute left-0 top-0 bottom-0 w-px bg-ink/15 hidden lg:block"
          style={{ left: "calc(25% - 1px)" }}
        />

        <ol>
          {experience.map((role, i) => (
            <Reveal key={`${role.company}-${role.period}`} delay={i * 60}>
              <li className="relative border-b border-ink py-10 md:py-12 last:border-b-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10">
                  {/* Left column — timeline + meta */}
                  <div className="lg:col-span-3 flex lg:flex-col gap-3 lg:gap-0 items-baseline lg:items-start">
                    {/* Timeline dot */}
                    <div
                      aria-hidden
                      className="absolute hidden lg:block h-2 w-2 bg-accent border border-ink"
                      style={{ left: "calc(25% - 5px)", top: "2.75rem" }}
                    />

                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute lg:mb-3">
                      {String(experience.length - i).padStart(2, "0")}
                    </p>
                    <div className="lg:mt-1 flex flex-col gap-0.5">
                      <p className="font-mono text-xs text-ink-soft">{role.period}</p>
                      <p className="font-mono text-xs text-ink-mute">{role.location}</p>
                      {role.current && (
                        <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-accent-deep">
                          <span
                            aria-hidden
                            className="h-1.5 w-1.5 bg-accent animate-pulse shrink-0"
                          />
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right column — content */}
                  <div className="lg:col-span-9">
                    <h3 className="font-mono text-xl md:text-2xl font-bold text-ink leading-tight flex items-center gap-2">
                      {role.url ? (
                        <a
                          href={role.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent-deep transition-colors underline decoration-ink-mute/30 underline-offset-4"
                        >
                          {role.company}
                        </a>
                      ) : (
                        role.company
                      )}
                    </h3>
                    <p className="mt-1 text-sm md:text-base text-ink-soft italic">
                      {role.title}
                    </p>

                    {/* Impact summary callout */}
                    {IMPACT[role.company] && (
                      <div className="mt-4 border-l-2 border-accent pl-4 py-1">
                        <p className="font-mono text-xs sm:text-sm text-ink-soft leading-relaxed">
                          <span className="text-accent-deep font-bold">Impact: </span>
                          {IMPACT[role.company]}
                        </p>
                      </div>
                    )}

                    <ul className="mt-5 space-y-2.5">
                      {role.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="relative pl-5 text-sm md:text-base text-ink-soft leading-relaxed"
                        >
                          <span
                            aria-hidden
                            className="absolute left-0 top-2.5 w-2.5 h-px bg-ink"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
