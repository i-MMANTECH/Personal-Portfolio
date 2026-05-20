import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nativetalk Ticketing — Case Study",
  description:
    "Case study: how Emmanuel Aro designed and built the Nativetalk Ticketing dashboard — a typed, role-based support-operations surface on Next.js and TypeScript.",
  alternates: { canonical: "/work/nativetalk-ticketing" },
};

const META = [
  { label: "Role", value: "Design + Build (solo)" },
  { label: "Year", value: "2026" },
  { label: "Context", value: "Tech4mation · Nativetalk" },
  { label: "Status", value: "In production" },
] as const;

const STACK = ["Next.js (App Router)", "TypeScript", "REST APIs", "Vercel"];

type Block = { heading: string; body: readonly string[] };

const SECTIONS: readonly Block[] = [
  {
    heading: "Overview",
    body: [
      "Nativetalk Ticketing is the support-operations dashboard for the Nativetalk stack. It gives a support operator one surface to triage customer inquiries, assign agents, and track how fast tickets actually close.",
    ],
  },
  {
    heading: "The problem",
    body: [
      "Support requests arrived across scattered channels with no single queue. Operators context-switched between tools to find, claim, and resolve tickets — and managers had no reliable signal for how the team was performing.",
      "There was no honest completion-rate number. \"How are we doing?\" could only be answered by manually counting, which meant it rarely got answered at all.",
    ],
  },
  {
    heading: "My approach",
    body: [
      "I designed it as a single operator surface backed by a typed API contract. Every ticket, agent, and status transition is a typed entity end-to-end — the dashboard and the backend share one schema, so a malformed payload fails at the boundary instead of corrupting a view.",
      "Role-based access separates admin operators from agents: capabilities are gated on the server and mirrored in the UI, so the interface never offers an action the caller can't actually perform.",
    ],
  },
  {
    heading: "Architecture decisions",
    body: [
      "Typed contract first — I modelled the ticket lifecycle as explicit states before writing a single view, so the UI could only ever render a state the system actually supports.",
      "Server-derived metrics — completion rate and throughput are computed server-side and surfaced in one overview panel. Managers get a single number they can trust, not a spreadsheet.",
      "Stateless views — each screen derives from server state with no competing client-side source of truth, which removes a whole class of drift bugs.",
    ],
  },
  {
    heading: "Outcome",
    body: [
      "Operators now triage from one queue instead of several tools. Assignment is a single action. Completion-rate metrics are visible in the same view as the work, with no separate report to run.",
      "The dashboard is in production on the Nativetalk stack and is the surface support runs on day to day.",
    ],
  },
];

export default function NativetalkTicketingCaseStudy() {
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
          Nativetalk Ticketing
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-soft">
          A typed, role-based support-operations dashboard — one surface for
          triage, assignment, and resolution metrics.
        </p>

        <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 border border-ink">
          {META.map((item, i) => (
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
          {STACK.map((tech) => (
            <span
              key={tech}
              className="border border-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-16 space-y-14">
          {SECTIONS.map((section, i) => (
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
                {section.body.map((para) => (
                  <p
                    key={para}
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
          <a
            href="https://ticket-matrix-six.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent text-ink border border-accent font-mono text-xs uppercase tracking-widest font-bold px-6 py-4 hover:bg-ink hover:text-accent hover:border-ink transition-colors"
          >
            View live <span aria-hidden>→</span>
          </a>
          <a
            href="https://github.com/i-MMANTECH/Ticket-Matrix"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-ink text-ink font-mono text-xs uppercase tracking-widest px-6 py-4 hover:bg-ink hover:text-paper transition-colors"
          >
            View code <span aria-hidden>→</span>
          </a>
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
