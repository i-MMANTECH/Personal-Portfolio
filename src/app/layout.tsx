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
const SITE_NAME = "Emmanuel Mobolaji Aro — Senior Software Engineer · Global Talent";
const SITE_DESCRIPTION =
  "Emmanuel Mobolaji Aro — Senior Full Stack Software Engineer based in Lagos, Nigeria (Open to Global Remote). Architecting Agentic AI systems, distributed platforms, and applied-ML solutions at LunarTech. 6+ years. 65+ repos. 4 continents. Django Ninja · Next.js · TypeScript · LangGraph · LlamaIndex.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s — Emmanuel Mobolaji Aro",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Emmanuel Mobolaji Aro",
  authors: [{ name: "Emmanuel Mobolaji Aro", url: SITE_URL }],
  creator: "Emmanuel Mobolaji Aro",
  publisher: "Emmanuel Mobolaji Aro",
  alternates: { canonical: "/" },
  category: "technology",
  keywords: [
    // Primary identity
    "Emmanuel Mobolaji Aro",
    "Emmanuel Aro",
    "imman-tech",
    "imman_tech",
    "iMMAN-TECH",
    "iMMAN-Tech",
    "Emmanuel Aro portfolio",
    "Emmanuel Aro software engineer",
    // Role + location signals
    "Senior Software Engineer Lagos Nigeria",
    "Senior Full Stack Engineer Africa",
    "Software Engineering Nerd",
    "top software engineer Lagos",
    "best software engineer Nigeria",
    "top software engineer Africa",
    "best software engineer Africa",
    "software engineer Nigeria 2026",
    "software engineer Lagos Nigeria",
    "Senior Full Stack Engineer Lagos",
    "global software engineer Nigeria",
    "promising software engineer Africa",
    "software engineer open to remote",
    // AI / ML
    "AI engineer Nigeria",
    "Agentic AI engineer",
    "Agentic RAG engineer",
    "LangGraph developer",
    "LlamaIndex engineer",
    "LLM engineer Nigeria",
    "Machine Learning engineer Lagos",
    "Applied AI engineer Africa",
    "legal AI engineer",
    // Stack-specific
    "Django Ninja developer",
    "Django Ninja expert",
    "Next.js developer Nigeria",
    "Next.js App Router engineer",
    "TypeScript engineer Africa",
    "React developer Lagos",
    "Python backend engineer Nigeria",
    "full stack TypeScript Python engineer",
    // Company / project signals
    "LunarTech engineer",
    "Geod AI",
    "Rosendahl legal AI",
    "Dark Phoenix podcast clipper",
    // GitHub / OSS
    "i-MMANTECH GitHub",
    "imman_tech GitHub",
    "Emmanuel Aro GitHub",
    // Broader discovery
    "distributed systems engineer Nigeria",
    "backend platform engineer Africa",
    "senior engineer remote Lagos",
    "software architect Nigeria",
  ],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Emmanuel Mobolaji Aro",
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
 * this is: a world-class software engineer based in Lagos, Nigeria,
 * open to global remote. Richest possible entity graph for name +
 * role + location searches.
 */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Emmanuel Mobolaji Aro",
  alternateName: [
    "Emmanuel Aro",
    "imman-tech",
    "imman_tech",
    "iMMAN-TECH",
    "iMMAN-Tech",
    "Software Engineering Nerd",
  ],
  jobTitle: "Senior Full Stack Software Engineer",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: "emmanuelaro87@gmail.com",
  telephone: "+2349073318795",
  image: `${SITE_URL}/images/emmanuel_111.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressRegion: "Lagos State",
    addressCountry: "Nigeria",
  },
  nationality: { "@type": "Country", name: "Nigeria" },
  hasOccupation: {
    "@type": "Occupation",
    name: "Senior Software Engineer",
    occupationLocation: {
      "@type": "City",
      name: "Lagos",
    },
    description:
      "Architecting distributed systems, AI platforms, and applied machine learning solutions across Django Ninja, Next.js, and TypeScript.",
    skills:
      "Python, Django Ninja, TypeScript, Next.js, React, PostgreSQL, Docker, LangGraph, LlamaIndex, Agentic RAG, LLMs",
    estimatedSalary: {
      "@type": "MonetaryAmountDistribution",
      name: "Senior Software Engineer",
      currency: "USD",
      duration: "P1Y",
    },
  },
  knowsAbout: [
    "Software Engineering",
    "Full Stack Development",
    "Distributed Systems",
    "Backend Architecture",
    "Platform Engineering",
    "Applied Artificial Intelligence",
    "Agentic RAG",
    "Large Language Models",
    "LangGraph",
    "LlamaIndex",
    "Django",
    "Django Ninja",
    "Next.js",
    "TypeScript",
    "React",
    "PostgreSQL",
    "Docker",
    "Natural Language Processing",
    "Computer Vision",
    "Machine Learning",
    "API Design",
    "DevOps",
    "AWS",
    "GPU Pipeline Engineering",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "Bachelor",
      name: "B.Sc. Computer Science",
      recognizedBy: {
        "@type": "CollegeOrUniversity",
        name: "Federal University Oye-Ekiti",
        address: { "@type": "PostalAddress", addressCountry: "Nigeria" },
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: "Advanced Software Engineering Certification",
      recognizedBy: {
        "@type": "Organization",
        name: "GB-Tech Learning Centre",
        address: { "@type": "PostalAddress", addressCountry: "Nigeria" },
      },
    },
  ],
  sameAs: [
    "https://github.com/i-MMANTECH",
    "https://www.linkedin.com/in/emmanuel-aro-8710972a9",
    "https://x.com/imman_tech1",
  ],
  worksFor: {
    "@type": "Organization",
    name: "LunarTech",
    url: "https://lunartech.ai",
    address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", addressCountry: "US" },
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Federal University Oye-Ekiti",
    address: { "@type": "PostalAddress", addressCountry: "Nigeria" },
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
