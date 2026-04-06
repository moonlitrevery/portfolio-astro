export const en = {
  layout: {
    metaTitle: "Portfolio — João Vitor Bruschi",
    metaDescription:
      "Data Analyst transitioning into Machine Learning Engineering — production ML, pipelines, FastAPI, MLOps.",
    ariaHome: "Home",
    ariaMenu: "Toggle menu",
    ariaTheme: "Toggle theme",
    ariaLang: "Toggle language",
  },
  nav: {
    about: "About",
    requirements: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  footer: {
    line1:
      "Built by João — Data Analyst transitioning into Machine Learning Engineering.",
    line2: "Focused on real-world ML systems, not just models.",
  },
  hero: {
    label: "Introduction",
    greeting: "Hello, I am",
    nameDisplay: "João Vitor Bruschi",
    subtitle:
      "Data Analyst → Machine Learning Engineer · Building production-ready ML systems · Computer Science @ UNISAGRADO",
    portraitAlt: "Portrait of João Vitor Bruschi",
    openToOpportunities: "Open to opportunities",
    downloadCv: "Download CV",
    socialGithub: "GitHub",
    socialLinkedin: "LinkedIn",
  },
  about: {
    title: "About",
    eyebrow: "Background",
    paragraphs: [
      "I'm João, a Data Analyst transitioning into Machine Learning Engineering.",
      "I build data systems that go beyond analysis, focusing on scalable pipelines, APIs, and production-ready ML solutions. My background in BI and analytics supports my work designing end-to-end workflows: from data processing to model deployment and monitoring.",
      "Currently, I'm focused on developing real-world ML systems with MLOps practices, including experiment tracking, reproducibility, and data drift awareness.",
    ],
    stackEyebrow: "Toolkit",
    stackTitle: "Tech Stack",
    glanceEyebrow: "Snapshot",
    glanceTitle: "At a glance",
    location: "Bauru, Brazil",
    githubLinePrefix: "GitHub:",
    linkedinLinePrefix: "LinkedIn:",
  },
  techStack: {
    groups: [
      {
        label: "Core",
        items: ["Python", "SQL", "FastAPI", "scikit-learn", "MLflow"],
      },
      {
        label: "Data & Machine Learning",
        items: ["Pandas", "NumPy", "Feature Engineering", "Model Evaluation", "NLP"],
      },
      {
        label: "MLOps & Engineering",
        items: ["APIs", "Pipelines", "Experiment Tracking", "Monitoring", "Git"],
      },
      {
        label: "Analytics & BI",
        items: ["Power BI", "DAX", "Data Modeling"],
      },
    ],
  },
  skills: {
    title: "Skills aligned to my roles",
    description:
      "MLE-oriented systems thinking: pipelines, APIs, reproducibility, and metrics that hold up in production.",
    keyHighlightsTitle: "Key Highlights",
    highlights: [
      "Built production-oriented ML systems with API, pipelines, and monitoring",
      "Designed end-to-end workflows from data ingestion to inference",
      "Focus on reproducibility and real-world deployment",
    ],
    mleTitle: "Machine Learning Engineer",
    mleBullets: [
      "Architected churn as decoupled FastAPI inference, batch training, and drift layers for independent release cadences.",
      "FastAPI scoring: Pydantic I/O, explicit errors, readiness probes for containerized inference.",
      "One training pipeline; MLflow logs params, metrics, and artifacts for auditable promotion.",
      "Serving-time drift vs. a frozen reference window; alerts before label-based metrics lag.",
      "Scripted train → evaluate → export with pinned dependencies for repeatable CI runs.",
    ],
    dsTitle: "Data Scientist",
    dsBullets: [
      "Framed BI KPIs into ML specs: metrics, guardrails, baselines, and operational churn definitions before modeling.",
      "Time-aware, leakage-safe features and splits; precision/recall tuned for retention use cases.",
      "SQL/ETL training tables with correct grain, joins, and snapshots for train/serve parity.",
      "Compared finalists on ROC/PR, calibration, latency, complexity, and maintenance cost.",
      "Briefed stakeholders on model scope, failure modes, score-to-action mapping, and monitoring triggers.",
    ],
  },
  researchBand: "Experience, education & certifications",
  experience: {
    sectionTitle: "Experience",
    roles: {
      paschoalotto: {
        title: "Data Analyst Intern",
        period: "Oct 2023–Feb 2024",
        bullets: [
          "Impact: Scaled outbound client communication (~85% efficiency gain) while improving data hygiene and automating recurring analytics prep (~20%).",
          "Engineered governed mass WhatsApp outreach (templates, lists, controls) for high-volume client contact.",
          "Built multi-table Excel operational databases with validations and refresh cadences used as a downstream source of truth.",
          "Automated R and SQL extracts/transforms, cutting ~20% of manual prep for internal reporting.",
          "Tightened high-volume user records in the core system; measured error and inconsistency rates held near ~15%.",
          "Shipped internal web features (Python, HTML, CSS, JS), moving repeat work off ad-hoc spreadsheets.",
        ],
      },
      sicrediApprentice: {
        title: "Data Analysis (Power BI focused) Apprentice",
        period: "Apr 2024–Jun 2024",
        bullets: [
          "Impact: Improved monitoring and report prep speed (~40% / ~60%) by pairing production-lean Power BI with Python-backed extracts.",
          "Designed Power BI on corporate SQL: DAX, drill paths, refresh-ready semantic layers.",
          "Modeled extracts (grain, filters, staging) so datasets matched finance/ops decision cadence.",
          "Rebuilt control views in Excel and Power BI, improving monitoring efficiency ~40%.",
          "Wrote Python for scheduled pulls, cleaning, and BI handoffs, cutting ~60% of manual prep on owned pipelines.",
          "Documented KPI field definitions, filters, and visuals stakeholders could audit.",
        ],
      },
      sicrediStrategic: {
        title: "Data Analysis and Strategic Planning (Power BI focused) Assistant",
        period: "Jul 2024–Jul 2025",
        bullets: [
          "Impact: Made planning and portfolio performance easier to trust via governed multi-source datasets, reusable models, and faster BI cycles before strategy gates.",
          "Built multi-source ETL-style pipelines (extract, cleanse, reconcile) for leadership planning datasets.",
          "Owned strategic Power BI reports: versioned datasets, lineage, recurring portfolio monitoring views.",
          "Co-designed dimensional patterns so teams reused conformed logic instead of siloed spreadsheets.",
          "Packaged variance and scenario analyses for planning cycles: cohort and trend views from raw tables.",
          "Cut BI rework with shared templates and measures before each planning gate.",
        ],
      },
      sicrediBi: {
        title: "Data Analysis and BI Assistant",
        period: "Jul 2025–Aug 2025",
        bullets: [
          "Impact: Standardized executive and branch KPI reporting with governed semantics, validation gates, and automation (~75–98% faster cycles on templated report families).",
          "Architected Power BI semantic models (star-style relationships, DAX, refresh strategy) for executive and branch scorecards.",
          "Shipped near-real-time KPI dashboards for branch and portfolio performance without manual recompilation each cycle.",
          "Defined KPI dictionaries and SQL-to-report checks so published metrics matched source grain and rules.",
          "Automated extract, notification, and distribution in Power Automate (~75–98% faster build/wait on standardized families).",
          "Delivered governed metric packs to planning forums; same spec discipline as ML experiment readouts and monitoring.",
        ],
      },
    },
  },
  education: {
    sectionTitle: "Education",
    entries: [
      {
        degree: "Bachelor's Degree in Computer Science",
        institution: "UNISAGRADO",
        period: "Jan 2024 – Dec 2026",
      },
      {
        degree: "Bachelor's Degree in Chemical Engineering (transferred)",
        institution: "UNISAGRADO",
        period: "2021 – 2023",
        details: "Undergraduate program interrupted for transfer to Computer Science.",
      },
    ],
  },
  certifications: {
    sectionTitle: "Certifications & Courses",
    visitProvider: "Visit provider",
    items: {
      dataSciencePath: { name: "Data Science Path", issuer: "Alura" },
      dataAnalyticsWarehousing: {
        name: "Data Analytics and Warehousing",
        issuer: "Databricks",
      },
      advancedPowerBi: {
        name: "Advanced Power BI Formation",
        issuer: "Tech6 Group",
      },
      conceptualBi: {
        name: "Conceptual Training in BI",
        issuer: "Tech6 Group",
      },
      spaceApps2022: { name: "Space Apps 2022", issuer: "NASA" },
    },
  },
  projects: {
    sectionTitle: "Projects",
    view: "View",
    moreOnGitHub: "More on GitHub:",
    items: {
      churn: {
        title: "Churn Prediction System",
        description:
          "End-to-end machine learning system for churn prediction: training pipeline, FastAPI inference service, MLflow experiment tracking, and data drift monitoring.",
      },
      dodocLens: {
        title: "DodocLens (IN PROGRESS)",
        description:
          "Local-first document intelligence for semantic search over private files: OCR, chunking, on-device embeddings, and cosine similarity with sentence-transformers; no external APIs. Highlights: privacy-preserving AI (fully offline); FastAPI backend plus Electron desktop app; end-to-end semantic search pipeline.",
      },
      lyricsClassifier: {
        title: "LyricsClassifier",
        description:
          "NLP pipeline for classifying song lyrics using vectorization and probabilistic models, focused on preprocessing and feature extraction.",
      },
      librasLive: {
        title: "LibrasLive",
        description:
          "Real-time system recognizing Brazilian Sign Language gestures using computer vision and live input processing.",
      },
      pokeTeam: {
        title: "PokeTeam",
        description:
          "Relational database project modeling Pokémon teams and battle strategies, focused on SQL design and data relationships.",
      },
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact",
    lead: "Open to Machine Learning Engineering and data-focused opportunities. Get in touch through the channels below:",
    linkedinTitle: "LinkedIn",
    linkedinSubtitle: "Professional network",
    githubTitle: "GitHub",
    githubSubtitle: "Code & projects",
    emailTitle: "Email",
    emailSubtitle: "joao.bruschi@outlook.com.br",
  },
};

export type Translations = typeof en;
