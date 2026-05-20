"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const COUNT_MS = 1300;
const SAFETY_MS = 3000;

/**
 * Branded intro loader. Counts 000 → 100, then the ink panel slides up
 * and hands off by adding `loaded` to <html> — which is what triggers
 * the hero entrance (see `.hero-rise` in globals.css).
 *
 * Robustness:
 * - Reduced-motion users skip the animation but still get `loaded`.
 * - A hard safety timeout guarantees the page is never trapped.
 * - JS-disabled users never see it (a <noscript> rule hides `.preloader`).
 */
export function Preloader() {
  const [count, setCount] = useState(0);
  const [lifting, setLifting] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    function handOff() {
      root.classList.add("loaded");
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      handOff();
      setRemoved(true);
      return;
    }

    let raf = 0;
    let finished = false;
    const start = performance.now();

    function finish() {
      if (finished) return;
      finished = true;
      cancelAnimationFrame(raf);
      handOff();
      setCount(100);
      setLifting(true);
      window.setTimeout(() => setRemoved(true), 800);
    }

    function tick(now: number) {
      const progress = Math.min((now - start) / COUNT_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        finish();
      }
    }

    raf = requestAnimationFrame(tick);
    const safety = window.setTimeout(finish, SAFETY_MS);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(safety);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      aria-hidden
      className={cn(
        "preloader fixed inset-0 z-[100] flex items-end justify-between",
        "bg-ink text-paper px-6 sm:px-10 lg:px-16 py-8 sm:py-10",
        "transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]",
        lifting && "-translate-y-full",
      )}
    >
      <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] text-paper/45">
        Emmanuel Aro
        <span className="text-accent"> / Software Engineering Nerd</span>
      </span>
      <span className="font-mono text-[22vw] sm:text-[14vw] leading-[0.8] font-bold tabular-nums">
        {String(count).padStart(3, "0")}
      </span>
    </div>
  );
}
