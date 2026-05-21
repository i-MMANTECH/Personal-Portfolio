"use client";

import { useEffect } from "react";

/**
 * Styled console greeting — a small delight for the engineers and
 * recruiters who open devtools. Renders nothing to the DOM.
 */
export function ConsoleSignature() {
  useEffect(() => {
    const heading = "color:#a6f500;font:700 14px monospace;padding:2px 0";
    const body = "color:#8c8c92;font:400 12px/1.6 monospace";
    const link =
      "color:#0b0b0c;background:#a6f500;font:700 12px monospace;padding:2px 6px";

    console.log("%c// EMMANUEL ARO — SOFTWARE ENGINEERING NERD", heading);
    console.log(
      "%cYou opened the console. Respect — that's the engineer move.\n" +
        "I build systems, not features. If your team needs that, let's talk.",
      body,
    );
    console.log("%c emmanuelaro87@gmail.com ", link);
    console.log("%cGitHub → https://github.com/i-MMANTECH", body);
  }, []);

  return null;
}
