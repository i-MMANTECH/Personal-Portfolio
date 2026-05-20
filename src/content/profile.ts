export type ProfileLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const profile = {
  name: "Emmanuel Aro",
  identity: "Software Engineering Nerd",
  role: "Full Stack Software Engineer",
  focus: ["Systems", "Platforms", "Applied AI"] as const,
  location: "Lagos, Nigeria",
  tagline:
    "I'm a Software Engineering Nerd. I architect scalable, production-grade platforms at the intersection of web systems and applied machine learning.",
  bio: [
    "I operate end-to-end as a Full Stack Software Engineer across the Python / Django Ninja and Next.js (App Router) / TypeScript ecosystems, with a working discipline built around strict typing, containerized delivery, and measurable system outcomes.",
    "I care about defensible API surfaces, decoupled architecture, and infrastructure that holds under load. From shipping internal CRMs to retraining ML models on evolving threat data, the through-line is the same: I build systems, not features.",
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
  cvPath: "/Emmanuel-Aro-The-Nerd-CV.pdf",
} as const;
