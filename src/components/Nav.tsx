"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { id: "about", href: "#about", label: "About" },
  { id: "stack", href: "#stack", label: "Stack" },
  { id: "experience", href: "#experience", label: "Experience" },
  { id: "work", href: "#work", label: "Work" },
  { id: "contact", href: "#contact", label: "Contact" },
] as const;

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const top = visible.reduce((a, b) =>
          b.intersectionRatio > a.intersectionRatio ? b : a,
        );
        if (top.target.id) setActive(top.target.id);
      },
      {
        threshold: [0.2, 0.5, 0.8],
        rootMargin: "-25% 0px -50% 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper/95 backdrop-blur supports-backdrop-filter:bg-paper/80">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-tight text-ink"
        >
          EMMANUEL_ARO
          <span className="text-ink-mute">_/&gt;</span>
          <span className="text-accent-deep animate-pulse">|</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative font-mono text-xs uppercase tracking-widest transition-colors",
                    isActive
                      ? "text-ink"
                      : "text-ink-soft hover:text-ink",
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute left-0 right-0 -bottom-1 h-px bg-accent transition-transform duration-300 ease-out origin-left",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen((prev) => !prev)}
            className="flex flex-col gap-1.5 p-2"
          >
            <span
              className={cn(
                "h-0.5 w-6 bg-ink transition-transform duration-200",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-6 bg-ink transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-6 bg-ink transition-transform duration-200",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ink">
          <ul>
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <li
                  key={link.href}
                  className="border-b border-ink/20 last:border-b-0"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "flex items-center justify-between px-6 py-4 font-mono text-sm uppercase tracking-widest transition-colors",
                      isActive
                        ? "text-ink bg-paper-soft"
                        : "text-ink hover:bg-ink hover:text-paper",
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
