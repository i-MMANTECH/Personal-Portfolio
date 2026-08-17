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
    id: "geod-ai",
    title: "Geod — Sovereign AI Workspace",
    category: "AI/ML",
    year: "2026",
    description:
      "Architected and shipped Geod — a sovereign AI workspace that unifies real-time team collaboration (channels, DMs, huddles) with one-click access to every frontier AI model. Built four proprietary AI engines (Quantum, Deep Reasoner, Cognitive Synthesis, Neural Vision), an autonomous sandboxed code runtime, and a multi-modal OCR pipeline. Zero vendor lock-in by design.",
    tech: ["Next.js", "TypeScript", "Neon SQL", "Upstash Redis", "LiveKit", "LLMs", "WebRTC"],
    links: {
      live: "https://geod-psi.vercel.app/",
      code: "https://github.com/i-MMANTECH/geod",
    },
  },
  {
    id: "rosendahl-legal-ai",
    title: "Rosendahl — Legal AI Platform (LunarTech)",
    category: "AI/ML",
    year: "2026",
    description:
      "Engineered backend services and Agentic RAG pipelines for Rosendahl, LunarTech's self-hosted legal AI platform — a 'Claude Code for law' operating environment that structures ECHR legal cases like codebases. Built legal document processing APIs (LexNLP, Blackstone/spaCy) for named-entity extraction, citation parsing, and admissibility-risk scoring. Enforced a four-tier confidential AI model routing strategy (OpenRouter / Claude / Ollama local) across 121+ active case workspaces.",
    tech: ["Python", "LLMs", "Agentic RAG", "LangGraph", "LlamaIndex", "Ollama", "Next.js", "PostgreSQL", "Docker"],
    links: {},
  },
  {
    id: "dark-phoenix-podcast-clipper",
    title: "Dark Phoenix — AI Podcast Clipper (LunarTech)",
    category: "AI/ML",
    year: "2026",
    description:
      "Delivered LunarTech's AI podcast video clipper end-to-end: engineered the full GPU processing pipeline on Modal (TalkNet active-speaker detection → WhisperX transcription → Gemini AI moment selection → ffmpeg clip render), YouTube ingestion via yt-dlp, provider-agnostic S3 object storage (Backblaze B2), and a branded watermark burned directly into exported MP4s. Resolved 8 critical production deployment failures across Modal, WhisperX, Vercel, and Next.js to bring the platform from broken to fully shipped.",
    tech: ["Python", "Modal (GPU)", "WhisperX", "TalkNet", "Gemini AI", "Next.js", "Supabase", "ffmpeg", "AWS S3"],
    links: {
      live: "https://dark-phoenix-77.vercel.app/",
    },
  },
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
