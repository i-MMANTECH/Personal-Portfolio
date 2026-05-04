"use client";

import { useEffect, useState } from "react";

const FORMATTER = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

/**
 * Live, ticking Lagos local time — small "I exist somewhere right now"
 * detail that signals a real human behind the portfolio. SSR-safe:
 * renders an invisible placeholder until the client hydrates so we
 * never ship mismatched time strings from the server.
 */
export function LiveTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    function tick() {
      setTime(FORMATTER.format(new Date()));
    }
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className="font-mono tabular-nums">
      <span suppressHydrationWarning>
        {time ?? "--:--:--"}
      </span>
      <span className="text-ink-mute"> · LAGOS</span>
    </span>
  );
}
