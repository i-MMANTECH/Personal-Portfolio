# Emmanuel Aro — Portfolio

Personal portfolio for Emmanuel Aro — Software Engineering Nerd · Systems · Platforms · Applied AI.

**Live**: https://emmanuelaro.netlify.app

## Stack

- **Framework** — Next.js 15 (App Router) + React 19
- **Language** — TypeScript (strict, `noUncheckedIndexedAccess`)
- **Styling** — Tailwind CSS 4 with Brutalist / Precision design tokens (zero border-radius enforced as a token)
- **Type system** — Geist Sans + Geist Mono via `next/font`
- **Animation** — Custom `Reveal` primitive over `IntersectionObserver` (respects `prefers-reduced-motion`)
- **Hosting** — Netlify (auto-deploy on push to `main`)

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build
npm run typecheck    # strict TypeScript check
npm run lint         # next lint
```

## Project layout

```
src/
  app/
    layout.tsx           # root layout, metadata, theme-init script
    page.tsx             # composes all sections
    globals.css          # Tailwind v4 + design tokens + dark mode + print
    opengraph-image.tsx  # auto-generated 1200×630 social share image
  components/
    Nav.tsx              # sticky nav, mobile hamburger, theme toggle
    Footer.tsx
    CurrentlyStrip.tsx   # "// CURRENTLY shipping/researching/open-to" bar
    ThemeToggle.tsx      # light/dark switch
    ui/
      Section.tsx        # numbered + labeled section wrapper
      Reveal.tsx         # IntersectionObserver fade/lift primitive
  content/               # typed data, separated from rendering
    profile.ts           # name, identity, contact, social
    stack.ts             # technical stack groupings
    experience.ts        # work history
    projects.ts          # featured projects
  sections/              # one file per portfolio section
  lib/
    cn.ts                # className utility
public/                  # static assets, profile/about photos, CV PDF
```

## Design system

- **Brutalist / Precision** — every border-radius token is collapsed to `0` so `rounded-*` utilities (including third-party components) render as square corners. A safety-net `* { border-radius: 0 !important }` rule guards against drift.
- **Palette** — graphite ink (`#0b0b0c`) on paper white (`#ffffff`), with an electric-lime accent (`#A6F500`) for selection, focus rings, primary CTA, section numbers, and the "Nerd" wordmark.
- **Type** — Geist Mono for headings, labels, and structured data; Geist Sans for body copy.
- **Theme toggle** — class-based dark variant via Tailwind 4's `@custom-variant`, persisted in `localStorage`, hydration-safe init script in `<head>`.
- **Print stylesheet** — Cmd/Ctrl+P renders a clean black-on-white CV-style document; UI chrome hidden, animations disabled, external link URLs annotated.

## Author

Emmanuel Aro — [emmanuelaro87@gmail.com](mailto:emmanuelaro87@gmail.com) · [GitHub](https://github.com/i-MMANTECH) · [LinkedIn](https://www.linkedin.com/in/emmanuel-aro-8710972a9) · [X](https://x.com/imman_tech1)
