"use client";

import { useEffect, useState } from "react";

/**
 * Thin accent line pinned to the top edge that fills as the page is
 * scrolled. Scroll handler is rAF-throttled and passive for zero jank.
 */
export function ScrollProgress() {
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    let raf = 0;

    function measure() {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setRatio(scrollable > 0 ? window.scrollY / scrollable : 0);
    }

    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent"
    >
      <div
        className="h-full w-full origin-left bg-accent"
        style={{ transform: `scaleX(${ratio})` }}
      />
    </div>
  );
}
