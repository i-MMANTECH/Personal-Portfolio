import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { Preloader } from "@/components/Preloader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { GrainOverlay } from "@/components/GrainOverlay";
import "./globals.css";

const SITE_URL = "https://emmanuelaro.netlify.app";
const SITE_NAME = "Emmanuel Aro — Software Engineering Nerd";
const SITE_DESCRIPTION =
  "Software Engineering Nerd · Systems · Platforms · Applied AI. Full Stack Software Engineer architecting scalable, production-grade platforms across Django Ninja and Next.js (App Router) ecosystems.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s — Emmanuel Aro",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Emmanuel Aro",
  authors: [{ name: "Emmanuel Aro", url: SITE_URL }],
  creator: "Emmanuel Aro",
  keywords: [
    "Emmanuel Aro",
    "Software Engineer",
    "Software Engineering Nerd",
    "Full Stack Engineer",
    "Django Ninja",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "Machine Learning",
    "Lagos",
    "Nigeria",
  ],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Emmanuel Aro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: "@imman_tech1",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

/**
 * Inline theme initializer — runs synchronously before paint so we
 * never render the wrong theme then flicker. Safe `try/catch` for
 * localStorage-blocked environments.
 */
const themeInitScript = `(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var next = stored === 'dark' || stored === 'light' ? stored : (prefersDark ? 'dark' : 'light');
    if (next === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* JS-disabled fallback: never trap the page behind the preloader,
            and always show the hero content. */}
        <noscript>
          <style>{`.preloader{display:none!important}.hero-rise{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased bg-paper text-ink">
        <Preloader />
        <ScrollProgress />
        {children}
        <GrainOverlay />
      </body>
    </html>
  );
}
