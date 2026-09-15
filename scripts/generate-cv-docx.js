const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel, BorderStyle } = require('docx');

// Helper to create a section heading
function createHeading(text) {
    return new Paragraph({
        text: text,
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 240, after: 120 },
        border: {
            bottom: {
                color: "000000",
                space: 1,
                value: BorderStyle.SINGLE,
                size: 6,
            },
        },
    });
}

// Helper to create a bold prefix bullet
function createSkillBullet(prefix, items) {
    return new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 60 },
        children: [
            new TextRun({ text: prefix + " ", bold: true }),
            new TextRun({ text: items }),
        ],
    });
}

// Helper to create a job entry
function createJob(company, locationDate, title, bullets) {
    const p1 = new Paragraph({
        spacing: { before: 120, after: 60 },
        children: [
            new TextRun({ text: company, bold: true, size: 20 }), // 10pt
        ],
    });
    // A bit hacky without proper tab stops, so let's just make it a new line
    // since strict ATS doesn't care if it's on one line or two.
    // Actually, let's put it on the same line if possible, or just the next line.
    
    const p2 = new Paragraph({
        spacing: { after: 100 },
        children: [
            new TextRun({ text: title, bold: true, italics: true, size: 18 }), // 9pt
            new TextRun({ text: " | " + locationDate, size: 18 }),
        ],
    });

    const bulletParagraphs = bullets.map(b => new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 60 },
        children: [new TextRun({ text: b, size: 18 })],
    }));

    return [p1, p2, ...bulletParagraphs];
}

// Helper for flagship systems
function createProject(title, desc) {
    return new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 60 },
        children: [
            new TextRun({ text: title + " ", bold: true, size: 18 }),
            new TextRun({ text: desc, size: 18 }),
        ],
    });
}

const doc = new Document({
    styles: {
        paragraphStyles: [
            {
                id: "Normal",
                name: "Normal",
                basedOn: "Normal",
                next: "Normal",
                quickFormat: true,
                run: {
                    font: "Arial",
                    size: 18, // 9pt
                    color: "000000",
                },
                paragraph: {
                    spacing: { line: 276, before: 0, after: 0 }, // 1.15 line height
                },
            },
            {
                id: "Heading2",
                name: "Heading 2",
                basedOn: "Normal",
                next: "Normal",
                quickFormat: true,
                run: {
                    font: "Arial",
                    size: 22, // 11pt
                    bold: true,
                    color: "000000",
                },
            },
        ],
    },
    sections: [
        {
            properties: {
                page: {
                    margin: { top: 720, right: 720, bottom: 720, left: 720 }, // 0.5 inches
                },
            },
            children: [
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                        new TextRun({ text: "EMMANUEL ARO", bold: true, size: 40 }), // 20pt
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 60, after: 100 },
                    children: [
                        new TextRun({ text: "Full-Stack & Systems Software Engineer | Distributed Systems & Applied AI", bold: true, size: 20 }), // 10pt
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 300 },
                    children: [
                        new TextRun({ text: "Lagos, Nigeria (Open to Global Remote & Relocation) | +234 907 331 8795 | emmanuelaro87@gmail.com | linkedin.com/in/emmanuel-aro | github.com/i-MMANTECH | emmanuelaro.netlify.app" }),
                    ],
                }),

                // EXEC PROFILE
                createHeading("EXECUTIVE TECHNICAL PROFILE"),
                new Paragraph({
                    spacing: { after: 120 },
                    children: [
                        new TextRun({ text: "Full-Stack & Systems Software Engineer with 4+ years of professional engineering experience architecting distributed platforms, real-time systems, and production-grade applied AI pipelines. Proven track record of shipping end-to-end solutions using Python (Django Ninja), TypeScript (Next.js App Router), PostgreSQL, and Docker across 7 companies globally. Adept at designing defensible API contracts, orchestrating GPU serverless infrastructure for ML workloads, and optimizing database layers to ensure high availability, low latency, and massive concurrency under load." }),
                    ],
                }),

                // TECHNICAL ARSENAL
                createHeading("TECHNICAL ARSENAL"),
                createSkillBullet("Languages:", "Python, TypeScript, JavaScript (ES4+), PHP, SQL, HTML5/CSS3"),
                createSkillBullet("Frameworks & Full-Stack:", "Next.js (App Router), React, Django / Django Ninja, Laravel, FastAPI, Node.js"),
                createSkillBullet("Distributed Systems & APIs:", "RESTful APIs, GraphQL, WebSockets, Celery, Redis, Task Queues"),
                createSkillBullet("Applied AI & Computer Vision:", "Agentic RAG (LlamaIndex, LangGraph), Ollama, OpenRouter, WhisperX, LexNLP, OpenCV, Scikit-learn"),
                createSkillBullet("Databases & Storage:", "PostgreSQL (pgvector, RLS), Supabase, MySQL, Redis, Schema Modeling & Query Optimization"),
                createSkillBullet("Cloud, DevOps & Tooling:", "Docker, Docker Compose, AWS (EC2, S3, RDS), Modal (Serverless GPU), Linux/Bash, GitHub Actions CI/CD, Postman"),

                // EXP
                createHeading("PROFESSIONAL EXPERIENCE"),
                ...createJob(
                    "LunarTech",
                    "May 2026 – Present | Austin, TX (Remote)",
                    "Software Engineer — AI Systems & Platform Engineering",
                    [
                        "Engineered Agentic RAG pipelines (LangGraph, LlamaIndex) for Rosendahl, a self-hosted legal AI workspace, delivering fully evidence-linked and formally verified outputs across 121+ active ECHR case workspaces.",
                        "Designed legal document processing APIs using LexNLP and spaCy for automated entity extraction and risk scoring, enforcing a 4-tier confidential AI model routing strategy (OpenRouter, Claude, local Ollama) to maintain strict data privacy.",
                        "Architected Dark Phoenix, an end-to-end GPU video pipeline on Modal (TalkNet, WhisperX, Gemini AI, ffmpeg) for automated podcast clipping, YouTube ingestion, and provider-agnostic S3 storage.",
                        "Executed comprehensive performance QA on Octavia, an AI dubbing platform (60+ languages, 99% lip-sync accuracy), implementing critical database optimization techniques that eliminated bottlenecks and enabled seamless scaling for over 10,000 users worldwide."
                    ]
                ),
                ...createJob(
                    "Boxonia Blueprint",
                    "Oct 2024 – Present | Lagos, NG (Contract / Concurrent)",
                    "Software Engineer (Platform & Ecosystem Architecture)",
                    [
                        "Conceived and engineered a greenfield digital platform for a 360° film production and talent management studio, establishing the company's first robust online presence and distributed story workflow engine.",
                        "Architected a full Python-based platform ecosystem, consolidating workflows across 5+ distributed production teams to scale story development, talent directory management, and project portfolio showcasing.",
                        "Developed an automated talent-booking and cross-border coordination system, enabling zero-friction client onboarding and reducing scheduling operational overhead by 40%.",
                        "Scaled relational schemas and secured RESTful APIs to ensure high-availability data synchronization between international production units under strict SLA requirements."
                    ]
                ),
                ...createJob(
                    "Tech4mation (NativeTalk)",
                    "Feb 2026 – Jun 2026 | Lagos, NG",
                    "Software Developer, Platform Engineering",
                    [
                        "Led full-stack architecture for NativeTalk CRM (Next.js App Router, Django Ninja, PostgreSQL), driving aggressive bug-triage cycles that resolved critical customer-facing issues and directly increased company revenue.",
                        "Architected TaskForge Pro, a high-throughput internal team-management platform with decoupled microservice boundaries and strictly typed API contracts.",
                        "Standardized engineering environments by implementing containerized Docker workflows, successfully reducing new-developer onboarding time from 3 days to under 2 hours."
                    ]
                ),
                ...createJob(
                    "Ornament & Crime",
                    "Aug 2024 – Mar 2026 | Birmingham, AL, US",
                    "Frontend Engineer (Shopify Developer)",
                    [
                        "Architected the migration of a legacy Shopify Plus storefront to a componentized Liquid 2.0 and Tailwind CSS system, reducing page load times by 48% and driving a 31% uplift in checkout conversion.",
                        "Engineered custom Shopify app integrations (inventory sync, loyalty tiers, fulfillment webhooks) via the Shopify Admin GraphQL API, eliminating manual operations and saving 20+ staff hours per week.",
                        "Led the brand's migration to a headless-compatible architecture, setting the engineering foundation for future Next.js storefront decoupling with zero downtime."
                    ]
                ),
                ...createJob(
                    "Bincom Dev Center",
                    "Sep 2025 – Jan 2026 | Lagos, NG",
                    "Full Stack Developer",
                    [
                        "Architected SEO-optimized frontend interfaces using Next.js (App Router) and React, leveraging Server Components and advanced data-fetching patterns to reduce First Contentful Paint (FCP) by 35%.",
                        "Overhauled relational MySQL schemas and refactored critical SQL queries, eliminating latency spikes and accelerating complex data retrieval by 20% under peak load.",
                        "Mentored junior engineers in TypeScript best practices, modular component design, and strict Git workflows, measurably elevating team delivery velocity."
                    ]
                ),
                ...createJob(
                    "CyberBuddies",
                    "Apr 2024 – Aug 2024 | Ibadan, NG",
                    "Frontend Engineer",
                    [
                        "Engineered high-quality frontend UI components for an AI-powered Business Operating System™, establishing core visual language patterns that directly elevated user satisfaction and drove new B2B revenue growth.",
                        "Supported the migration of production workloads to AWS infrastructure, implementing optimization strategies that reduced cloud operating costs by 18% while maintaining 99.9% uptime SLAs."
                    ]
                ),
                ...createJob(
                    "SafeSpace.org Association",
                    "May 2023 – Feb 2024 | California, US (Remote)",
                    "Operations QA & Automation Engineer",
                    [
                        "Deployed Python/Django automated review pipelines, replacing manual verification loops to achieve a 30% throughput gain and a 50% reduction in data-entry errors.",
                        "Instituted rigorous automated testing protocols within containerized Docker environments to establish company-wide benchmarks for system integrity."
                    ]
                ),
                ...createJob(
                    "Fiatci.io",
                    "Sep 2022 – Mar 2023 | Brussels, BE (Remote)",
                    "Lead Full Stack Engineer",
                    [
                        "Rapidly promoted to Lead Full Stack Engineer based on consistent technical delivery, taking full ownership of a 7-person cross-functional engineering team.",
                        "Directed the end-to-end architecture, development, and production deployment of the company’s flagship platform, culminating in the first successful commercial product launch in company history.",
                        "Established comprehensive technical direction across frontend, backend, and DevOps infrastructure, implementing rigorous code review standards, CI/CD release strategies, and zero-downtime production cutover protocols."
                    ]
                ),

                // FLAGSHIP SYSTEMS
                createHeading("FLAGSHIP SYSTEMS & APPLIED AI PROJECTS"),
                createProject("Geod (Sovereign AI Workspace):", "Architected a unified real-time collaboration workspace featuring WebRTC audio/video, multi-modal OCR, a sandboxed code runtime, and decoupled vector/queue pipelines with zero vendor lock-in."),
                createProject("Rosendahl (Legal AI Engine):", "Engineered a legal document processing platform utilizing LangGraph and LlamaIndex for multi-tier confidential routing and LexNLP for automated entity extraction."),
                createProject("Dark Phoenix (GPU Video Ingestion Pipeline):", "Developed an end-to-end automated podcast clipping pipeline deployed on Modal serverless infrastructure, integrating WhisperX, TalkNet, and Gemini AI."),
                createProject("Enterprise Malware Detection Engine:", "Built a production-grade supervised ML classifier for real-time endpoint threat detection, incorporating automated feature extraction and continuous retraining pipelines."),

                // EDUCATION
                createHeading("EDUCATION & CREDENTIALS"),
                new Paragraph({
                    spacing: { after: 60 },
                    children: [
                        new TextRun({ text: "B.Sc. in Computer Science ", bold: true }),
                        new TextRun({ text: "— Federal University Oye-Ekiti, Nigeria (2025)" }),
                    ],
                }),
                new Paragraph({
                    spacing: { after: 60 },
                    children: [
                        new TextRun({ text: "Full Stack Engineer Certification ", bold: true }),
                        new TextRun({ text: "— Google Developer Student Clubs (2024)" }),
                    ],
                }),
                new Paragraph({
                    spacing: { after: 60 },
                    children: [
                        new TextRun({ text: "Advanced Software Engineering Certification ", bold: true }),
                        new TextRun({ text: "— GB-Tech Learning Centre, Nigeria (2023)" }),
                    ],
                }),
            ],
        },
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("public/Emmanuel_Aro_CV.docx", buffer);
    console.log("✅ DOCX native build generated successfully!");
});
