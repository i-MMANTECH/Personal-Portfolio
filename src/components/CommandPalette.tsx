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

type Command = {
  id: string;
  label: string;
  group: "Navigate" | "Actions" | "Links";
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

    return [
      { id: "about", label: "Go to About", group: "Navigate", run: scrollTo("about") },
      { id: "stack", label: "Go to Stack", group: "Navigate", run: scrollTo("stack") },
      { id: "experience", label: "Go to Experience", group: "Navigate", run: scrollTo("experience") },
      { id: "work", label: "Go to Featured Work", group: "Navigate", run: scrollTo("work") },
      { id: "contact", label: "Go to Contact", group: "Navigate", run: scrollTo("contact") },
      {
        id: "case-study",
        label: "Read case study — Nativetalk Ticketing",
        group: "Navigate",
        run: () => {
          close();
          router.push("/work/nativetalk-ticketing");
        },
      },
      {
        id: "cv",
        label: "Download CV",
        group: "Actions",
        run: () => {
          close();
          window.open("/Emmanuel-Aro-The-Nerd-CV.pdf", "_blank");
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

  return (
    <div
      className="fixed inset-0 z-[110] flex items-start justify-center bg-ink/60 backdrop-blur-sm px-4 pt-[14vh]"
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

        <ul className="max-h-[52vh] overflow-y-auto py-2">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center font-mono text-xs uppercase tracking-widest text-ink-mute">
              No matches
            </li>
          )}
          {filtered.map((command, i) => (
            <li key={command.id}>
              <button
                type="button"
                onClick={command.run}
                onMouseMove={() => setActive(i)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition-colors",
                  i === active ? "bg-ink text-paper" : "text-ink",
                )}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={cn(
                      "font-mono text-[9px] uppercase tracking-[0.2em]",
                      i === active ? "text-accent" : "text-ink-mute",
                    )}
                  >
                    {command.group}
                  </span>
                  <span className="font-mono text-sm">{command.label}</span>
                </span>
                {command.hint && (
                  <span
                    className={cn(
                      "font-mono text-[10px]",
                      i === active ? "text-paper/60" : "text-ink-mute",
                    )}
                  >
                    {command.hint}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 border-t border-ink px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
