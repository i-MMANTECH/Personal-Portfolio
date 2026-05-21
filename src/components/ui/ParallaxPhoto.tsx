"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * The hero portrait with a subtle scroll-linked parallax drift. The
 * image is scaled slightly larger than its frame so the drift never
 * exposes an edge. Disabled for reduced-motion users.
 */
export function ParallaxPhoto() {
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = innerRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;

    function update() {
      raf = 0;
      const frame = node?.parentElement;
      if (!frame || !node) return;
      const rect = frame.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      const progress =
        (rect.top + rect.height / 2 - viewportH / 2) / viewportH;
      const shift = Math.max(-28, Math.min(28, progress * -28));
      node.style.transform = `translate3d(0, ${shift}px, 0)`;
    }

    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-sm md:max-w-none mx-auto border border-ink overflow-hidden bg-paper-mute">
      <div ref={innerRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/profile.jpg"
          alt="Emmanuel Aro — profile portrait"
          fill
          priority
          quality={95}
          sizes="(max-width: 768px) 80vw, (max-width: 1280px) 33vw, 380px"
          className="object-cover object-[center_28%] contrast-[1.04] saturate-[1.05] scale-[1.12]"
        />
      </div>
      <span
        aria-hidden
        className="absolute -bottom-px -right-px z-10 h-10 w-10 bg-accent border-l border-t border-ink"
      />
    </div>
  );
}
