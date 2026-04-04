export type ExperienceItem = {
  title: string;
  /** Optional Portuguese job title (e.g. with localized date formatting). */
  titlePt?: string;
  company: string;
  location?: string;
  /** Employment dates (shown below title, muted). */
  period?: string;
  periodPt?: string;
  bullets: string[];
  bulletsPt?: string[];
};

export type EducationItem = {
  degree: string;
  degreePt?: string;
  institution: string;
  period?: string;
  details?: string;
  detailsPt?: string;
};

export type CertificationItem = {
  name: string;
  issuer?: string;
  date?: string;
  url?: string;
};

export type ProjectItem = {
  displayName: string;
  repo?: string;
  description?: string;
  descriptionPt?: string;
  tech?: string[];
  url: string;
  demo?: string;
};

export const experience: ExperienceItem[] = [
  {
    title: "Data Analyst Intern",
    titlePt: "Estágio em Análise de Dados",
    period: "Oct 2023–Feb 2024",
    periodPt: "out 2023–fev 2024",
    company: "Paschoalotto",
    bullets: [
      "Engineered a governed mass WhatsApp outreach workflow (templates, lists, send controls) that raised client communication efficiency ~85%.",
      "Built and maintained multi-table Excel operational databases with validation rules and refresh cadences that downstream teams treated as a source of truth.",
      "Automated recurring R and SQL extracts and transforms, shaving ~20% off manual prep time for internal report consumers.",
      "Owned high-volume user and account records in the core business system, tightening update discipline so measured error and inconsistency rates stayed near ~15%.",
      "Shipped internal-facing web features with Python, HTML, CSS, and JavaScript, moving recurring requests off one-off spreadsheets into reusable tools."
    ],
    bulletsPt: [
      "Estruturei fluxo governado de WhatsApp em massa (modelos, listas, controles de envio), elevando ~85% a eficiência da comunicação com clientes.",
      "Construí e mantive bases operacionais em Excel multiplanilha com regras de validação e cadência de atualização usadas como fonte confiável por outras áreas.",
      "Automatizei extrações e transformações recorrentes em R e SQL, reduzindo ~20% o tempo manual de preparação para relatórios internos.",
      "Assumi cadastros de alto volume no sistema corporativo, com disciplina de atualização que manteve taxas medidas de erro e inconsistência próximas de ~15%.",
      "Entreguei melhorias em ferramentas web internas com Python, HTML, CSS e JavaScript, tirando demandas recorrentes de planilhas avulsas para fluxos reutilizáveis."
    ]
  },
  {
    title: "Data Analysis (Power BI focused) Apprentice",
    titlePt: "Aprendiz em Análise de Dados (foco Power BI)",
    period: "Apr 2024–Jun 2024",
    periodPt: "abr 2024–jun 2024",
    company: "Sicredi Centro Oeste Paulista",
    bullets: [
      "Designed production-style Power BI dashboards on top of corporate SQL sources: DAX measures, drill hierarchies, and refresh-ready semantic layers.",
      "Modeled database extracts (filters, grains, staging logic) so Power BI datasets aligned with finance and operations decision cycles.",
      "Rebuilt internal control views in Excel and Power BI, improving monitoring and follow-up efficiency ~40%.",
      "Authored Python scripts for scheduled pulls, cleaning, and handoffs into BI models, cutting ~60% of manual prep on owned pipelines.",
      "Translated business KPI asks into documented field definitions, filters, and visuals stakeholders could audit line by line."
    ],
    bulletsPt: [
      "Desenvolvi dashboards no Power BI sobre bases SQL corporativas: medidas DAX, hierarquias de drill e camadas semânticas prontas para refresh.",
      "Modelei extrações (filtros, grão, staging) para que datasets no Power BI acompanhassem o ritmo de decisão de finanças e operações.",
      "Reestruturei controles internos em Excel e Power BI, elevando ~40% a eficiência de acompanhamento.",
      "Escrevi scripts Python para pulls agendados, limpeza e handoff para modelos de BI, eliminando ~60% do prep manual nos pipelines sob minha responsabilidade.",
      "Traduzi pedidos de KPI em definições de campos, filtros e visuais documentados, auditáveis linha a linha pelas áreas de negócio."
    ]
  },
  {
    title: "Data Analysis and Strategic Planning (Power BI focused) Assistant",
    titlePt: "Assistente em Análise de Dados e Planejamento Estratégico (foco Power BI)",
    period: "Jul 2024–Jul 2025",
    periodPt: "jul 2024–jul 2025",
    company: "Sicredi Centro Oeste Paulista",
    bullets: [
      "Built multi-source ETL-style pipelines (extract, cleanse, reconcile) that fed planning and performance datasets for leadership reviews.",
      "Owned lifecycle of strategic Power BI reports: versioned datasets, documented lineage, and recurring views used in portfolio monitoring.",
      "Co-designed dimensional naming and model patterns so teams reused conformed logic instead of duplicating siloed spreadsheets.",
      "Delivered variance and scenario analyses packaged for strategic-planning cycles, turning raw tables into decision-ready cohort and trend views.",
      "Compressed BI cycle time through templated layouts and shared measures, reducing one-off rebuilds before each planning gate."
    ],
    bulletsPt: [
      "Montei rotinas estilo ETL multi-fonte (extração, limpeza, reconciliação) alimentando bases de planejamento e performance para comitês de liderança.",
      "Gerenciei ciclo de vida de relatórios estratégicos no Power BI: datasets versionados, linhagem documentada e visões recorrentes de acompanhamento de carteira.",
      "Co-desenhei padrões de nomenclatura e modelagem dimensional para reutilizar lógica conformada em vez de planilhas isoladas.",
      "Entreguei análises de variância e cenários empacotadas para ciclos de planejamento estratégico, de tabelas brutas a visões de coorte e tendência prontas para decisão.",
      "Encurtiei o ciclo de BI com layouts modelo e medidas compartilhadas, reduzindo reconstruções ad hoc a cada etapa de planejamento."
    ]
  },
  {
    title: "Data Analysis and BI Assistant",
    titlePt: "Assistente em Análise de Dados e BI",
    period: "Jul 2025–Aug 2025",
    periodPt: "jul 2025–ago 2025",
    company: "Sicredi Centro Oeste Paulista",
    bullets: [
      "Architected Power BI semantic models (star-oriented relationships, DAX, refresh strategy) powering executive and branch-level scorecards.",
      "Shipped interactive dashboards and near-real-time KPI suites that surfaced branch and portfolio performance without manual recompilation each cycle.",
      "Defined KPI dictionaries and SQL-to-report validation checks so published metrics matched source-system grain and business rules.",
      "Automated extract, notification, and distribution flows in Power Automate, cutting analytics build and wait time ~75–98% on standardized report families.",
      "Fed strategic-planning forums with governed metric packs and repeatable templates, the same specification discipline later applied to ML experiment readouts and monitoring contracts."
    ],
    bulletsPt: [
      "Arquitetei modelos semânticos no Power BI (relacionamentos estrela, DAX, estratégia de refresh) para scorecards executivos e de agências.",
      "Entreguei dashboards interativos e conjuntos de KPIs quase em tempo real para performance de agências e carteira, sem recompilação manual a cada ciclo.",
      "Defini dicionários de KPI e checagens de validação SQL até relatório para que métricas publicadas respeitassem grão e regras de negócio dos sistemas de origem.",
      "Automatizei extrações, notificações e distribuição no Power Automate, reduzindo ~75–98% o tempo de construção e fila de análises em famílias de relatório padronizadas.",
      "Abasteci fóruns de planejamento estratégico com pacotes de métricas governadas e modelos repetíveis, o mesmo rigor de especificação aplicado depois a leituras de experimentos de ML e contratos de monitoramento."
    ]
  }
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor's Degree in Computer Science",
    degreePt: "Bacharelado em Ciência da Computação",
    institution: "UNISAGRADO",
    period: "Jan 2024 – Dec 2026"
  },
  {
    degree: "Bachelor's Degree in Chemical Engineering (transferred)",
    degreePt: "Bacharelado em Engenharia Química (transferido)",
    institution: "UNISAGRADO",
    period: "2021 – 2023",
    details: "Undergraduate program interrupted for transfer to Computer Science.",
    detailsPt: "Graduação interrompida para transferência para Ciência da Computação."
  }
];

export const certifications: CertificationItem[] = [
  { name: "Data Science Path", issuer: "Alura", url: "https://www.alura.com.br/formacao-data-science" },
  { name: "Data Analytics and Warehousing", issuer: "Databricks", url: "https://customer-academy.databricks.com/" },
  { name: "Advanced Power BI Formation", issuer: "Tech6 Group", url: "https://tech6group.com/" },
  { name: "Conceptual Training in BI", issuer: "Tech6 Group", url: "https://tech6group.com/" },
  { name: "Space Apps 2022", issuer: "NASA", url: "https://www.spaceappschallenge.org/" }
];

export const techStack: string[] = [
  "C++","Astro","Python","Oracle",".NET","Node.js","Java","Snowflake","Microsoft SQL Server","MongoDB","MySQL","Figma","NumPy","Pandas","Plotly","PyTorch","scikit-learn","TensorFlow","Matplotlib","Git","GitHub","GitLab","Arduino","Power BI"
];

export const projects: ProjectItem[] = [
  {
    displayName: "LibrasLive",
    repo: "moonlitrevery/LibrasLive",
    url: "https://github.com/moonlitrevery/LibrasLive",
    description: "Real-time LIBRAS (Brazilian Sign Language) translation system that converts hand signs captured by webcam into text and audio. The system recognizes the LIBRAS alphabet using computer vision.",
    descriptionPt: "Sistema de tradução em tempo real para LIBRAS (Língua Brasileira de Sinais) que converte sinais das mãos capturados pela webcam em texto e áudio. O sistema reconhece o alfabeto LIBRAS usando visão computacional.",
    tech: ["Python", "OpenCV", "MediaPipe", "Machine Learning"]
  },
  {
    displayName: "LyricsClassifier",
    repo: "moonlitrevery/LyricsClassifier",
    url: "https://github.com/moonlitrevery/LyricsClassifier",
    description: "Complete NLP pipeline to classify song lyrics by genre, mood, or theme. Trained with TF-IDF + Naive Bayes (baseline).",
    descriptionPt: "Pipeline completo de NLP para classificar letras de músicas por gênero, humor ou tema. Treinado com TF-IDF + Naive Bayes (baseline).",
    tech: ["Python", "NLP", "scikit-learn", "TF-IDF", "Naive Bayes"]
  },
  {
    displayName: "PokeTeam",
    repo: "moonlitrevery/PokeTeam",
    url: "https://github.com/moonlitrevery/PokeTeam",
    description: "Interactive platform developed with Node.js and Astro, integrated with PokeAPI. PokeTeam allows users to consult the complete Pokédex and build their own Pokémon teams dynamically and interactively.",
    descriptionPt: "Plataforma interativa desenvolvida com Node.js e Astro, integrada à PokeAPI. O PokeTeam permite aos usuários consultar a Pokédex completa e montar seus próprios times de Pokémon de forma dinâmica e interativa.",
    tech: ["Astro", "Node.js", "JavaScript", "PokeAPI"]
  },
  {
    displayName: "ProteseSimples",
    repo: "moonlitrevery/ProteseSimples",
    url: "https://github.com/moonlitrevery/ProteseSimples",
    description: "Accessible prosthetics project: CAD assets and basic control logic for low-cost prosthesis prototypes.",
    descriptionPt: "Projeto de próteses acessíveis: assets CAD e lógica de controle básica para protótipos de próteses de baixo custo.",
    tech: ["Arduino", "C++", "CAD"]
  },
  {
    displayName: "BioNumerico",
    repo: "moonlitrevery/Bionumerico",
    url: "https://github.com/moonlitrevery/Bionumerico",
    description: "Bio-inspired numerical experiments and analysis.",
    descriptionPt: "Experimentos e análises numéricas bio-inspiradas.",
    tech: ["Python", "NumPy", "Pandas", "Matplotlib"]
  },
  {
    displayName: "AGSsistant",
    repo: "moonlitrevery/AGSsistant",
    url: "https://github.com/moonlitrevery/AGSsistant",
    description: "Assistant app and tooling experiments.",
    descriptionPt: "Aplicativo assistente e experimentos de ferramentas.",
    tech: ["Dart", "Flutter", "C#"]
  }
];
