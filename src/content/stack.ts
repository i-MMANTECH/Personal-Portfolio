export type StackGroup = {
  id: string;
  label: string;
  items: readonly string[];
};

export const stack: readonly StackGroup[] = [
  {
    id: "backend",
    label: "Backend & APIs",
    items: [
      "Django Ninja",
      "Django",
      "Python",
      "REST",
      "JWT Auth",
      "Laravel",
      "Node.js",
    ],
  },
  {
    id: "frontend",
    label: "Frontend & UI Systems",
    items: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
    ],
  },
  {
    id: "data",
    label: "Data Layer",
    items: ["PostgreSQL", "MySQL", "SQLite", "Supabase"],
  },
  {
    id: "infra",
    label: "Infrastructure & DevOps",
    items: ["Docker", "AWS", "CI/CD", "Git", "Postman", "Linux"],
  },
  {
    id: "ai-ml",
    label: "AI / ML & Applied Research",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "OpenCV",
      "Pandas",
      "NumPy",
      "NLP",
      "Computer Vision",
      "Malware Analysis",
    ],
  },
] as const;
