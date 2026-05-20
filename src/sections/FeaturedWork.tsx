import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/sections/ProjectCard";
import { projects } from "@/content/projects";

export function FeaturedWork() {
  return (
    <Section
      id="work"
      number="04."
      label="// FEATURED WORK"
      title="Things I've built."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
