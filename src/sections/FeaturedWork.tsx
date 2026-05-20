import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
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
            <article className="group flex flex-col border border-ink bg-paper text-ink hover:bg-ink hover:text-paper transition-colors h-full">
              <header className="flex items-center justify-between px-5 py-3 border-b border-current">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-deep group-hover:text-accent transition-colors">
                  {project.category} · {project.year}
                </span>
              </header>

              <div className="flex flex-col flex-1 px-5 py-6">
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

                <footer className="mt-auto pt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.25em]">
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
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
