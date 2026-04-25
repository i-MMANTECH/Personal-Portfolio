"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-tight text-ink"
        >
          EMMANUEL_ARO
          <span className="text-ink-mute">_/&gt;</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-ink-soft hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
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
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-ink/20 last:border-b-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 font-mono text-sm uppercase tracking-widest text-ink hover:bg-ink hover:text-paper transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
