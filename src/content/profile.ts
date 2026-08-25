export type ProfileLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const profile = {
  name: "Emmanuel Mobolaji Aro",
  identity: "Software Engineering Nerd",
  role: "Senior Software Engineer",
  focus: ["Systems", "Platforms", "Applied AI", "LLMs"] as const,
  location: "Lagos, Nigeria (Open to Global Remote)",
  tagline:
    "I don't just build features — I architect systems. Senior Full Stack Engineer shipping distributed platforms, Agentic AI pipelines, and production-grade infrastructure that holds under load. At my core, I'm simply a problem-solving nerd driven by innovation — deeply passionate about my craft and absolutely in love with what I do.",

  /**
   * Philosophy lines — used in the Manifesto section.
   * Bold, confident, non-generic.
   */
  manifesto: [
    "I build systems, not just features. Every line of code I write is a decision about architecture, scale, and ownership.",
    "The through-line across everything I've shipped — legal AI, GPU pipelines, enterprise platforms — is the same: clean domain-driven design, defensible API surfaces, and infrastructure that holds under demanding production workloads.",
    "Six years in. Seven companies. Four continents. Still the most curious person in the room.",
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
    "I operate end-to-end as a Senior Full Stack Software Engineer across the Python (Django/Django Ninja) and TypeScript (Next.js App Router) ecosystems. Currently engineering AI systems at LunarTech — building Agentic RAG pipelines, legal document processing APIs, and LLM routing infrastructure — while independently shipping Geod AI, my own sovereign AI workspace product.",
    "I care about clean domain-driven design, defensible API surfaces, and infrastructure that holds under demanding production workloads. Whether it's a 9-layer self-hosted legal AI stack, a GPU video processing pipeline on Modal, or a real-time WebRTC collaboration platform — the through-line is always the same: I build systems, not just features.",
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
