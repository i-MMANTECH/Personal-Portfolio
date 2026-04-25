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
      "Architected TaskForge Pro, a high-throughput team-management platform on Django Ninja + Next.js + PostgreSQL with strict typed API contracts.",
      "Hardened security posture via JWT auth and a Postman endpoint-coverage regime that catches regressions before staging.",
      "Shipped core contributions to the omnichannel-crm service; refactored backend logic for horizontal scalability.",
      "Standardized local + staging environments with Docker, eliminating environment drift across the team.",
    ],
  },
  {
    company: "Bincom Dev Center",
    title: "Full Stack Developer",
    period: "Sep 2025 — Jan 2026",
    location: "Lagos, NG",
    bullets: [
      "Architected Next.js UI layers for high-load applications, lifting frontend performance budgets and SEO posture.",
      "Re-modeled MySQL schemas and rewrote hot-path queries — accelerated data retrieval by 20% under peak load.",
    ],
  },
  {
    company: "Boxonia Blueprint",
    title: "Software Engineer",
    period: "Oct 2024 — Present",
    location: "Lagos, NG",
    current: true,
    bullets: [
      "Built a centralized digital ecosystem in Python consolidating story-development and talent-management for global film productions.",
      "Shipped a talent-booking platform that removed cross-border coordination bottlenecks for high-profile international clients.",
    ],
  },
  {
    company: "Cyberbuddies.com",
    title: "Full Stack Developer",
    period: "Apr 2024 — Aug 2024",
    location: "Ibadan, NG",
    bullets: [
      "Shipped multiple full-stack applications and introduced automated testing pipelines — raised delivery velocity by 25%.",
      "Led an AWS migration; re-planned resource allocation to cut infra overhead while preserving SLA targets.",
    ],
  },
  {
    company: "SafeSpace.org Association",
    title: "Operations QA Engineer",
    period: "May 2023 — Feb 2024",
    location: "California, US (Remote)",
    bullets: [
      "Designed Python / Django automation pipelines lifting operational throughput by 30% — replaced manual review loops.",
      "Instituted a QA protocol that reduced data-entry error rates by 50% across containerized environments.",
    ],
  },
  {
    company: "Fiatci.io",
    title: "Lead Full Stack Engineer",
    period: "Sep 2022 — Mar 2023",
    location: "Brussels, BE (Remote)",
    bullets: [
      "Led a 7-engineer team through end-to-end architecture, build, and deployment of the company's flagship platform.",
      "Delivered the first successful product launch in company history; owned review standards, branching, and cutover plan.",
    ],
  },
] as const;
