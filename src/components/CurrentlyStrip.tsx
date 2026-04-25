import { Reveal } from "./ui/Reveal";

const ITEMS = [
  { label: "Shipping", value: "TaskForge Pro" },
  { label: "Researching", value: "Endpoint Security ML" },
  { label: "Open to", value: "Senior roles" },
] as const;

export function CurrentlyStrip() {
  return (
    <aside className="border-t border-b border-ink bg-paper-soft py-4 sm:py-5 px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline gap-x-8 gap-y-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em]">
            <span className="text-ink-mute">{"// CURRENTLY"}</span>
            {ITEMS.map((item) => (
              <span key={item.label}>
                <span className="text-ink-mute">{item.label} </span>
                <span className="text-accent-deep">→ </span>
                <span className="text-ink">{item.value}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </aside>
  );
}
