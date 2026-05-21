"use client";

import dynamic from "next/dynamic";

/**
 * Lazy, client-only mount for the WebGL hero canvas. Three.js can't
 * server-render anyway, so `ssr: false` is correct — and it keeps the
 * ~130KB Three.js payload out of the initial bundle, loading it as a
 * deferred chunk after the page is interactive.
 */
const HeroCanvas = dynamic(
  () => import("./HeroCanvas").then((m) => m.HeroCanvas),
  { ssr: false },
);

export function HeroCanvasLazy() {
  return <HeroCanvas />;
}
