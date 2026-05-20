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
    id: "nativetalk-ticketing",
    title: "Nativetalk Ticketing",
    category: "Web",
    year: "2026",
    description:
      "I built a centralized ticket-management dashboard for the Nativetalk support stack — it tracks customer inquiries, manages agent assignment, and surfaces completion-rate metrics in a single operator view. I designed it around a typed API contract with role-based access for admin operators.",
    tech: ["Next.js", "TypeScript", "REST APIs", "Vercel"],
    links: {
      code: "https://github.com/i-MMANTECH/Ticket-Matrix",
      live: "https://ticket-matrix-six.vercel.app",
    },
  },
  {
    id: "boxonia-blueprint",
    title: "Boxonia Blueprint",
    category: "Web",
    year: "2025",
    description:
      "I built a production digital platform for global film production that centralizes story-development pipelines and talent-management workflows. I shipped a talent-booking layer that removed cross-border coordination friction for high-profile international clients.",
    tech: ["Python", "REST APIs", "Web Platform"],
    links: {
      code: "https://github.com/i-MMANTECH/boxonia_strezz",
      live: "https://www.boxonia.com/",
    },
  },
  {
    id: "malware-detection",
    title: "Malware Detection System",
    category: "AI/ML",
    year: "2024",
    description:
      "I built a Python security platform that applies supervised machine learning to real-time malware identification and classification. I structured the pipeline to retrain on evolving threat corpora so it stays accurate as new malware emerges.",
    tech: ["Python", "Scikit-learn", "Security ML", "Pandas"],
    links: {
      code: "https://github.com/i-MMANTECH/Malware-Detection-Python-Project",
    },
  },
  {
    id: "ner-model",
    title: "Named Entity Recognition (NER)",
    category: "AI/ML",
    year: "2024",
    description:
      "I designed and shipped an NLP pipeline that extracts and categorizes persons, locations, and dates from unstructured text. I built it as a reusable structured-output component for search and ingest workflows.",
    tech: ["Python", "NLP", "Information Retrieval"],
    links: {
      code: "https://github.com/i-MMANTECH/imman_NER_model",
    },
  },
  {
    id: "cancer-prediction",
    title: "Cancer Risk Prediction",
    category: "AI/ML",
    year: "2024",
    description:
      "I built a high-accuracy diagnostic model on clinical datasets for proactive cancer risk assessment. I focused on reproducible feature engineering and explainable classification outputs suited to clinical review.",
    tech: ["Python", "Scikit-learn", "Pandas", "Clinical Data"],
    links: {
      code: "https://github.com/i-MMANTECH/imman_Cancer_prediction_model",
    },
  },
  {
    id: "facial-recognition",
    title: "Facial Recognition Attendance",
    category: "AI/ML",
    year: "2023",
    description:
      "I engineered a computer-vision attendance platform that captures, normalizes, and classifies facial images, then persists attendance events to a secured store. I productionized it for institutions and live events.",
    tech: ["PHP", "JavaScript", "OpenCV", "MySQL"],
    links: {
      code: "https://github.com/i-MMANTECH/imman_Facial_recognition_Attendance_System",
    },
  },
  {
    id: "image-editor",
    title: "Image Editor",
    category: "Web",
    year: "2023",
    description:
      "I built a browser-native image editor with a filter, crop, and export pipeline. I implemented canvas-based compositing with a stateless transformation flow.",
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
      "I built a real-time translation interface on top of a public translation API. I designed it as a single-page app with a clean input/output state model and minimal dependencies.",
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
      "I built a real-time weather app that integrates geolocation and a public weather API. I implemented conditional rendering for forecast states with a minimal-dependency component architecture.",
    tech: ["JavaScript", "REST APIs", "Geolocation"],
    links: {
      code: "https://github.com/i-MMANTECH/imman_Weather_App",
      live: "https://imman-weather-app.netlify.app/",
    },
  },
] as const;
