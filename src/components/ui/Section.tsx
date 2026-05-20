import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";
import { ScrambleText } from "./ScrambleText";

type SectionProps = {
  id: string;
  /** Two-digit section index, e.g. `01.` */
  number?: string;
  label?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function Section({
  id,
  number,
  label,
  title,
  children,
  className,
  innerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-ink py-20 sm:py-24 md:py-28 lg:py-32 scroll-mt-16",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16",
          innerClassName,
        )}
      >
        {(label || title || number) && (
          <Reveal>
            <header className="mb-12 sm:mb-16">
              {(number || label) && (
                <div className="flex items-center gap-4 mb-4">
                  {number && (
                    <span className="font-mono text-xs sm:text-sm font-bold tracking-tight text-accent-deep">
                      {number}
                    </span>
                  )}
                  <span aria-hidden className="h-px flex-1 bg-ink/25" />
                  {label && (
                    <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] text-ink-mute">
                      {label}
                    </span>
                  )}
                </div>
              )}
              {title && (
                <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.05]">
                  <ScrambleText text={title} />
                </h2>
              )}
            </header>
          </Reveal>
        )}
        <Reveal delay={120}>{children}</Reveal>
      </div>
    </section>
  );
}
