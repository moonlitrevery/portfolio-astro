export type ExperienceItem = {
  title: string;
  company: string;
  location?: string;
  period?: string;
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
    title: "Data Analysis Intern",
    company: "Paschoalotto",
    bullets: [
      "Sending mass WhatsApp messages, increasing client communication efficiency by 85%.",
      "Development and maintenance of Excel databases, ensuring organization and reliability of information.",
      "Enhancement of analytical thinking, supporting data-driven strategic decision-making.",
      "Maintenance and updating of user records in the company system, keeping error and inconsistency rates at 15%.",
      "Assistance in creating R and SQL automations, streamlining internal processes and increasing productivity by 20%.",
      "Support in the development of websites and applications using Python, HTML, CSS, and JavaScript."
    ],
    bulletsPt: [
      "Envio de mensagens em massa via WhatsApp, aumentando em 85% a eficiência de comunicação com clientes.",
      "Desenvolvimento e manutenção de bases em Excel, garantindo organização e confiabilidade das informações.",
      "Aprimoramento do pensamento analítico, apoiando decisões estratégicas baseadas em dados.",
      "Manutenção e atualização de cadastros no sistema, mantendo taxa de erros/inconsistências em 15%.",
      "Apoio na criação de automações em R e SQL, otimizando processos e elevando a produtividade em 20%.",
      "Suporte ao desenvolvimento de sites e aplicações com Python, HTML, CSS e JavaScript."
    ]
  },
  {
    title: "Data Analysis | Power BI Apprentice",
    company: "Sicredi Centro Oeste Paulista",
    bullets: [
      "Development of innovative and automated Power BI dashboards for clear and effective insights.",
      "Analysis and modeling of data extracted from company databases, ensuring accuracy and relevance.",
      "Maintenance of internal team controls using Excel and Power BI, improving monitoring efficiency by 40%.",
      "Continuous support to internal departments with data-driven solutions.",
      "Extraction/filtering of database information and creation of Python automations, increasing efficiency by 60%."
    ],
    bulletsPt: [
      "Desenvolvimento de dashboards inovadores e automatizados no Power BI, garantindo comunicação clara de insights.",
      "Análise e modelagem de dados de bancos corporativos, assegurando acurácia e relevância.",
      "Manutenção de controles internos com Excel e Power BI, elevando a eficiência de acompanhamento em 40%.",
      "Suporte contínuo às áreas internas com soluções orientadas por dados.",
      "Extração/filtragem de informações e criação de automações em Python, aumentando a eficiência em 60%."
    ]
  },
  {
    title: "Strategic Planning | Power BI Assistant",
    company: "Sicredi Centro Oeste Paulista",
    bullets: [
      "Data extraction and cleansing from multiple sources, ensuring consistency and reliability.",
      "Creation and maintenance of Power BI reports and dashboards for performance monitoring.",
      "Support in data modeling and database organization for analysis.",
      "Assisting business areas in interpreting information and visualizing scenarios.",
      "Support in strategic planning through analyses and reports for internal projects.",
      "Engagement in continuous improvement initiatives focusing on BI process efficiency and innovation."
    ],
    bulletsPt: [
      "Extração e tratamento de dados de múltiplas fontes, garantindo consistência e confiabilidade.",
      "Criação e manutenção de relatórios e dashboards no Power BI para monitoramento de performance.",
      "Suporte à modelagem de dados e organização de bases para análise.",
      "Auxílio às áreas de negócio na interpretação das informações e visualização de cenários.",
      "Apoio ao planejamento estratégico por meio de análises e relatórios.",
      "Atuação em melhoria contínua com foco em eficiência e inovação em BI."
    ]
  },
  {
    title: "Data Analysis Assistant | Business Intelligence",
    company: "Sicredi Centro Oeste Paulista",
    bullets: [
      "Data modeling for Power BI, designing optimized models for decision-making.",
      "Development of interactive dashboards and reports with real-time insights.",
      "Creation of KPIs and performance monitoring to identify trends and opportunities.",
      "Automations with Power Automate, reducing development time for analyses by 75%–98%.",
      "Support in strategic planning aligned to sustainable growth.",
      "Transformation of raw data into actionable insights for better decisions.",
      "Participation in projects fostering innovation and optimization of results."
    ],
    bulletsPt: [
      "Modelagem de dados para Power BI, projetando modelos otimizados para decisão.",
      "Desenvolvimento de dashboards e relatórios interativos, gerando insights em tempo real.",
      "Criação de KPIs e monitoramento de performance para identificar tendências e oportunidades.",
      "Automações com Power Automate, reduzindo tempo de desenvolvimento de análises em 75%–98%.",
      "Suporte ao planejamento estratégico alinhado ao crescimento sustentável.",
      "Transformação de dados brutos em insights acionáveis, elevando a assertividade das decisões.",
      "Participação em projetos de inovação e otimização de resultados."
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
