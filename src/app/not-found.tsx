import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Route not found",
};

export default function NotFound() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.5em] text-accent-deep">
        {"// 404"}
      </p>

      <h1 className="mt-6 font-mono text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-ink leading-[0.95]">
        ROUTE
        <br />
        NOT FOUND
      </h1>

      <p className="mt-6 max-w-md text-ink-soft leading-relaxed">
        This path doesn&apos;t resolve. The page you&apos;re looking for was
        moved, renamed, or never shipped.
      </p>

      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 bg-accent text-ink border border-accent font-mono text-xs uppercase tracking-widest font-bold px-6 py-4 hover:bg-ink hover:text-accent hover:border-ink transition-colors"
      >
        Return home <span aria-hidden>→</span>
      </Link>
    </main>
  );
}
