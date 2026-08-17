import { MagneticButton } from "@/components/ui/MagneticButton";
import { MouseTilt } from "@/components/ui/MouseTilt";
import { HeroCanvasLazy } from "@/components/HeroCanvasLazy";
import { profile } from "@/content/profile";

/** Per-element entrance delay (ms) — applied once the preloader adds
 *  `loaded` to <html>. See `.hero-rise` in globals.css. */
function delay(ms: number): React.CSSProperties {
  return { ["--reveal-delay" as string]: `${ms}ms` };
}

const SPEC_ROWS = [
  { key: "Repos", value: "65+ public" },
  { key: "Years", value: "5+ in stack" },
  { key: "Stack", value: "Django Ninja · Next.js · TS" },
  { key: "Now", value: "Geod AI · LunarTech" },
  { key: "Open to", value: "Senior engineering roles" },
  { key: "Based", value: "Lagos, NG (Global Remote)" },
] as const;

export function Hero() {
  const nameParts = profile.name.toUpperCase().split(" ");

  return (
    <section
      id="hero"
      className="relative flex items-center min-h-[calc(100dvh-4rem)] overflow-hidden px-6 sm:px-10 lg:px-16 py-20 sm:py-24 md:py-28"
    >
      <HeroCanvasLazy />
      <MouseTilt className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="md:col-span-7 lg:col-span-8 order-1">
            <p
              className="hero-rise font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] text-ink-mute"
              style={delay(0)}
            >
              {`// ${profile.location} · 09073318795`}
            </p>

            <h1 className="mt-6 font-mono text-[2.75rem] leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] font-bold tracking-tight text-ink">
              {nameParts.map((part, i) => (
                <span
                  key={part}
                  className="hero-rise block"
                  style={delay(90 + i * 110)}
                >
                  {part}
                </span>
              ))}
            </h1>

            <p
              className="hero-rise mt-6 font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-ink-soft"
              style={delay(320)}
            >
              Software Engineering{" "}
              <span className="text-accent-deep font-bold">Nerd</span>
              {" · "}
              {profile.focus.join(" · ")}
            </p>

            <p
              className="hero-rise mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-ink-soft"
              style={delay(430)}
            >
              {profile.tagline}
            </p>

            <div
              className="hero-rise mt-10 flex flex-col sm:flex-row gap-4"
              style={delay(540)}
            >
              <MagneticButton
                href={profile.cvPath}
                download
                className="bg-accent text-ink border border-accent font-mono text-xs uppercase tracking-widest font-bold px-6 py-4 hover:bg-ink hover:text-accent hover:border-ink"
                strength={0.32}
              >
                Download CV <span aria-hidden>→</span>
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="border border-ink text-ink font-mono text-xs uppercase tracking-widest px-6 py-4 hover:bg-ink hover:text-paper"
                strength={0.22}
              >
                Get in touch <span aria-hidden>→</span>
              </MagneticButton>
            </div>

            <div
              className="hero-rise mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em]"
              style={delay(650)}
            >
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="text-ink-mute hover:text-ink underline-offset-4 hover:underline transition-colors"
              >
                GitHub
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-ink-mute hover:text-ink underline-offset-4 hover:underline transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={profile.social.x}
                target="_blank"
                rel="noreferrer"
                className="text-ink-mute hover:text-ink underline-offset-4 hover:underline transition-colors"
              >
                X / Twitter
              </a>
            </div>
          </div>

          {/*
           * Spec sheet — replaces the profile photo. Engineering-grade
           * data card: key/value rows with a live status indicator. The
           * lime corner mark mirrors the photo frame it replaced.
           */}
          <div
            className="hero-rise md:col-span-5 lg:col-span-4 order-2"
            style={delay(220)}
          >
            <div className="relative border border-ink bg-paper/85 supports-backdrop-filter:backdrop-blur-sm">
              <header className="flex items-center justify-between border-b border-ink px-4 py-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute">
                  {"// SPEC.SHEET"}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-accent-deep">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 bg-accent animate-pulse"
                  />
                  Active
                </span>
              </header>

              <dl className="divide-y divide-ink/15">
                {SPEC_ROWS.map((row) => (
                  <div
                    key={row.key}
                    className="grid grid-cols-[76px_1fr] gap-3 px-4 py-3"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-mute pt-0.5">
                      {row.key}
                    </dt>
                    <dd className="font-mono text-xs sm:text-sm text-ink leading-snug break-words">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <span
                aria-hidden
                className="absolute -bottom-px -right-px h-8 w-8 bg-accent border-l border-t border-ink"
              />
            </div>
          </div>
        </div>
      </MouseTilt>
    </section>
  );
}