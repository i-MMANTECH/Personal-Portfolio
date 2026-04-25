export type Project = {
  id: string;
  title: string;
  category: "AI/ML" | "Web";
  year: string;
  description: string;
  tech: readonly string[];
  links: {
    code?: string;
    live?: string;
  };
};

export const projects: readonly Project[] = [
  {
    id: "boxonia-blueprint",
    title: "Boxonia Blueprint",
    category: "Web",
    year: "2025",
    description:
      "Production digital platform for global film production — centralizes story-development pipelines and talent-management workflows. Powers a talent-booking layer that removes cross-border coordination friction for high-profile international clients.",
    tech: ["Python", "REST APIs", "Web Platform"],
    links: {
      live: "https://www.boxonia.com/",
    },
  },
  {
    id: "malware-detection",
    title: "Malware Detection System",
    category: "AI/ML",
    year: "2024",
    description:
      "Python-based security platform applying supervised ML to real-time malware identification and classification. Delivers predictive threat analysis for enterprise endpoints; pipeline structured for retraining on evolving threat corpora.",
    tech: ["Python", "Scikit-learn", "Security ML", "Pandas"],
    links: {
      code: "https://github.com/i-MMANTECH",
    },
  },
  {
    id: "ner-model",
    title: "Named Entity Recognition (NER)",
    category: "AI/ML",
    year: "2024",
    description:
      "NLP pipeline extracting and categorizing persons, locations, and dates from unstructured text. Reusable structured-output component for search and ingest pipelines.",
    tech: ["Python", "NLP", "Information Retrieval"],
    links: {
      code: "https://github.com/i-MMANTECH",
    },
  },
  {
    id: "cancer-prediction",
    title: "Cancer Risk Prediction",
    category: "AI/ML",
    year: "2024",
    description:
      "High-accuracy diagnostic model trained on clinical datasets for proactive risk assessment. Emphasis on reproducible feature engineering and explainable classification outputs for clinical review contexts.",
    tech: ["Python", "Scikit-learn", "Pandas", "Clinical Data"],
    links: {
      code: "https://github.com/i-MMANTECH",
    },
  },
  {
    id: "facial-recognition",
    title: "Facial Recognition Attendance",
    category: "AI/ML",
    year: "2023",
    description:
      "Computer-vision attendance platform combining application-tier capture with recognition pipelines. Captures, normalizes, and classifies facial images, persisting events to a secured relational store. Productionized for institutions and live events.",
    tech: ["PHP", "JavaScript", "OpenCV", "MySQL"],
    links: {
      code: "https://github.com/i-MMANTECH",
    },
  },
  {
    id: "image-editor",
    title: "Image Editor",
    category: "Web",
    year: "2023",
    description:
      "Browser-native image editor with filter, crop, and export pipeline. Demonstrates canvas-based compositing and stateless transformation flow.",
    tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
    links: {
      code: "https://github.com/i-MMANTECH/image-editor",
      live: "https://imman-image-editor.netlify.app/",
    },
  },
  {
    id: "language-translator",
    title: "Language Translator",
    category: "Web",
    year: "2023",
    description:
      "Real-time translation interface integrating a public translation API with a clean input/output state model. Built as a single-page application with minimal dependencies.",
    tech: ["JavaScript", "REST APIs", "CSS"],
    links: {
      code: "https://github.com/i-MMANTECH/imman_translator",
      live: "https://immanlangtranslator.netlify.app/",
    },
  },
  {
    id: "weather-app",
    title: "Weather App",
    category: "Web",
    year: "2023",
    description:
      "Real-time weather client integrating geolocation with a public weather API. Conditional rendering for forecast states and a minimal-dependency component architecture focused on responsive load behavior.",
    tech: ["JavaScript", "REST APIs", "Geolocation"],
    links: {
      code: "https://github.com/i-MMANTECH/imman_Weather_App",
      live: "https://imman-weather-app.netlify.app/",
    },
  },
] as const;
