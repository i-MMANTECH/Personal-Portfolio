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
    company: "Boxonia Blueprint",
    title: "Software Engineer (Platform & Ecosystem Architecture)",
    period: "Oct 2024 — Present",
    location: "Lagos, NG",
    current: true,
    bullets: [
      "Architected and developed a centralized digital ecosystem in Python that consolidates story-development and talent-management workflows across 5+ globally distributed film production teams.",
      "Engineered an automated talent-booking and cross-border coordination platform, replacing multi-day manual scheduling loops with a zero-friction transactional flow that accelerated client onboarding velocity by 40%.",
      "Designed scalable relational schemas and secure RESTful API integrations, ensuring high-availability data synchronization between distributed production units under strict SLA requirements.",
    ],
  },
  {
    company: "Tech4mation (NativeTalk)",
    title: "Senior Software Developer, Platform Engineering",
    period: "Feb 2026 — Jun 2026",
    location: "Lagos, NG",
    current: false,
    bullets: [
      "Spearheaded backend architecture and feature delivery across core enterprise products, collaborating closely with Product and Engineering leadership to establish record-breaking sprint delivery velocity within the company.",
      "Architected TaskForge Pro, a high-throughput enterprise team-management platform powered by Django Ninja, Next.js (App Router), and PostgreSQL, utilizing a decoupled microservice boundary and strict typed API contracts.",
      "Hardened platform security posture by implementing robust JWT authentication, role-based access control (RBAC), and automated Postman API regression test suites, achieving 99.9% endpoint reliability prior to staging promotion.",
      "Refactored core messaging pipelines and backend logic in the omnichannel-crm service, decoupling channel adapters from core processing loops to support horizontal scaling under surge traffic.",
      "Standardized engineering environments by introducing containerized Docker workflows, eliminating environment drift and reducing onboarding time for new engineers from 3 days to under 2 hours.",
    ],
  },
  {
    company: "Bincom Dev Center",
    title: "Full Stack Developer",
    period: "Sep 2025 — Jan 2026",
    location: "Lagos, NG",
    bullets: [
      "Architected high-performance frontend interfaces using Next.js (App Router) and React, leveraging Server Components and optimized data-fetching patterns to reduce First Contentful Paint (FCP) by 35% and boost SEO rankings.",
      "Overhauled relational MySQL database schemas and refactored hot-path SQL queries, accelerating complex data retrieval by 20% and eliminating latency spikes under peak user load.",
      "Mentored junior developers in TypeScript best practices, modular component design, and git branching standards, elevating overall team code quality and delivery velocity.",
    ],
  },
  {
    company: "Cyberbuddies.com",
    title: "Full Stack Developer",
    period: "Apr 2024 — Aug 2024",
    location: "Ibadan, NG",
    bullets: [
      "Delivered end-to-end full-stack web applications from initial system design to production deployment, introducing continuous integration and automated testing pipelines that increased delivery velocity by 25%.",
      "Spearheaded the migration of production workloads to AWS cloud infrastructure, optimizing compute and storage resource allocation to reduce cloud operating costs by 18% while upholding 99.9% uptime SLA targets.",
    ],
  },
  {
    company: "SafeSpace.org Association",
    title: "Operations QA & Automation Engineer",
    period: "May 2023 — Feb 2024",
    location: "California, US (Remote)",
    bullets: [
      "Designed and deployed Python and Django automated review pipelines that replaced manual verification loops, increasing organizational operational throughput by 30% with complete deterministic auditability.",
      "Instituted rigorous data quality and automated testing protocols in containerized Docker environments, reducing data-entry error rates by 50% and establishing company-wide benchmarks for system integrity.",
    ],
  },
  {
    company: "Fiatci.io",
    title: "Lead Full Stack Engineer",
    period: "Sep 2022 — Mar 2023",
    location: "Brussels, BE (Remote)",
    bullets: [
      "Led a cross-functional engineering team of 7 developers through the end-to-end architecture, development, and production deployment of the company's flagship web platform — delivering the first successful commercial product launch in company history.",
      "Owned technical direction across frontend, backend, and DevOps infrastructure; established rigorous code review standards, CI/CD release strategies, and zero-downtime production cutover protocols.",
    ],
  },
] as const;
