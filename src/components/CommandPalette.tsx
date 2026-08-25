"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/cn";
import { projects } from "@/content/projects";

type Command = {
  id: string;
  label: string;
  group: "Navigate" | "Actions" | "Links" | "Case Studies";
  hint?: string;
  run: () => void;
};

/**
 * ⌘K / Ctrl+K command palette — jump to any section, fire an action,
 * or open a link without touching the mouse. Also opens via a custom
 * `toggle-command-palette` event so the nav button can trigger it.
 */
export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  const commands = useMemo<Command[]>(() => {
    const scrollTo = (id: string) => () => {
      close();
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const openExternal = (url: string) => () => {
      close();
      window.open(url, "_blank", "noopener,noreferrer");
    };
    const goTo = (path: string) => () => {
      close();
      router.push(path);
    };

    // Dynamically generate case study commands from all projects
    const caseStudyCommands: Command[] = projects
      .filter((p) => p.links.caseStudy)
      .map((p) => ({
        id: `cs-${p.id}`,
        label: `Case study — ${p.title}`,
        group: "Case Studies" as const,
        hint: p.year,
        run: goTo(p.links.caseStudy!),
      }));

    return [
      { id: "about", label: "Go to About", group: "Navigate", run: scrollTo("about") },
      { id: "manifesto", label: "Go to Philosophy / Manifesto", group: "Navigate", run: scrollTo("manifesto") },
      { id: "stack", label: "Go to Stack", group: "Navigate", run: scrollTo("stack") },
      { id: "experience", label: "Go to Experience", group: "Navigate", run: scrollTo("experience") },
      { id: "work", label: "Go to Featured Work", group: "Navigate", run: scrollTo("work") },
      { id: "contact", label: "Go to Contact", group: "Navigate", run: scrollTo("contact") },
      {
        id: "cv",
        label: "Download CV",
        group: "Actions",
        run: () => {
          close();
          window.open("/Emmanuel-Aro-CV(Resume).pdf", "_blank");
        },
      },
      {
        id: "theme",
        label: "Toggle light / dark theme",
        group: "Actions",
        run: () => {
          close();
          const root = document.documentElement;
          const next = root.classList.contains("dark") ? "light" : "dark";
          root.classList.toggle("dark", next === "dark");
          try {
            localStorage.setItem("theme", next);
          } catch {
            /* private mode — ignore */
          }
        },
      },
      {
        id: "github",
        label: "Open GitHub",
        group: "Links",
        hint: "i-MMANTECH",
        run: openExternal("https://github.com/i-MMANTECH"),
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        group: "Links",
        run: openExternal("https://www.linkedin.com/in/emmanuel-aro-8710972a9"),
      },
      {
        id: "x",
        label: "Open X / Twitter",
        group: "Links",
        hint: "@imman_tech1",
        run: openExternal("https://x.com/imman_tech1"),
      },
      {
        id: "email",
        label: "Send an email",
        group: "Links",
        hint: "emmanuelaro87@gmail.com",
        run: () => {
          close();
          window.location.href = "mailto:emmanuelaro87@gmail.com";
        },
      },
      ...caseStudyCommands,
    ];
  }, [close, router]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.group.toLowerCase().includes(q) ||
        (c.hint?.toLowerCase().includes(q) ?? false),
    );
  }, [commands, query]);

  useEffect(() => {
    function onKey(e: globalThis.KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    }
    function onToggle() {
      setOpen((o) => !o);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("toggle-command-palette", onToggle);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("toggle-command-palette", onToggle);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }
    setQuery("");
    setActive(0);
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 20);
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setActive((a) => Math.min(a, Math.max(0, filtered.length - 1)));
  }, [filtered.length]);

  function onInputKey(e: ReactKeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.run();
    }
  }

  if (!open) return null;

  // Group commands for display
  const groups = filtered.reduce<Record<string, Command[]>>((acc, cmd) => {
    if (!acc[cmd.group]) acc[cmd.group] = [];
    (acc[cmd.group] as Command[]).push(cmd);
    return acc;
  }, {});

  let globalIndex = 0;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-start justify-center bg-ink/60 backdrop-blur-sm px-4 pt-[12vh]"
      onClick={close}
      role="presentation"
    >
      <div
        className="w-full max-w-xl border border-ink bg-paper shadow-[8px_8px_0_0_var(--color-accent)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        <div className="flex items-center gap-3 border-b border-ink px-4">
          <span className="font-mono text-xs text-accent-deep">{">"}</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKey}
            placeholder="Type a command or search…"
            className="w-full bg-transparent py-4 font-mono text-sm text-ink placeholder:text-ink-mute focus:outline-none"
            aria-label="Command search"
          />
          <kbd className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            esc
          </kbd>
        </div>

        <div className="max-h-[56vh] overflow-y-auto py-1">
          {filtered.length === 0 && (
            <p className="px-4 py-6 text-center font-mono text-xs uppercase tracking-widest text-ink-mute">
              No matches
            </p>
          )}
          {Object.entries(groups).map(([group, cmds]) => (
            <div key={group}>
              <p className="px-4 py-2 font-mono text-[9px] uppercase tracking-[0.3em] text-ink-mute border-b border-ink/10">
                {group}
              </p>
              {cmds.map((command) => {
                const i = globalIndex++;
                return (
                  <button
                    key={command.id}
                    type="button"
                    onClick={command.run}
                    onMouseMove={() => setActive(i)}
                    className={cn(
                      "flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition-colors",
                      i === active ? "bg-ink text-paper" : "text-ink",
                    )}
                  >
                    <span className="font-mono text-sm">{command.label}</span>
                    {command.hint && (
                      <span
                        className={cn(
                          "font-mono text-[10px] shrink-0",
                          i === active ? "text-paper/60" : "text-ink-mute",
                        )}
                      >
                        {command.hint}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 border-t border-ink px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
