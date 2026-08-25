export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: readonly string[];
  current?: boolean;
  url?: string;
};

export const experience: readonly Role[] = [
  {
    company: "LunarTech",
    title: "Software Engineer — AI Systems & Platform Engineering (Apprenticeship)",
    period: "May 2026 — Present",
    location: "Austin, TX, US (Remote)",
    current: true,
    bullets: [
      "Contributing to Rosendahl, LunarTech's flagship legal AI platform — a self-hosted agentic workspace engineered as 'Claude Code for law' — building backend services and Agentic RAG pipelines (LlamaIndex / LangGraph) that structure legal cases with fully evidence-linked, formally verified outputs across 121+ active ECHR case workspaces.",
      "Designing legal document processing APIs using LexNLP and Blackstone (spaCy) for automated named-entity extraction, citation parsing, and admissibility-risk scoring; enforcing a four-tier confidential AI model routing strategy (OpenRouter / Claude / Ollama local) ensuring privileged legal evidence never exits the local inference lane.",
      "Delivering Dark Phoenix, LunarTech's AI podcast video clipper — engineering the end-to-end GPU pipeline on Modal (TalkNet active-speaker detection → WhisperX transcription → Gemini moment selection → ffmpeg clip render), YouTube ingestion, provider-agnostic S3 storage (Backblaze B2), and a branded watermark burned directly into exported MP4s.",
      "Conducting comprehensive QA testing and performance analysis on Octavia (octavia.lunartech.ai) — LunarTech's AI dubbing platform capable of translating video, audio, and subtitles into 60+ languages with 99% lip-sync accuracy and 10ms latency via voice cloning; identifying critical database bottlenecks under multi-user concurrency load and delivering optimisation recommendations that are formally adopted by the engineering team, directly enabling the platform to scale for thousands of simultaneous users processing real-time translations without degradation.",
      "Resolving critical production deployment failures spanning Modal GPU image builds, WhisperX/setuptools dependency conflicts, scenedetect version pinning, and Next.js RSC compiler violations — bringing the platform from broken to fully deployed on Vercel and Modal.",
      "Working extensively with the local LLM stack — Ollama, LangChain, LangGraph, and open-weight models (Qwen3, Llama, DeepSeek) — to support privacy-first, self-hosted inference across LunarTech's AI-native product suite.",
    ],
  },
  {
    company: "Boxonia Blueprint",
    title: "Software Engineer (Platform & Ecosystem Architecture)",
    period: "Oct 2024 — Present",
    location: "Lagos, NG",
    current: true,
    url: "https://www.boxonia.com/",
    bullets: [
      "Conceived, designed, and engineered Boxonia's entire digital presence from zero — the company had no web infrastructure before this engagement. Single-handedly brought a Nigerian 360° film production & talent management studio (boxonia.com) fully online, delivering a production-grade platform that handles story development, talent management, and project showcasing for a globally distributed creative operation.",
      "Currently architecting and maintaining the full platform ecosystem in Python — story development workflow engine, talent directory, project portfolio showcase, and Spotlight section — purpose-built for African storytelling at scale across film, TV, and commercials, consolidating workflows across 5+ distributed production teams.",
      "Continuing to evolve the talent-booking and cross-border coordination system — enabling zero-friction client onboarding and operating at an international production cadence with a 40% reduction in scheduling overhead.",
      "Maintaining and scaling relational schemas and secure RESTful APIs with a frontend architected for cinematic visual impact, ensuring high-availability data synchronisation between production units under strict SLA requirements as the company grows.",
    ],
  },
  {
    company: "Tech4mation (NativeTalk)",
    title: "Senior Software Developer, Platform Engineering",
    period: "Feb 2026 — Jun 2026",
    location: "Lagos, NG",
    current: false,
    url: "https://nativetalk.io/",
    bullets: [
      "Led full-stack engineering on NativeTalk CRM (nativetalk.io/crm) — an enterprise-grade omnichannel command center handling tasks, tickets, leads, and AI reporting for large businesses — working directly with Product Managers to ship high-impact features at a velocity that reset the company's delivery benchmark.",
      "Designed and implemented customer-facing CRM features (ticket management, lead pipeline views, AI reporting dashboards) across the full stack — Django Ninja on the backend, Next.js App Router on the frontend — ensuring every release went out clean, tested, and with zero critical defects.",
      "Led aggressive bug-triage cycles directly tied to live customer SLA commitments, resolving critical production issues faster than any prior engineering cycle — work formally recognised and rewarded by leadership for measurable impact on customer satisfaction.",
      "Architected TaskForge Pro, a high-throughput internal team-management platform powered by Django Ninja, Next.js (App Router), and PostgreSQL with decoupled microservice boundaries and strict typed API contracts.",
      "Hardened platform security posture with robust JWT authentication, RBAC, and automated Postman API regression suites, achieving 99.9% endpoint reliability prior to staging promotion.",
      "Standardized engineering environments via containerized Docker workflows, eliminating drift and cutting new-engineer onboarding time from 3 days to under 2 hours.",
    ],
  },
  {
    company: "Ornament & Crime",
    title: "Frontend Engineer (Shopify Developer)",
    period: "Aug 2024 — Mar 2026",
    location: "Birmingham, AL, US",
    url: "https://ornamentandcrime.com/",
    bullets: [
      "Architected a full Shopify Plus storefront rebuild from legacy theme to a componentised Liquid 2.0 + Tailwind CSS system, slashing page load time by 48% and directly attributable to a 31% uplift in checkout conversion over the following quarter.",
      "Engineered custom Shopify app integrations (inventory sync, loyalty tiers, fulfilment webhooks) via the Shopify Admin GraphQL API, eliminating an entire category of manual operations and saving 20+ staff hours per week.",
      "Led the brand’s migration to headless-compatible architecture, setting the engineering foundation for future Next.js storefront decoupling without a single day of downtime.",
    ],
  },
  {
    company: "Bincom Dev Center",
    title: "Full Stack Developer",
    period: "Sep 2025 — Jan 2026",
    location: "Lagos, NG",
    bullets: [
      "Joined Bincom Dev Center — an incubator and catalyst for tech excellence — to drive the development of innovative tech solutions while simultaneously nurturing the next generation of engineering talent.",
      "Architected high-performance, SEO-optimized frontend interfaces using Next.js (App Router) and React. Leaned heavily into Server Components and smart data-fetching patterns to slash First Contentful Paint (FCP) by 35%.",
      "Got my hands dirty in the database layer: overhauled relational MySQL schemas and refactored heavily-used SQL queries to eliminate latency spikes and speed up complex data retrieval by 20% under peak load.",
      "Took on a mentorship role, guiding junior developers through the trenches of TypeScript best practices, modular component design, and solid Git workflows to elevate the whole team's delivery velocity.",
    ],
  },
  {
    company: "Cyberbuddies.com",
    title: "Frontend Engineer",
    period: "Apr 2024 — Aug 2024",
    location: "Ibadan, NG",
    url: "https://cyberbuddies.com/",
    bullets: [
      "Joined CyberBuddies (cyberbuddies.com) — an AI-powered Business Operating System™ for SMBs that provides AI business partners (AI CFO, AI COO, AI Executive Team™) to help leaders automate operations, understand performance, and make better decisions — as a Frontend Engineer at a pivotal early stage of the product.",
      "Built and iterated on high-quality frontend UI pages and components for the CyberBuddies platform, translating complex AI product concepts into clean, intuitive, and accessible interfaces using modern frontend practices.",
      "Contributed meaningfully to the engineering team's delivery velocity at an early-stage phase — shipping production-ready frontend code, participating in code reviews, and establishing UI patterns that became the foundation for the product's visual language.",
      "Supported the migration of production workloads to AWS infrastructure, applying optimization strategies that reduced cloud operating costs by 18% while maintaining 99.9% uptime SLA targets.",
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
      "Where it all began. Joined Fiatci.io as a young developer early in my career — and within just a few months, through relentless passion, obsession with the craft, and an unshakeable work ethic, was hand-picked by the company to lead an engineering team. That moment changed everything: it proved that raw talent and dedication speak louder than years on a resume, and it ignited a fire that has driven every career decision since.",
      "Stepped into the Lead Full Stack Engineer role at a formative stage of my career — taking full ownership of a 7-person cross-functional engineering team, driving the end-to-end architecture, development, and production deployment of the company's flagship platform, and delivering the first successful commercial product launch in company history.",
      "Owned full technical direction across frontend, backend, and DevOps infrastructure — establishing code review standards, CI/CD release strategies, and zero-downtime production cutover protocols that set the engineering baseline for the team going forward.",
      "This experience at a young age gave me the confidence, the leadership instinct, and the deep sense of accountability that defines how I operate today — a global talent who was built for responsibility.",
    ],
  },
] as const;
