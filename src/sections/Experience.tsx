import { Section } from "@/components/ui/Section";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      number="03."
      label="// EXPERIENCE"
      title="The systems I've shipped."
    >
      <ol className="border-t border-ink">
        {experience.map((role, i) => (
          <li
            key={`${role.company}-${role.period}`}
            className="border-b border-ink py-8 md:py-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
              <div className="md:col-span-4 lg:col-span-3 flex md:block items-baseline gap-3 md:gap-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute md:mb-3">
                  {String(experience.length - i).padStart(2, "0")}
                </p>
                <div className="md:mt-1">
                  <p className="font-mono text-xs text-ink-soft">
                    {role.period}
                  </p>
                  <p className="font-mono text-xs text-ink-mute">
                    {role.location}
                  </p>
                </div>
              </div>

              <div className="md:col-span-8 lg:col-span-9">
                <h3 className="font-mono text-xl md:text-2xl font-bold text-ink leading-tight">
                  {role.company}
                </h3>
                <p className="mt-1 text-base md:text-lg text-ink-soft italic">
                  {role.title}
                </p>
                <ul className="mt-4 space-y-2.5">
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
        ))}
      </ol>
    </Section>
  );
}
