import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { Preloader } from "@/components/Preloader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { GrainOverlay } from "@/components/GrainOverlay";
import { CustomCursor } from "@/components/CustomCursor";
import { CommandPalette } from "@/components/CommandPalette";
import { ConsoleSignature } from "@/components/ConsoleSignature";
import "./globals.css";

const SITE_URL = "https://emmanuelaro.netlify.app";
const SITE_NAME = "Emmanuel Aro — Software Engineering Nerd";
const SITE_DESCRIPTION =
  "Emmanuel Aro — Software Engineering Nerd and Full Stack Software Engineer in Lagos, Nigeria. I architect scalable, production-grade platforms and applied-AI systems across Django Ninja, Next.js, and TypeScript.";

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
  publisher: "Emmanuel Aro",
  alternates: { canonical: "/" },
  category: "technology",
  keywords: [
    "Emmanuel Aro",
    "imman-tech",
    "imman_tech",
    "iMMAN-TECH",
    "iMMAN-Tech",
    "Software Engineering Nerd",
    "top software engineer Lagos",
    "best software engineer Nigeria",
    "software engineer Africa",
    "software engineer Lagos Nigeria",
    "Full Stack Software Engineer Lagos",
    "AI engineer Nigeria",
    "Machine Learning engineer Lagos",
    "Django Ninja developer",
    "Next.js developer Nigeria",
    "TypeScript engineer Africa",
    "React developer Lagos",
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
 * Person structured data (JSON-LD) — tells search engines exactly who
 * this is: a software engineer, in Lagos, Nigeria, with these aliases
 * and profiles. The highest-leverage technical SEO signal for ranking
 * on name + role + location queries.
 */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Emmanuel Aro",
  alternateName: [
    "imman-tech",
    "imman_tech",
    "iMMAN-TECH",
    "iMMAN-Tech",
    "Software Engineering Nerd",
  ],
  jobTitle: "Full Stack Software Engineer",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/images/profile.jpg`,
  email: "emmanuelaro87@gmail.com",
  telephone: "+2349073318795",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressRegion: "Lagos State",
    addressCountry: "Nigeria",
  },
  nationality: { "@type": "Country", name: "Nigeria" },
  knowsAbout: [
    "Software Engineering",
    "Full Stack Development",
    "Django",
    "Django Ninja",
    "Next.js",
    "TypeScript",
    "React",
    "PostgreSQL",
    "Docker",
    "Machine Learning",
    "Applied AI",
    "Natural Language Processing",
    "Computer Vision",
  ],
  sameAs: [
    "https://github.com/i-MMANTECH",
    "https://www.linkedin.com/in/emmanuel-aro-8710972a9",
    "https://x.com/imman_tech1",
  ],
  worksFor: { "@type": "Organization", name: "Tech4mation (NativeTalk)" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Federal University Oye-Ekiti",
  },
} as const;

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* JS-disabled fallback: never trap the page behind the preloader,
            and always show the hero content. */}
        <noscript>
          <style>{`.preloader{display:none!important}.hero-rise{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased bg-paper text-ink">
        <Preloader />
        <ScrollProgress />
        <CustomCursor />
        {children}
        <CommandPalette />
        <ConsoleSignature />
        <GrainOverlay />
      </body>
    </html>
  );
}
