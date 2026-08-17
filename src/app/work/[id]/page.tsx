import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { projects } from "@/content/projects";

// Required for static site generation in Next.js
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);
  if (!project) return {};

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    alternates: { canonical: `/work/${project.id}` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project || !project.caseStudyDetails) {
    notFound();
  }

  const { caseStudyDetails: details, tech, title, description, links } = project;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink bg-paper/95 backdrop-blur supports-backdrop-filter:bg-paper/80">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6 sm:px-10">
          <Link
            href="/"
            className="font-mono text-sm font-bold tracking-tight text-ink"
          >
            EMMANUEL_ARO
            <span className="text-ink-mute">_/&gt;</span>
          </Link>
          <Link
            href="/#work"
            className="font-mono text-xs uppercase tracking-widest text-ink-soft hover:text-ink transition-colors"
          >
            ← Back to work
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 sm:px-10 py-16 sm:py-24">
        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] text-accent-deep">
          {"// CASE STUDY"}
        </p>
        <h1 className="mt-5 font-mono text-4xl sm:text-6xl font-bold tracking-tight text-ink leading-[1.02]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-soft">
          {description}
        </p>

        <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 border border-ink">
          {details.meta.map((item, i) => (
            <div
              key={item.label}
              className={
                "p-5 border-ink " +
                (i < 2 ? "border-b sm:border-b-0 " : "") +
                (i % 2 === 0 ? "border-r " : "") +
                (i < 3 ? "sm:border-r" : "")
              }
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute">
                {item.label}
              </dt>
              <dd className="mt-2 font-mono text-sm font-bold text-ink">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="border border-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-16 space-y-14">
          {details.sections.map((section, i) => (
            <section key={section.heading}>
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs font-bold text-accent-deep">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <h2 className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-ink">
                  {section.heading}
                </h2>
              </div>
              <div className="mt-4 space-y-4 pl-0 sm:pl-9">
                {section.body.map((para, paraIndex) => (
                  <p
                    key={paraIndex}
                    className="text-base leading-relaxed text-ink-soft"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 border-t border-ink pt-10">
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-ink border border-accent font-mono text-xs uppercase tracking-widest font-bold px-6 py-4 hover:bg-ink hover:text-accent hover:border-ink transition-colors"
            >
              View live <span aria-hidden>→</span>
            </a>
          )}
          {links.code && (
            <a
              href={links.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-ink text-ink font-mono text-xs uppercase tracking-widest px-6 py-4 hover:bg-ink hover:text-paper transition-colors"
            >
              View code <span aria-hidden>→</span>
            </a>
          )}
          <Link
            href="/#work"
            className="inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-soft hover:text-ink px-6 py-4 transition-colors"
          >
            ← All projects
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
