import { LiveTime } from "./LiveTime";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink py-10 px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl flex flex-col gap-3 sm:flex-row items-start sm:items-center justify-between font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-ink-mute">
        <p>© {year} Emmanuel Aro. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
          <LiveTime />
          <p>Built with Next.js · TypeScript · Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
