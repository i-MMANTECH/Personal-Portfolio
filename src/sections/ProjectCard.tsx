"use client";

import Link from "next/link";
import { useRef, type MouseEvent } from "react";
import type { Project } from "@/content/projects";

/**
 * A single Featured Work card. A lime spotlight tracks the cursor
 * inside the card (CSS custom properties updated on mousemove), and
 * the whole card inverts on hover.
 */
export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLElement | null>(null);

  function handleMove(e: MouseEvent<HTMLElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    node.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <article
      ref={ref}
      onMouseMove={handleMove}
      className="project-card group relative flex h-full flex-col overflow-hidden border border-ink bg-paper text-ink transition-colors hover:bg-ink hover:text-paper"
    >
      <span aria-hidden className="project-card__spot" />

      <header className="relative flex items-center justify-between border-b border-current px-5 py-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-deep transition-colors group-hover:text-accent">
          {project.category} · {project.year}
        </span>
      </header>

      <div className="relative flex flex-1 flex-col px-5 py-6">
        <h3 className="font-mono text-lg md:text-xl font-bold leading-tight">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed opacity-80">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="border border-current px-2 py-1 font-mono text-[10px] uppercase tracking-wider"
            >
              {tech}
            </li>
          ))}
        </ul>

        <footer className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 font-mono text-[11px] uppercase tracking-[0.25em]">
          {project.links.caseStudy && (
            <Link
              href={project.links.caseStudy}
              className="text-accent-deep underline-offset-4 hover:underline group-hover:text-accent"
            >
              Case study →
            </Link>
          )}
          {project.links.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              Code →
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              Live →
            </a>
          )}
        </footer>
      </div>
    </article>
  );
}
