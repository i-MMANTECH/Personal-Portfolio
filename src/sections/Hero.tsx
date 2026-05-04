import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { profile } from "@/content/profile";

export function Hero() {
  const nameParts = profile.name.toUpperCase().split(" ");

  return (
    <section
      id="hero"
      className="relative flex items-center min-h-[calc(100dvh-4rem)] px-6 sm:px-10 lg:px-16 py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
        <Reveal
          delay={120}
          className="md:col-span-5 lg:col-span-4 order-1 md:order-2"
        >
          <div className="relative aspect-square w-full max-w-sm md:max-w-none mx-auto border border-ink overflow-hidden bg-paper-mute">
            <Image
              src="/images/profile.jpg"
              alt={`${profile.name} — profile portrait`}
              fill
              priority
              quality={95}
              sizes="(max-width: 768px) 80vw, (max-width: 1280px) 33vw, 380px"
              className="object-cover object-[center_28%] contrast-[1.04] saturate-[1.05]"
            />
            <span
              aria-hidden
              className="absolute -bottom-px -right-px h-10 w-10 bg-accent border-l border-t border-ink"
            />
          </div>
        </Reveal>

        <div className="md:col-span-7 lg:col-span-8 order-2 md:order-1">
          <p
            className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] text-ink-mute opacity-0"
            style={{ animation: "hero-reveal 800ms cubic-bezier(0.2,0.8,0.2,1) forwards" }}
          >
            {`// ${profile.location} · 09073318795`}
          </p>

          <h1 className="hero-stagger mt-6 font-mono text-[2.5rem] leading-[0.95] sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-ink">
            {nameParts.map((part, i) => (
              <span
                key={part}
                className="block"
                style={{ ["--reveal-delay" as string]: `${120 + i * 130}ms` }}
              >
                {part}
              </span>
            ))}
          </h1>

          <p
            className="mt-6 font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-ink-soft opacity-0"
            style={{
              animation: "hero-reveal 800ms cubic-bezier(0.2,0.8,0.2,1) forwards",
              animationDelay: "420ms",
            }}
          >
            Software Engineering{" "}
            <span className="text-accent-deep font-bold">Nerd</span>
            {" · "}
            {profile.focus.join(" · ")}
          </p>

          <p
            className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-ink-soft opacity-0"
            style={{
              animation: "hero-reveal 800ms cubic-bezier(0.2,0.8,0.2,1) forwards",
              animationDelay: "540ms",
            }}
          >
            {profile.tagline}
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0"
            style={{
              animation: "hero-reveal 800ms cubic-bezier(0.2,0.8,0.2,1) forwards",
              animationDelay: "660ms",
            }}
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
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] opacity-0"
            style={{
              animation: "hero-reveal 800ms cubic-bezier(0.2,0.8,0.2,1) forwards",
              animationDelay: "780ms",
            }}
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
      </div>
    </section>
  );
}
