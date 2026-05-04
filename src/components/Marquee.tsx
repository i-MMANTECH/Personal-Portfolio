const ITEMS: readonly string[] = [
  "Currently shipping → TaskForge Pro",
  "Now in production → Nativetalk Ticketing",
  "Currently shipping → Boxonia Blueprint",
  "Researching → Endpoint security ML",
  "Researching → NLP pipelines",
  "Open to → Senior engineering roles",
  "Based in → Lagos, Nigeria",
  "Stack → Django Ninja · Next.js · TypeScript · PostgreSQL · Docker",
];

export function Marquee() {
  // Two copies of the items inside a track translated by -50%
  // give a seamless infinite loop.
  return (
    <aside
      role="marquee"
      aria-label="Currently shipping, researching, and open to roles"
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
