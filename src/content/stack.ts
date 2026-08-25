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
      "Node.js",
      "Django Ninja",
      "Django",
      "Python",
      "PHP",
      "REST",
      "JWT Auth",
      "Laravel",
    ],
  },
  {
    id: "frontend",
    label: "Frontend & UI Systems",
    items: [
      "Next.js (App Router)",
      "React",
      "JavaScript",
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
  {
    id: "llm",
    label: "LLMs & Agentic AI",
    items: [
      "LangChain",
      "LlamaIndex",
      "LangGraph",
      "Ollama (Local LLMs)",
      "Agentic RAG",
      "OpenRouter",
      "Gemini AI",
      "WhisperX",
    ],
  },
] as const;
