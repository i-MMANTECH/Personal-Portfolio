"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/cn";

type MagneticButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  /** Magnet pull strength (0–1). Higher = stronger pull. Default 0.28 */
  strength?: number;
};

/**
 * Anchor that gently translates toward the cursor on hover, then settles
 * back when the cursor leaves. Pure transform-based (GPU-cheap), and
 * automatically disabled for users who prefer reduced motion.
 */
export function MagneticButton({
  children,
  href,
  className,
  download,
  target,
  rel,
  strength = 0.28,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    const node = ref.current;
    if (!node) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const rect = node.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    node.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }

  function handleLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "";
  }

  return (
    <a
      ref={ref}
      href={href}
      download={download}
      target={target}
      rel={rel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-transform duration-200 ease-out motion-reduce:transition-none",
        className,
      )}
    >
      {children}
    </a>
  );
}
