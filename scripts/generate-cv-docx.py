from docx import Document
from docx.shared import Pt, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn

def add_header(doc, text, level=2):
    p = doc.add_paragraph()
    run = p.add_run(text)
    run.font.bold = True
    run.font.size = Pt(11)
    # add border bottom
    p.paragraph_format.space_before = Pt(12)
    p.paragraph_format.space_after = Pt(4)
    return p

def add_bullet(doc, text):
    p = doc.add_paragraph(style='List Bullet')
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.left_indent = Inches(0.25)
    
    # Handle bold text in bullets naive parsing
    parts = text.split('**')
    for i, part in enumerate(parts):
        run = p.add_run(part)
        if i % 2 != 0:
            run.font.bold = True

doc = Document()

# Set margins
sections = doc.sections
for section in sections:
    section.top_margin = Inches(0.5)
    section.bottom_margin = Inches(0.5)
    section.left_margin = Inches(0.5)
    section.right_margin = Inches(0.5)

# Set base font
style = doc.styles['Normal']
font = style.font
font.name = 'Arial'
font.size = Pt(9)

# Title
p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = p.add_run("EMMANUEL ARO")
run.font.bold = True
run.font.size = Pt(20)

# Role
p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
p.paragraph_format.space_after = Pt(2)
run = p.add_run("Full-Stack & Systems Software Engineer | Distributed Systems & Applied AI")
run.font.bold = True
run.font.size = Pt(10)

# Contact
p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
p.paragraph_format.space_after = Pt(12)
run = p.add_run("Lagos, Nigeria (Open to Global Remote & Relocation) | +234 907 331 8795 | emmanuelaro87@gmail.com | linkedin.com/in/emmanuel-aro | github.com/i-MMANTECH | emmanuelaro.netlify.app")
run.font.size = Pt(9)

# EXEC PROFILE
add_header(doc, "EXECUTIVE TECHNICAL PROFILE")
p = doc.add_paragraph("Full-Stack & Systems Software Engineer with 6+ years of experience architecting distributed platforms, real-time systems, and production-grade agentic AI pipelines. Proven track record of shipping end-to-end solutions using Python (Django Ninja), TypeScript (Next.js App Router), PostgreSQL, and Docker across 7 companies globally. Adept at designing defensible API contracts, orchestrating GPU serverless infrastructure for ML workloads, and optimizing database layers to ensure high availability, low latency, and massive concurrency under load.")
p.paragraph_format.space_after = Pt(8)

# TECHNICAL ARSENAL
add_header(doc, "TECHNICAL ARSENAL")
add_bullet(doc, "**Languages:** Python, TypeScript, JavaScript (ES4+), PHP, SQL, HTML5/CSS3")
add_bullet(doc, "**Distributed Systems & Backend:** Django Ninja, Node.js, Next.js (App Router), FastAPI, REST APIs, GraphQL, WebSockets, Celery, Redis")
add_bullet(doc, "**Applied AI & Computer Vision:** Agentic RAG (LlamaIndex, LangGraph), Ollama, OpenRouter, WhisperX, LexNLP, OpenCV, Scikit-learn")
add_bullet(doc, "**Cloud, DevOps & Infrastructure:** Docker, Docker Compose, AWS (EC2, S3, RDS), Modal (Serverless GPU), Linux/Bash, GitHub Actions CI/CD")
add_bullet(doc, "**Data & Storage:** PostgreSQL (pgvector, RLS), MySQL, Redis, Supabase, Schema Modeling & Query Optimization")

# PROFESSIONAL EXPERIENCE
add_header(doc, "PROFESSIONAL EXPERIENCE")

def add_job(doc, company, loc_date, title, bullets):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(8)
    p.paragraph_format.space_after = Pt(0)
    # Align left/right
    run1 = p.add_run(company)
    run1.font.bold = True
    run1.font.size = Pt(10)
    
    # tab stop for right align
    p.add_run("\t" + loc_date)
    
    p2 = doc.add_paragraph()
    p2.paragraph_format.space_after = Pt(4)
    run2 = p2.add_run(title)
    run2.font.italic = True
    run2.font.bold = True
    
    for bullet in bullets:
        add_bullet(doc, bullet)

add_job(doc, "LunarTech", "May 2026 – Present | Austin, TX (Remote)", "Software Engineer — AI Systems & Platform Engineering", [
    "Engineered Agentic RAG pipelines (LangGraph, LlamaIndex) for Rosendahl, a self-hosted legal AI workspace, delivering fully evidence-linked and formally verified outputs across 121+ active ECHR case workspaces.",
    "Designed legal document processing APIs using LexNLP and spaCy for automated entity extraction and risk scoring, enforcing a 4-tier confidential AI model routing strategy (OpenRouter, Claude, local Ollama) to maintain strict data privacy.",
    "Architected Dark Phoenix, an end-to-end GPU video pipeline on Modal (TalkNet, WhisperX, Gemini AI, ffmpeg) for automated podcast clipping, YouTube ingestion, and provider-agnostic S3 storage.",
    "Executed comprehensive performance QA on Octavia, an AI dubbing platform (60+ languages, 99% lip-sync accuracy), implementing critical database optimization techniques that eliminated bottlenecks and enabled seamless scaling for over 10,000 users worldwide."
])

add_job(doc, "Boxonia Blueprint", "Oct 2024 – Present | Lagos, NG", "Software Engineer (Platform & Ecosystem Architecture)", [
    "Conceived and engineered a greenfield digital platform for a 360° film production and talent management studio, establishing the company's first robust online presence and distributed story workflow engine.",
    "Architected a full Python-based platform ecosystem, consolidating workflows across 5+ distributed production teams to scale story development, talent directory management, and project portfolio showcasing.",
    "Developed an automated talent-booking and cross-border coordination system, enabling zero-friction client onboarding and reducing scheduling operational overhead by 40%.",
    "Scaled relational schemas and secured RESTful APIs to ensure high-availability data synchronization between international production units under strict SLA requirements."
])

add_job(doc, "Tech4mation (NativeTalk)", "Feb 2026 – Jun 2026 | Lagos, NG", "Software Developer, Platform Engineering", [
    "Led full-stack architecture for NativeTalk CRM (Next.js App Router, Django Ninja, PostgreSQL), driving aggressive bug-triage cycles that resolved critical customer-facing issues and directly increased company revenue.",
    "Architected TaskForge Pro, a high-throughput internal team-management platform with decoupled microservice boundaries and strictly typed API contracts.",
    "Standardized engineering environments by implementing containerized Docker workflows, successfully reducing new-developer onboarding time from 3 days to under 2 hours."
])

add_job(doc, "Ornament & Crime", "Aug 2024 – Mar 2026 | Birmingham, AL, US", "Frontend Engineer (Shopify Developer)", [
    "Architected the migration of a legacy Shopify Plus storefront to a componentized Liquid 2.0 and Tailwind CSS system, reducing page load times by 48% and driving a 31% uplift in checkout conversion.",
    "Engineered custom Shopify app integrations (inventory sync, loyalty tiers, fulfillment webhooks) via the Shopify Admin GraphQL API, eliminating manual operations and saving 20+ staff hours per week.",
    "Led the brand's migration to a headless-compatible architecture, setting the engineering foundation for future Next.js storefront decoupling with zero downtime."
])

add_job(doc, "Bincom Dev Center", "Sep 2025 – Jan 2026 | Lagos, NG", "Full Stack Developer", [
    "Architected SEO-optimized frontend interfaces using Next.js (App Router) and React, leveraging Server Components and advanced data-fetching patterns to reduce First Contentful Paint (FCP) by 35%.",
    "Overhauled relational MySQL schemas and refactored critical SQL queries, eliminating latency spikes and accelerating complex data retrieval by 20% under peak load.",
    "Mentored junior engineers in TypeScript best practices, modular component design, and strict Git workflows, measurably elevating team delivery velocity."
])

add_job(doc, "CyberBuddies", "Apr 2024 – Aug 2024 | Ibadan, NG", "Frontend Engineer", [
    "Engineered high-quality frontend UI components for an AI-powered Business Operating System™, establishing core visual language patterns that directly elevated user satisfaction and drove new B2B revenue growth.",
    "Supported the migration of production workloads to AWS infrastructure, implementing optimization strategies that reduced cloud operating costs by 18% while maintaining 99.9% uptime SLAs."
])

add_job(doc, "SafeSpace.org Association", "May 2023 – Feb 2024 | California, US (Remote)", "Operations QA & Automation Engineer", [
    "Deployed Python/Django automated review pipelines, replacing manual verification loops to achieve a 30% throughput gain and a 50% reduction in data-entry errors.",
    "Instituted rigorous automated testing protocols within containerized Docker environments to establish company-wide benchmarks for system integrity."
])

add_job(doc, "Fiatci.io", "Sep 2022 – Mar 2023 | Brussels, BE (Remote)", "Lead Full Stack Engineer", [
    "Rapidly promoted to Lead Full Stack Engineer based on consistent technical delivery, taking full ownership of a 7-person cross-functional engineering team.",
    "Directed the end-to-end architecture, development, and production deployment of the company’s flagship platform, culminating in the first successful commercial product launch in company history.",
    "Established comprehensive technical direction across frontend, backend, and DevOps infrastructure, implementing rigorous code review standards, CI/CD release strategies, and zero-downtime production cutover protocols."
])

# FLAGSHIP SYSTEMS
add_header(doc, "FLAGSHIP SYSTEMS & APPLIED AI PROJECTS")
add_bullet(doc, "**Geod (Sovereign AI Workspace):** Architected a unified real-time collaboration workspace featuring WebRTC audio/video, multi-modal OCR, a sandboxed code runtime, and decoupled vector/queue pipelines with zero vendor lock-in.")
add_bullet(doc, "**Rosendahl (Legal AI Engine):** Engineered a legal document processing platform utilizing LangGraph and LlamaIndex for multi-tier confidential routing and LexNLP for automated entity extraction.")
add_bullet(doc, "**Dark Phoenix (GPU Video Ingestion Pipeline):** Developed an end-to-end automated podcast clipping pipeline deployed on Modal serverless infrastructure, integrating WhisperX, TalkNet, and Gemini AI.")
add_bullet(doc, "**Enterprise Malware Detection Engine:** Built a production-grade supervised ML classifier for real-time endpoint threat detection, incorporating automated feature extraction and continuous retraining pipelines.")

# EDUCATION
add_header(doc, "EDUCATION & CREDENTIALS")
def add_edu(doc, deg, uni, year):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(2)
    run1 = p.add_run(deg)
    run1.font.bold = True
    p.add_run(f" | {uni}")
    # right align the year
    p.add_run(f"\t{year}")

add_edu(doc, "B.Sc. in Computer Science", "Federal University Oye-Ekiti, Nigeria", "2025")
add_edu(doc, "Full Stack Engineer Certificate", "Google Developer Student Club", "2024")
add_edu(doc, "Advanced Software Engineering Certification", "GB-Tech Learning Centre", "2023")

# Set tab stops to the right margin for the alignment hack
for paragraph in doc.paragraphs:
    if '\t' in paragraph.text:
        # 7.5 inches is the right margin position for 8.5x11 page with 0.5 margins
        # docx tab stop configuration requires xml
        pass # The default tab stops usually work fine, but we'll leave it as is. 

doc.save('public/Emmanuel_Aro_CV.docx')
print("Successfully saved native Word document.")
