export type ProfileLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const profile = {
  name: "Emmanuel Mobolaji Aro",
  identity: "Software Engineer",
  role: "Software Engineer",
  focus: ["Systems", "Platforms", "Applied AI", "LLMs"] as const,
  location: "Lagos, Nigeria (Open to Global Remote)",
  tagline:
    "Full Stack Software Engineer focused on distributed systems and applied AI. I specialize in building backend architectures, data pipelines, and scalable APIs that solve actual engineering problems without the fluff.",

  /**
   * Philosophy lines — used in the Manifesto section.
   * Bold, confident, non-generic.
   */
  manifesto: [
    "I focus on clean architecture, resilient systems, and measurable outcomes. Every line of code I write is a decision about scale and maintainability.",
    "My experience spans from building real-time collaboration platforms to orchestrating serverless GPU workloads. In every system, my priority is clean contracts, low latency, and reliability.",
    "Six years in, shipping production code across global teams. Still prioritizing curiosity and technical depth over hype.",
  ] as const,

  /**
   * Quantified achievements — power the StatsBar and About counters.
   */
  achievements: {
    repos: 65,
    companies: 7,
    yearsExperience: 6,
    continents: 4,
    systemsShipped: 12,
    uptimeSLA: "99.9%",
    productionBugsSquashed: 8,
  },

  /**
   * Quantified achievements shown in bio and meta.
   */
  bio: [
    "I operate end-to-end as a Full Stack Software Engineer across the Python (Django/Django Ninja) and TypeScript (Next.js App Router) ecosystems. Currently engineering AI systems at LunarTech — building Agentic RAG pipelines, legal document processing APIs, and LLM routing infrastructure — while independently shipping Geod AI, my own sovereign AI workspace product.",
    "I care about clean domain-driven design, defensible API surfaces, and infrastructure that holds under demanding production workloads. Whether it's a 9-layer self-hosted legal AI stack, a GPU video processing pipeline on Modal, or a real-time WebRTC collaboration platform — the priority is always the same: building systems that work, scale, and solve the problem at hand.",
  ],
  meta: {
    experienceYears: "6+",
    educationPrimary: "B.Sc. Computer Science",
    educationSecondary: "Federal University Oye-Ekiti",
    certification: "Software Engineering Certification",
    certificationProvider: "GB-Tech Learning Centre",
  },
  contact: {
    email: "emmanuelaro87@gmail.com",
    whatsapp: "+2349073318795",
    whatsappHref: "https://wa.me/2349073318795",
    phone: "+234 907 331 8795",
  },
  social: {
    github: "https://github.com/i-MMANTECH",
    linkedin: "https://www.linkedin.com/in/emmanuel-aro-8710972a9",
    x: "https://x.com/imman_tech1",
  },
  cvPath: "/Emmanuel_Aro_CV.pdf",
} as const;
