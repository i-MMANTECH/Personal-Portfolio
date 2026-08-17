export type CaseStudyBlock = {
  heading: string;
  body: readonly string[];
};

export type CaseStudyDetails = {
  meta: readonly { label: string; value: string }[];
  sections: readonly CaseStudyBlock[];
};

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
  caseStudyDetails: CaseStudyDetails;
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
      caseStudy: "/work/geod-ai",
    },
    caseStudyDetails: {
      meta: [
        { label: "Role", value: "Lead Architect & Developer" },
        { label: "Year", value: "2026" },
        { label: "Context", value: "Sovereign AI Infrastructure" },
        { label: "Status", value: "Shipped & Active" },
      ],
      sections: [
        {
          heading: "Overview",
          body: [
            "Geod is a sovereign AI workspace that bridges the gap between real-time team collaboration and advanced AI augmentation. It offers a unified interface for channels, direct messages, and huddles, while embedding proprietary AI engines directly into the workflow.",
          ],
        },
        {
          heading: "The problem",
          body: [
            "Modern teams use fragmented tools for collaboration and AI assistance. Constantly context-switching between chat applications (like Slack) and AI tools (like ChatGPT) destroys productivity. Furthermore, vendor lock-in with major AI providers limits flexibility and data sovereignty.",
          ],
        },
        {
          heading: "My approach",
          body: [
            "I engineered a unified platform that natively integrates four proprietary AI engines (Quantum, Deep Reasoner, Cognitive Synthesis, Neural Vision) directly into a real-time messaging interface. I built the system from the ground up using a serverless architecture to ensure high scalability and zero vendor lock-in.",
          ],
        },
        {
          heading: "Architecture decisions",
          body: [
            "Edge-native data layer — Utilizing Neon SQL for serverless Postgres and Upstash Redis for extreme low-latency caching and pub/sub messaging.",
            "Real-time primitives — Implemented WebRTC via LiveKit to support high-throughput, low-latency audio/video huddles.",
            "Autonomous Code Runtime — Engineered a sandboxed environment allowing the AI to safely execute and validate generated code on the fly.",
          ],
        },
        {
          heading: "Outcome",
          body: [
            "Geod successfully delivers a cohesive, unified environment where teams can collaborate seamlessly alongside powerful, multi-modal AI agents without being tied to a single AI provider's ecosystem.",
          ],
        },
      ],
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
    links: {
      caseStudy: "/work/rosendahl-legal-ai",
    },
    caseStudyDetails: {
      meta: [
        { label: "Role", value: "Backend AI Engineer" },
        { label: "Year", value: "2026" },
        { label: "Context", value: "LunarTech" },
        { label: "Status", value: "In production" },
      ],
      sections: [
        {
          heading: "Overview",
          body: [
            "Rosendahl is an enterprise-grade legal AI platform built for LunarTech. It acts as an intelligent operating environment that treats complex ECHR legal cases like codebases, providing attorneys with an autonomous 'Claude Code for law' experience.",
          ],
        },
        {
          heading: "The problem",
          body: [
            "Legal professionals spend countless hours manually parsing unstructured case files, searching for citations, and assessing admissibility risks. Existing RAG solutions lack the domain-specific rigor and strict data-confidentiality controls required by law firms.",
          ],
        },
        {
          heading: "My approach",
          body: [
            "I engineered advanced Agentic RAG pipelines and custom legal document processing APIs using LexNLP and Blackstone/spaCy. These services automatically extract named entities, map complex citation graphs, and compute admissibility-risk scores across massive document corpora.",
          ],
        },
        {
          heading: "Architecture decisions",
          body: [
            "Confidential model routing — Implemented a robust four-tier routing strategy (OpenRouter, Claude, and local Ollama deployments) to ensure highly sensitive legal data never leaves the secure boundary.",
            "Agentic orchestration — Utilized LangGraph and LlamaIndex to build stateful AI agents capable of multi-step reasoning and deep contextual retrieval across 121+ active case workspaces.",
          ],
        },
        {
          heading: "Outcome",
          body: [
            "Rosendahl radically accelerated case preparation timelines. The platform successfully automates the extraction and structuring of dense legal arguments while maintaining strict compliance with legal data-privacy standards.",
          ],
        },
      ],
    },
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
      caseStudy: "/work/dark-phoenix-podcast-clipper",
    },
    caseStudyDetails: {
      meta: [
        { label: "Role", value: "Full-Stack AI Engineer" },
        { label: "Year", value: "2026" },
        { label: "Context", value: "LunarTech" },
        { label: "Status", value: "Shipped & Active" },
      ],
      sections: [
        {
          heading: "Overview",
          body: [
            "Dark Phoenix is an end-to-end AI podcast clipping engine that ingests long-form video, analyzes it for viral moments using generative AI, and renders high-quality short-form clips (with subtitles and watermarks) entirely in the cloud.",
          ],
        },
        {
          heading: "The problem",
          body: [
            "Producing short-form clips from long podcasts is a highly manual, labor-intensive process requiring video editors to watch hours of content. The previous iteration of the platform was fundamentally broken, suffering from massive GPU timeouts and deployment failures.",
          ],
        },
        {
          heading: "My approach",
          body: [
            "I took ownership of the entire stack, systematically resolving 8 critical production failures across Modal, WhisperX, Vercel, and Next.js. I rebuilt the ingestion pipeline using yt-dlp and routed all heavy AI processing through a highly optimized, asynchronous GPU pipeline.",
          ],
        },
        {
          heading: "Architecture decisions",
          body: [
            "Asynchronous GPU orchestration — Deployed the intensive AI workloads (TalkNet active-speaker detection and WhisperX transcription) on Modal to ensure scalable, on-demand GPU provisioning without locking up the main server.",
            "AI-driven moment selection — Leveraged Gemini AI to contextually analyze the highly-accurate transcripts and isolate the most engaging segments.",
            "Headless rendering — Engineered a server-side ffmpeg pipeline to dynamically crop vertical video, burn in branded watermarks, and upload the final MP4s to Backblaze B2.",
          ],
        },
        {
          heading: "Outcome",
          body: [
            "The platform was successfully rescued from a broken state and launched into production. It now autonomously processes hours of podcast footage into highly engaging, ready-to-publish social media clips in a fraction of the time.",
          ],
        },
      ],
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
    caseStudyDetails: {
      meta: [
        { label: "Role", value: "Design + Build (solo)" },
        { label: "Year", value: "2026" },
        { label: "Context", value: "Tech4mation · Nativetalk" },
        { label: "Status", value: "In production" },
      ],
      sections: [
        {
          heading: "Overview",
          body: [
            "Nativetalk Ticketing is the support-operations dashboard for the Nativetalk stack. It gives a support operator one surface to triage customer inquiries, assign agents, and track how fast tickets actually close.",
          ],
        },
        {
          heading: "The problem",
          body: [
            "Support requests arrived across scattered channels with no single queue. Operators context-switched between tools to find, claim, and resolve tickets — and managers had no reliable signal for how the team was performing.",
            "There was no honest completion-rate number. \"How are we doing?\" could only be answered by manually counting, which meant it rarely got answered at all.",
          ],
        },
        {
          heading: "My approach",
          body: [
            "I designed it as a single operator surface backed by a typed API contract. Every ticket, agent, and status transition is a typed entity end-to-end — the dashboard and the backend share one schema, so a malformed payload fails at the boundary instead of corrupting a view.",
            "Role-based access separates admin operators from agents: capabilities are gated on the server and mirrored in the UI, so the interface never offers an action the caller can't actually perform.",
          ],
        },
        {
          heading: "Architecture decisions",
          body: [
            "Typed contract first — I modelled the ticket lifecycle as explicit states before writing a single view, so the UI could only ever render a state the system actually supports.",
            "Server-derived metrics — completion rate and throughput are computed server-side and surfaced in one overview panel. Managers get a single number they can trust, not a spreadsheet.",
            "Stateless views — each screen derives from server state with no competing client-side source of truth, which removes a whole class of drift bugs.",
          ],
        },
        {
          heading: "Outcome",
          body: [
            "Operators now triage from one queue instead of several tools. Assignment is a single action. Completion-rate metrics are visible in the same view as the work, with no separate report to run.",
            "The dashboard is in production on the Nativetalk stack and is the surface support runs on day to day.",
          ],
        },
      ],
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
      caseStudy: "/work/boxonia-blueprint",
    },
    caseStudyDetails: {
      meta: [
        { label: "Role", value: "Lead Engineer" },
        { label: "Year", value: "2025" },
        { label: "Context", value: "Global Film Production" },
        { label: "Status", value: "In production" },
      ],
      sections: [
        {
          heading: "Overview",
          body: [
            "Boxonia Blueprint is an expansive digital platform designed specifically for the global film production industry. It acts as a central hub for story development, asset management, and complex talent-booking workflows.",
          ],
        },
        {
          heading: "The problem",
          body: [
            "International film production teams suffer from severe operational friction when coordinating cross-border talent logistics and tracking story pipelines across disparate legacy systems.",
          ],
        },
        {
          heading: "My approach",
          body: [
            "I consolidated the fragmented workflows into a single, cohesive web platform backed by a robust Python-based API layer. I prioritized a frictionless user experience tailored to non-technical creative professionals while ensuring strict data integrity under the hood.",
          ],
        },
        {
          heading: "Architecture decisions",
          body: [
            "Automated coordination layer — Designed a custom booking and scheduling engine that automatically resolves timezone disparities and cross-border logistical conflicts.",
            "API-first design — Built the core business logic as a set of decoupled REST APIs, allowing the platform to easily integrate with external third-party production tools in the future.",
          ],
        },
        {
          heading: "Outcome",
          body: [
            "The platform eliminated major logistical bottlenecks, successfully onboarding high-profile international clients and drastically reducing the administrative overhead associated with cross-border film production.",
          ],
        },
      ],
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
      caseStudy: "/work/malware-detection",
    },
    caseStudyDetails: {
      meta: [
        { label: "Role", value: "Machine Learning Engineer" },
        { label: "Year", value: "2024" },
        { label: "Context", value: "Cybersecurity" },
        { label: "Status", value: "Archived" },
      ],
      sections: [
        {
          heading: "Overview",
          body: [
            "This enterprise-grade security analytics platform leverages supervised machine learning to classify and intercept endpoint malware threats in real-time.",
          ],
        },
        {
          heading: "The problem",
          body: [
            "Traditional signature-based antivirus solutions are chronically slow to respond to zero-day threats. Security operation centers require heuristic, ML-driven models that can identify anomalous behavior and classify polymorphic malware instantly.",
          ],
        },
        {
          heading: "My approach",
          body: [
            "I built a scalable Python ML pipeline that ingests raw executable metadata and dynamic behavioral logs. By automating feature extraction using Pandas, the system processes massive threat corpora to continuously train and evaluate classification models using Scikit-learn.",
          ],
        },
        {
          heading: "Architecture decisions",
          body: [
            "Automated feature engineering — Designed a robust extraction layer that strips highly predictive structural features from PE (Portable Executable) files without requiring sandbox execution.",
            "Continuous retraining loops — Structured the architecture to natively support automated model retraining as new threat data is ingested, preventing model drift.",
          ],
        },
        {
          heading: "Outcome",
          body: [
            "The resulting classification engine demonstrated exceptionally high accuracy rates against a diverse dataset of known and zero-day malware, providing a reliable proof-of-concept for ML-augmented endpoint security.",
          ],
        },
      ],
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
      caseStudy: "/work/ner-model",
    },
    caseStudyDetails: {
      meta: [
        { label: "Role", value: "Data Scientist" },
        { label: "Year", value: "2024" },
        { label: "Context", value: "Information Integrity" },
        { label: "Status", value: "Archived" },
      ],
      sections: [
        {
          heading: "Overview",
          body: [
            "This NLP engine was built to ingest high-velocity, high-noise social data streams, extract vital named entities, and heuristically flag potential misinformation campaigns.",
          ],
        },
        {
          heading: "The problem",
          body: [
            "The sheer volume of unstructured text generated on social platforms makes manual moderation impossible. Identifying coordinated disinformation requires sophisticated tokenization and entity extraction to map out relationships and identify suspicious patterns.",
          ],
        },
        {
          heading: "My approach",
          body: [
            "I developed an end-to-end natural language processing pipeline in Python. By leveraging statistical embeddings, the system transforms unstructured text into structured, queryable data, automatically identifying people, organizations, and geographic locations (NER).",
          ],
        },
        {
          heading: "Architecture decisions",
          body: [
            "Statistical embeddings — Utilized advanced vector embeddings to capture semantic relationships between words, allowing the engine to detect subtle nuances in disinformation narratives.",
            "Optimized tokenization — Implemented custom tokenization primitives specifically tuned for the chaotic, slang-heavy nature of social media text streams.",
          ],
        },
        {
          heading: "Outcome",
          body: [
            "The model effectively isolated critical entities from highly unstructured data and successfully highlighted statistically anomalous text patterns indicative of coordinated misinformation.",
          ],
        },
      ],
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
      caseStudy: "/work/cancer-prediction",
    },
    caseStudyDetails: {
      meta: [
        { label: "Role", value: "ML Researcher" },
        { label: "Year", value: "2024" },
        { label: "Context", value: "Healthcare AI" },
        { label: "Status", value: "Archived" },
      ],
      sections: [
        {
          heading: "Overview",
          body: [
            "This machine learning project delivers a diagnostic classification model designed to proactively assess oncology risks based on historical clinical patient datasets.",
          ],
        },
        {
          heading: "The problem",
          body: [
            "In clinical environments, predictive accuracy is insufficient on its own. \"Black box\" ML models face massive resistance from medical professionals who require interpretable, explainable reasoning before making critical diagnostic decisions.",
          ],
        },
        {
          heading: "My approach",
          body: [
            "I prioritized explainability from day one. I engineered a supervised classification model using Scikit-learn and Pandas that focuses heavily on reproducible feature engineering, ensuring that every diagnostic output can be directly traced back to specific clinical biomarkers.",
          ],
        },
        {
          heading: "Architecture decisions",
          body: [
            "Interpretable classification algorithms — Selected model architectures (like decision trees and logistic regression) that naturally lend themselves to feature importance analysis over highly opaque deep learning networks.",
            "Rigorous data normalization — Implemented strict data preprocessing pipelines to handle the inherent noise, missing values, and scaling issues typical in raw clinical datasets.",
          ],
        },
        {
          heading: "Outcome",
          body: [
            "The resulting model achieved high diagnostic accuracy while maintaining complete transparency. It successfully demonstrated how machine learning can be safely applied as a trusted decision-support tool in clinical oncology.",
          ],
        },
      ],
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
      caseStudy: "/work/facial-recognition",
    },
    caseStudyDetails: {
      meta: [
        { label: "Role", value: "Full-Stack Developer" },
        { label: "Year", value: "2023" },
        { label: "Context", value: "Computer Vision" },
        { label: "Status", value: "Archived" },
      ],
      sections: [
        {
          heading: "Overview",
          body: [
            "This biometric platform replaces manual roll calls and keycard systems with a real-time, computer-vision driven attendance tracker powered by OpenCV.",
          ],
        },
        {
          heading: "The problem",
          body: [
            "Traditional attendance tracking methods are slow, prone to buddy-punching, and require physical contact or specialized hardware. Organizations need frictionless, secure, and instantaneous verification.",
          ],
        },
        {
          heading: "My approach",
          body: [
            "I developed a web-based capture interface using JavaScript that streams webcam data directly into an OpenCV processing pipeline. The backend rapidly normalizes the incoming frames and performs facial identification against a secure MySQL relational database.",
          ],
        },
        {
          heading: "Architecture decisions",
          body: [
            "Real-time normalization — Built a preprocessing layer that handles varied lighting conditions and facial angles before attempting classification, drastically reducing false negatives.",
            "Hybrid stack — Paired a lightweight PHP/MySQL backend for rapid data storage with a heavy OpenCV processing layer, balancing web accessibility with intensive mathematical computations.",
          ],
        },
        {
          heading: "Outcome",
          body: [
            "The platform achieved highly reliable facial identification in real-time, effectively demonstrating the viability of browser-based biometric access control without requiring proprietary hardware.",
          ],
        },
      ],
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
      caseStudy: "/work/image-editor",
    },
    caseStudyDetails: {
      meta: [
        { label: "Role", value: "Frontend Engineer" },
        { label: "Year", value: "2023" },
        { label: "Context", value: "Browser Utilities" },
        { label: "Status", value: "Live" },
      ],
      sections: [
        {
          heading: "Overview",
          body: [
            "A lightweight, exceptionally fast image manipulation application built entirely within the browser, requiring zero server-side rendering or backend processing.",
          ],
        },
        {
          heading: "The problem",
          body: [
            "Most web-based image editors rely on heavy server-side processing, resulting in sluggish UI interactions, slow upload/download times, and privacy concerns regarding user data.",
          ],
        },
        {
          heading: "My approach",
          body: [
            "I architected the entire application natively in the browser using raw JavaScript and the HTML5 Canvas API. This allowed for instantaneous filter compositing, cropping, and rendering directly on the user's local machine.",
          ],
        },
        {
          heading: "Architecture decisions",
          body: [
            "Stateless transformation flow — Ensured that every filter or edit applied to the canvas was non-destructive and easily reversible by managing a robust state stack.",
            "Zero dependencies — By strictly using Vanilla JavaScript and CSS, the application bundle size remains microscopically small, ensuring instant load times and complete platform agnosticism.",
          ],
        },
        {
          heading: "Outcome",
          body: [
            "The result is a highly performant, privacy-first editing suite that provides Photoshop-lite capabilities instantaneously to any user with a modern web browser.",
          ],
        },
      ],
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
      caseStudy: "/work/language-translator",
    },
    caseStudyDetails: {
      meta: [
        { label: "Role", value: "Frontend Engineer" },
        { label: "Year", value: "2023" },
        { label: "Context", value: "API Integration" },
        { label: "Status", value: "Live" },
      ],
      sections: [
        {
          heading: "Overview",
          body: [
            "A fast, minimalist single-page application that provides real-time language translation by interfacing seamlessly with enterprise-grade translation APIs.",
          ],
        },
        {
          heading: "The problem",
          body: [
            "Translating text efficiently requires managing rapid asynchronous network requests, handling rate limits, and ensuring the UI remains responsive during network latency.",
          ],
        },
        {
          heading: "My approach",
          body: [
            "I designed a deterministic input/output state model that gracefully handles asynchronous API responses. The UI is built with lightweight, zero-dependency components that immediately reflect state changes without jitter.",
          ],
        },
        {
          heading: "Architecture decisions",
          body: [
            "Debounced API fetching — Implemented custom debouncing logic on user input to prevent API rate-limiting and minimize unnecessary network overhead while typing.",
            "Error boundary fallback — Structured the application to elegantly handle network failures or API timeouts, providing immediate, user-friendly feedback rather than failing silently.",
          ],
        },
        {
          heading: "Outcome",
          body: [
            "A highly resilient, low-latency translation interface that feels instantaneous to the end user, demonstrating strong proficiency in asynchronous JavaScript and REST API integration.",
          ],
        },
      ],
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
      caseStudy: "/work/weather-app",
    },
    caseStudyDetails: {
      meta: [
        { label: "Role", value: "Frontend Engineer" },
        { label: "Year", value: "2023" },
        { label: "Context", value: "Data Visualization" },
        { label: "Status", value: "Live" },
      ],
      sections: [
        {
          heading: "Overview",
          body: [
            "A geospatial web application that provides real-time meteorological data and forecasts by combining native browser geolocation capabilities with external weather APIs.",
          ],
        },
        {
          heading: "The problem",
          body: [
            "Fetching complex, multi-day weather data based on dynamic geographical coordinates requires careful management of nested asynchronous calls and complex JSON parsing.",
          ],
        },
        {
          heading: "My approach",
          body: [
            "I built a reactive rendering engine in Vanilla JavaScript that conditionally updates the DOM based on the exact state of the weather data payload. By integrating the native browser Geolocation API, the app instantly tailors the experience to the user's physical location.",
          ],
        },
        {
          heading: "Architecture decisions",
          body: [
            "Optimized data parsing — Designed robust adapter functions to parse and normalize the complex, deeply nested JSON responses from the meteorological APIs before passing the data to the view layer.",
            "Reactive visual feedback — Implemented dynamic CSS class toggling to radically alter the application's visual theme based on the current weather state (e.g., rain, snow, clear skies).",
          ],
        },
        {
          heading: "Outcome",
          body: [
            "The application delivers a highly personalized, visually engaging weather tracking experience that perfectly demonstrates the seamless integration of browser APIs and external data services.",
          ],
        },
      ],
    },
  },
] as const;
