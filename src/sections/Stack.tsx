import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { stack } from "@/content/stack";

/** Items in these groups get Mastery-tier treatment */
const MASTERY_ITEMS = new Set([
  "Django Ninja",
  "Next.js (App Router)",
  "TypeScript",
  "Python",
  "PHP",
  "Laravel",
  "PostgreSQL",
  "MySQL",
  "Docker",
]);

/** Items in these groups get Applied-tier treatment */
const APPLIED_ITEMS = new Set([
  "Scikit-learn",
  "TensorFlow",
  "OpenCV",
  "Pandas",
  "NumPy",
  "NLP",
  "Computer Vision",
  "Malware Analysis",
]);

function getTier(item: string) {
  if (MASTERY_ITEMS.has(item)) return "mastery";
  if (APPLIED_ITEMS.has(item)) return "applied";
  return "fluent";
}

/** Context lines shown as subtext in headers */
const GROUP_CONTEXT: Record<string, string> = {
  backend: "The core of everything I ship.",
  frontend: "Pixel-perfect to production.",
  data: "Relational, serverless, and in-memory.",
  infra: "Containerised, cloud-native, CI/CD-first.",
  "ai-ml": "Applied research that runs in production.",
  llm: "Agentic orchestration at every layer.",
};

export function Stack() {
  return (
    <Section
      id="stack"
      number="02."
      label="// STACK"
      title="Tools that ship my work."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {stack.map((group) => (
          <Reveal key={group.id} delay={60}>
            <div className="border border-ink h-full flex flex-col">
              <header className="border-b border-ink px-5 sm:px-6 py-4 bg-ink text-paper">
                <h3 className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em]">
                  {group.label}
                </h3>
                {GROUP_CONTEXT[group.id] && (
                  <p className="mt-1 font-mono text-[9px] sm:text-[10px] text-paper/40 uppercase tracking-[0.2em]">
                    {GROUP_CONTEXT[group.id]}
                  </p>
                )}
              </header>

              <ul className="px-5 sm:px-6 py-5 flex flex-wrap gap-2 flex-1">
                {group.items.map((item) => {
                  const tier = getTier(item);
                  return (
                    <li
                      key={item}
                      title={
                        tier === "mastery"
                          ? "Mastery — used daily in production"
                          : tier === "fluent"
                            ? "Fluent — shipped multiple projects"
                            : "Applied — research & ML pipelines"
                      }
                      className={[
                        "border px-3 py-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-wider transition-colors",
                        tier === "mastery"
                          ? "border-ink bg-ink text-paper"
                          : tier === "fluent"
                            ? "border-ink text-ink hover:bg-ink hover:text-paper"
                            : "border-ink/40 text-ink-mute hover:border-ink hover:text-ink",
                      ].join(" ")}
                    >
                      {tier === "mastery" && (
                        <span aria-hidden className="mr-1.5 text-accent">
                          ★
                        </span>
                      )}
                      {item}
                    </li>
                  );
                })}
              </ul>

              {/* Tier legend */}
              <footer className="border-t border-ink/20 px-5 sm:px-6 py-3 flex gap-5 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-mute">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 bg-ink shrink-0" />
                  Mastery
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 border border-ink shrink-0" />
                  Fluent
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 border border-ink/40 shrink-0" />
                  Applied
                </span>
              </footer>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
