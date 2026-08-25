"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/sections/ProjectCard";
import { projects } from "@/content/projects";

type Category = "ALL" | "AI/ML" | "Web";

const FILTERS: { label: string; value: Category }[] = [
  { label: "All", value: "ALL" },
  { label: "AI / ML", value: "AI/ML" },
  { label: "Web", value: "Web" },
];

export function FeaturedWork() {
  const [active, setActive] = useState<Category>("ALL");

  const filtered =
    active === "ALL" ? projects : projects.filter((p) => p.category === active);

  const counts = {
    ALL: projects.length,
    "AI/ML": projects.filter((p) => p.category === "AI/ML").length,
    Web: projects.filter((p) => p.category === "Web").length,
  };

  return (
    <Section
      id="work"
      number="04."
      label="// FEATURED WORK"
      title="Things I've built."
    >
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10 sm:mb-12">
        {FILTERS.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            onClick={() => setActive(value)}
            className={[
              "font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] px-4 py-2.5 border transition-colors",
              active === value
                ? "bg-ink text-paper border-ink"
                : "border-ink text-ink-soft hover:text-ink hover:border-ink",
            ].join(" ")}
          >
            {label}
            <span
              className={[
                "ml-2 font-mono text-[9px]",
                active === value ? "text-accent" : "text-ink-mute",
              ].join(" ")}
            >
              ({counts[value]})
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
        {filtered.map((project, i) => (
          <Reveal key={project.id} delay={i * 70}>
            <ProjectCard project={project} featured={i < 3 && active === "ALL"} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
