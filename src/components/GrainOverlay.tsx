/**
 * Fixed, non-interactive film-grain texture. Pure CSS (see
 * `.grain-overlay` in globals.css) — no JS, no runtime cost.
 */
export function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden />;
}
