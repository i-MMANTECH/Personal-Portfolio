const ITEMS: readonly string[] = [
  "Currently building → Geod AI — Sovereign AI Workspace",
  "Now in production → Rosendahl @ LunarTech",
  "Shipped → Dark Phoenix GPU Pipeline",
  "6+ years → Senior Full Stack Engineer",
  "Open to → Senior / Staff / Principal roles",
  "Based in → Lagos, NG · Remote-first · Global talent",
  "Stack → Django Ninja · Next.js · LangGraph · LlamaIndex · PostgreSQL",
  "65+ public repos → github.com/i-MMANTECH",
  "4 continents → Remote engineering experience",
  "99.9% uptime → Production SLA track record",
];

export function Marquee() {
  // Two copies of the items inside a track translated by -50%
  // give a seamless infinite loop.
  return (
    <aside
      role="marquee"
      aria-label="Currently shipping, building, and open to roles"
      className="relative overflow-hidden border-t border-b border-ink bg-paper-soft py-4 sm:py-5"
    >
      <div className="flex whitespace-nowrap animate-marquee will-change-transform">
        {[...Array(2)].map((_, copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex shrink-0 items-center"
          >
            {ITEMS.map((item) => (
              <li
                key={`${copy}-${item}`}
                className="flex items-center"
              >
                <span className="mx-5 sm:mx-7 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-ink-soft">
                  {item}
                </span>
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 bg-accent shrink-0"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}
