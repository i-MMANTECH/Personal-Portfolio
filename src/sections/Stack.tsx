import { Section } from "@/components/ui/Section";
import { stack } from "@/content/stack";

export function Stack() {
  return (
    <Section
      id="stack"
      number="02."
      label="// STACK"
      title="Tools that ship the work."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {stack.map((group) => (
          <div key={group.id} className="border border-ink">
            <header className="border-b border-ink px-5 sm:px-6 py-3 sm:py-4 bg-ink text-paper">
              <h3 className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em]">
                {group.label}
              </h3>
            </header>
            <ul className="px-5 sm:px-6 py-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-ink px-3 py-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-wider text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
