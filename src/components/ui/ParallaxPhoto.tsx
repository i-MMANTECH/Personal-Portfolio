"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * The hero portrait. The frame's aspect ratio matches the source image
 * exactly (1828x2560), so `object-cover` shows the *entire* photo with
 * zero cropping. The scroll-linked parallax drifts the whole framed
 * block — never the image inside the frame — so nothing is ever clipped.
 * Disabled for reduced-motion users.
 */
export function ParallaxPhoto() {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;

    function update() {
      raf = 0;
      if (!outer || !inner) return;
      const rect = outer.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      const progress =
        (rect.top + rect.height / 2 - viewportH / 2) / viewportH;
      const shift = Math.max(-20, Math.min(20, progress * -20));
      inner.style.transform = `translate3d(0, ${shift}px, 0)`;
    }

    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
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
    <div ref={outerRef} className="w-full max-w-sm md:max-w-none mx-auto">
      <div ref={innerRef} className="relative will-change-transform">
        <div className="relative aspect-1828/2560 w-full border border-ink overflow-hidden bg-paper-mute">
          <Image
            src="/images/profile.jpg"
            alt="Emmanuel Aro — profile portrait"
            fill
            priority
            quality={95}
            sizes="(max-width: 768px) 80vw, (max-width: 1280px) 33vw, 400px"
            className="object-cover contrast-[1.04] saturate-[1.05]"
          />
        </div>
        <span
          aria-hidden
          className="absolute -bottom-px -right-px z-10 h-10 w-10 bg-accent border-l border-t border-ink"
        />
      </div>
    </div>
  );
}
