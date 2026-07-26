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
    /** Internal route to a full case-study page. */
    caseStudy?: string;
  };
};

export const projects: readonly Project[] = [
  {
    id: "nativetalk-ticketing",
    title: "Nativetalk Support Operations Dashboard",
    category: "Web",
    year: "2026",
    description:
      "Architected a centralized ticket-management dashboard for the Nativetalk enterprise support stack — tracking customer inquiries, managing agent assignment, and surfacing real-time completion-rate metrics in a single operator view. Built around strict typed API contracts and role-based access control (RBAC).",
    tech: ["Next.js", "TypeScript", "REST APIs", "Vercel"],
    links: {
      caseStudy: "/work/nativetalk-ticketing",
      code: "https://github.com/i-MMANTECH/Ticket-Matrix",
      live: "https://ticket-matrix-six.vercel.app",
    },
  },
  {
    id: "boxonia-blueprint",
    title: "Boxonia Blueprint Digital Ecosystem",
    category: "Web",
    year: "2025",
    description:
      "Architected and developed a production digital platform for global film production that centralizes story-development pipelines and talent-management workflows across distributed production teams. Shipped an automated talent-booking layer that removed cross-border coordination friction for high-profile international clients.",
    tech: ["Python", "REST APIs", "Web Platform"],
    links: {
      code: "https://github.com/i-MMANTECH/boxonia_strezz",
      live: "https://www.boxonia.com/",
    },
  },
  {
    id: "malware-detection",
    title: "Enterprise Malware Detection & Classification Engine",
    category: "AI/ML",
    year: "2024",
    description:
      "Designed and deployed a Python-based security analytics platform applying supervised machine learning to real-time endpoint malware classification. Structured with automated feature extraction and retraining pipelines for evolving threat corpora.",
    tech: ["Python", "Scikit-learn", "Security ML", "Pandas"],
    links: {
      code: "https://github.com/i-MMANTECH/Malware-Detection-Python-Project",
    },
  },
  {
    id: "ner-model",
    title: "NLP Misinformation & Named Entity Extraction Engine",
    category: "AI/ML",
    year: "2024",
    description:
      "Shipped end-to-end NLP pipelines in Python leveraging statistical embeddings and tokenization primitives to categorize unstructured text, extract critical named entities (NER), and detect disinformation in high-noise social data streams.",
    tech: ["Python", "NLP", "Information Retrieval"],
    links: {
      code: "https://github.com/i-MMANTECH/imman_NER_model",
    },
  },
  {
    id: "cancer-prediction",
    title: "Clinical Oncology Risk Prediction Model",
    category: "AI/ML",
    year: "2024",
    description:
      "Developed an explainable, high-accuracy diagnostic classification model trained on clinical patient datasets for proactive risk assessment. Emphasizes reproducible feature engineering and interpretable outputs for clinical decision support.",
    tech: ["Python", "Scikit-learn", "Pandas", "Clinical Data"],
    links: {
      code: "https://github.com/i-MMANTECH/imman_Cancer_prediction_model",
    },
  },
  {
    id: "facial-recognition",
    title: "Real-Time Computer Vision Attendance Platform",
    category: "AI/ML",
    year: "2023",
    description:
      "Engineered a high-speed biometric attendance system integrating webcam image streaming with OpenCV computer-vision pipelines. Automated real-time facial capture, normalization, and identification against a secured relational store.",
    tech: ["PHP", "JavaScript", "OpenCV", "MySQL"],
    links: {
      code: "https://github.com/i-MMANTECH/imman_Facial_recognition_Attendance_System",
    },
  },
  {
    id: "image-editor",
    title: "Browser-Native Image Processing Suite",
    category: "Web",
    year: "2023",
    description:
      "Engineered a browser-native image manipulation suite with real-time filter compositing, cropping, and export pipelines. Implemented high-performance HTML5 Canvas processing with a stateless transformation flow.",
    tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
    links: {
      code: "https://github.com/i-MMANTECH/image-editor",
      live: "https://imman-image-editor.netlify.app/",
    },
  },
  {
    id: "language-translator",
    title: "Real-Time Translation Interface",
    category: "Web",
    year: "2023",
    description:
      "Architected a low-latency translation single-page application integrating enterprise translation REST APIs. Designed around a deterministic input/output state model and lightweight, zero-dependency component rendering.",
    tech: ["JavaScript", "REST APIs", "CSS"],
    links: {
      code: "https://github.com/i-MMANTECH/imman_translator",
      live: "https://immanlangtranslator.netlify.app/",
    },
  },
  {
    id: "weather-app",
    title: "Geospatial Real-Time Weather Tracker",
    category: "Web",
    year: "2023",
    description:
      "Built a geospatial weather tracking web app integrating browser geolocation services and external meteorological REST APIs. Implemented reactive conditional rendering for forecast states with optimized data fetching.",
    tech: ["JavaScript", "REST APIs", "Geolocation"],
    links: {
      code: "https://github.com/i-MMANTECH/imman_Weather_App",
      live: "https://imman-weather-app.netlify.app/",
    },
  },
] as const;
