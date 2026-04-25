"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  /** Delay in ms before this element starts to reveal. */
  delay?: number;
  /** Tailwind class string applied to the wrapping div. */
  className?: string;
  /** Override entrance distance — default `translate-y-4`. Pass empty string for fade-only. */
  translate?: string;
  /** Override duration class — default `duration-700`. */
  duration?: string;
};

/**
 * Subtle scroll-triggered fade + lift animation. Each instance fires once
 * when the element enters the viewport, then stays. Honors the user's
 * `prefers-reduced-motion` setting by skipping the animation entirely.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  translate = "translate-y-4",
  duration = "duration-700",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-[opacity,transform] ease-out will-change-[opacity,transform]",
        duration,
        shown ? "opacity-100 translate-y-0" : ["opacity-0", translate],
        className,
      )}
    >
      {children}
    </div>
  );
}
