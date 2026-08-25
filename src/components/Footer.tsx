"use client";

import { LiveTime } from "./LiveTime";
import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-t border-ink">
      {/* Availability banner */}
      <div className="border-b border-ink bg-paper-soft px-6 sm:px-10 lg:px-16 py-4">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="h-1.5 w-1.5 bg-accent animate-pulse shrink-0"
            />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-ink-soft">
              Available for senior / staff roles · Global remote · Open to
              relocation
            </span>
          </div>
          <a
            href={`mailto:${profile.contact.email}`}
            className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-accent-deep hover:text-ink underline-offset-4 hover:underline transition-colors"
          >
            {profile.contact.email} →
          </a>
        </div>
      </div>

      {/* Main footer row */}
      <div className="px-6 sm:px-10 lg:px-16 py-8 sm:py-10">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div>
            <p className="font-mono text-sm font-bold text-ink mb-1">
              EMMANUEL_ARO
              <span className="text-ink-mute">_/&gt;</span>
              <span className="text-accent-deep">|</span>
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute">
              Software Engineering Nerd
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute mt-1">
              Lagos, Nigeria · Global Remote
            </p>
          </div>

          {/* Social links */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-ink-mute mb-3">
              {"// Elsewhere"}
            </p>
            <ul className="flex flex-col gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest">
              <li>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-soft hover:text-ink hover:underline underline-offset-4 transition-colors"
                >
                  GitHub → i-MMANTECH
                </a>
              </li>
              <li>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-soft hover:text-ink hover:underline underline-offset-4 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profile.social.x}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-soft hover:text-ink hover:underline underline-offset-4 transition-colors"
                >
                  X / Twitter → @imman_tech1
                </a>
              </li>
            </ul>
          </div>

          {/* Meta */}
          <div className="sm:text-right">
            <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-ink-mute mb-3">
              {"// Meta"}
            </p>
            <div className="flex flex-col gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute">
              <LiveTime />
              <p>Built with Next.js · TypeScript · Tailwind</p>
              <p>© {year} Emmanuel Mobolaji Aro</p>
            </div>
          </div>
        </div>

        {/* Back to top */}
        <div className="mx-auto max-w-6xl mt-10 pt-6 border-t border-ink/20 flex justify-between items-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-ink-mute">
            All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-ink-soft hover:text-ink transition-colors flex items-center gap-2"
          >
            Back to top
            <span aria-hidden className="text-accent-deep">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
