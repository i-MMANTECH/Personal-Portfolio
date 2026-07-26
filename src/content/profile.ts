export type ProfileLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const profile = {
  name: "Emmanuel Mobolaji Aro",
  identity: "Software Engineering Nerd",
  role: "Senior Software Engineer",
  focus: ["Systems", "Platforms", "Applied AI"] as const,
  location: "Lagos, Nigeria (Open to Global Remote)",
  tagline:
    "I'm a Software Engineering Nerd. I architect high-throughput distributed systems, scalable backend platforms, and applied machine learning solutions.",
  bio: [
    "I operate end-to-end as a Senior Full Stack Software Engineer across the Python (Django/Django Ninja) and TypeScript (Next.js App Router) ecosystems, with a working discipline built around strict typing, automated CI/CD pipelines, containerized delivery, and measurable system outcomes.",
    "I care about clean domain-driven design, defensible API surfaces, decoupled microservice architecture, and infrastructure that holds under demanding production workloads. From shipping enterprise team-management platforms to retraining ML models on evolving threat corpora, the through-line is the same: I build systems, not features.",
  ],
  meta: {
    experienceYears: "5+",
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
  cvPath: "/Emmanuel-Aro-CV(Resume).pdf",
} as const;
