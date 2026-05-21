"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>{}[]#*";
const FRAMES = 20;
const FRAME_MS = 42;

type ScrambleTextProps = {
  text: string;
  className?: string;
};

/**
 * Decode-on-reveal effect — characters scramble through random glyphs,
 * then resolve left-to-right the first time the element scrolls into
 * view. SSR renders the final text (SEO-safe); reduced-motion skips it.
 */
export function ScrambleText({ text, className }: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || hasRun.current) return;
        hasRun.current = true;
        observer.disconnect();

        let frame = 0;
        function step() {
          frame += 1;
          const revealed = Math.floor((frame / FRAMES) * text.length);
          let out = "";
          for (let i = 0; i < text.length; i += 1) {
            const char = text[i] ?? "";
            if (i < revealed || char === " ") {
              out += char;
            } else {
              out += CHARS[Math.floor(Math.random() * CHARS.length)];
            }
          }
          setDisplay(out);
          if (frame < FRAMES) {
            window.setTimeout(step, FRAME_MS);
          } else {
            setDisplay(text);
          }
        }
        step();
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [text]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
