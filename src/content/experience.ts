export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: readonly string[];
  current?: boolean;
};

export const experience: readonly Role[] = [
  {
    company: "Tech4mation (NativeTalk)",
    title: "Software Developer, Platform Engineering",
    period: "Feb 2026 — Present",
    location: "Lagos, NG",
    current: true,
    bullets: [
      "I architected TaskForge Pro, a high-throughput team-management platform on Django Ninja + Next.js + PostgreSQL with strict typed API contracts.",
      "I hardened the security posture with JWT auth and a Postman endpoint-coverage regime that catches regressions before staging.",
      "I shipped core contributions to the omnichannel-crm service and refactored its backend logic for horizontal scalability.",
      "I standardized local and staging environments with Docker, eliminating environment drift across the team.",
    ],
  },
  {
    company: "Bincom Dev Center",
    title: "Full Stack Developer",
    period: "Sep 2025 — Jan 2026",
    location: "Lagos, NG",
    bullets: [
      "I architected Next.js UI layers for high-load applications, lifting frontend performance budgets and SEO posture.",
      "I re-modeled MySQL schemas and rewrote hot-path queries — I accelerated data retrieval by 20% under peak load.",
    ],
  },
  {
    company: "Boxonia Blueprint",
    title: "Software Engineer",
    period: "Oct 2024 — Present",
    location: "Lagos, NG",
    current: true,
    bullets: [
      "I built a centralized digital ecosystem in Python that consolidates story-development and talent-management for global film productions.",
      "I shipped a talent-booking platform that removed cross-border coordination bottlenecks for high-profile international clients.",
    ],
  },
  {
    company: "Cyberbuddies.com",
    title: "Full Stack Developer",
    period: "Apr 2024 — Aug 2024",
    location: "Ibadan, NG",
    bullets: [
      "I shipped multiple full-stack applications and introduced automated testing pipelines — I raised delivery velocity by 25%.",
      "I led an AWS migration and re-planned resource allocation to cut infra overhead while preserving SLA targets.",
    ],
  },
  {
    company: "SafeSpace.org Association",
    title: "Operations QA Engineer",
    period: "May 2023 — Feb 2024",
    location: "California, US (Remote)",
    bullets: [
      "I designed Python / Django automation pipelines that lifted operational throughput by 30% and replaced manual review loops.",
      "I instituted a QA protocol that reduced data-entry error rates by 50% across containerized environments.",
    ],
  },
  {
    company: "Fiatci.io",
    title: "Lead Full Stack Engineer",
    period: "Sep 2022 — Mar 2023",
    location: "Brussels, BE (Remote)",
    bullets: [
      "I led a 7-engineer team through the end-to-end architecture, build, and deployment of the company's flagship platform.",
      "I delivered the first successful product launch in company history and owned review standards, branching, and the cutover plan.",
    ],
  },
] as const;
