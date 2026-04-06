import type { Translations } from "./en";

export const pt = {
  layout: {
    metaTitle: "Portfólio — João Vitor Bruschi",
    metaDescription:
      "Analista de Dados em transição para Engenharia de Machine Learning — ML em produção, pipelines, FastAPI, MLOps.",
    ariaHome: "Início",
    ariaMenu: "Abrir ou fechar menu",
    ariaTheme: "Alternar tema",
    ariaLang: "Alternar idioma",
  },
  nav: {
    about: "Sobre",
    requirements: "Competências",
    projects: "Projetos",
    contact: "Contato",
  },
  footer: {
    line1:
      "Construído por João — Analista de Dados em transição para Engenharia de Machine Learning.",
    line2: "Foco em sistemas de ML no mundo real, não só em modelos.",
  },
  hero: {
    label: "Introdução",
    greeting: "Olá, eu sou",
    nameDisplay: "João Vitor Bruschi",
    subtitle:
      "Analista de Dados → Engenharia de ML · Sistemas de machine learning em produção · Ciência da Computação @ UNISAGRADO",
    portraitAlt: "Retrato de João Vitor Bruschi",
    openToOpportunities: "Aberto a oportunidades",
    downloadCv: "Baixar CV",
    socialGithub: "GitHub",
    socialLinkedin: "LinkedIn",
  },
  about: {
    title: "Sobre",
    eyebrow: "Trajetória",
    paragraphs: [
      "Sou o João, Analista de Dados em transição para Engenharia de Machine Learning.",
      "Construo sistemas de dados que vão além da análise: pipelines escaláveis, APIs e ML em produção. Minha experiência em BI e analytics sustenta fluxos ponta a ponta, da preparação dos dados ao deploy dos modelos e ao monitoramento.",
      "Hoje foco em sistemas de ML no mundo real com práticas de MLOps: experiment tracking, reprodutibilidade e monitoramento de data drift.",
    ],
    stackEyebrow: "Ferramentas",
    stackTitle: "Tecnologias",
    glanceEyebrow: "Resumo",
    glanceTitle: "Em resumo",
    location: "Bauru, Brasil",
    githubLinePrefix: "GitHub:",
    linkedinLinePrefix: "LinkedIn:",
  },
  techStack: {
    groups: [
      {
        label: "Núcleo",
        items: ["Python", "SQL", "FastAPI", "scikit-learn", "MLflow"],
      },
      {
        label: "Dados e machine learning",
        items: ["Pandas", "NumPy", "Feature engineering", "Model evaluation", "NLP"],
      },
      {
        label: "MLOps e engenharia",
        items: ["APIs", "Pipelines", "Experiment tracking", "Monitoramento", "Git"],
      },
      {
        label: "Analytics e BI",
        items: ["Power BI", "DAX", "Data modeling"],
      },
    ],
  },
  skills: {
    title: "Competências alinhadas aos meus papéis",
    description:
      "Visão de sistemas voltada a Engenharia de Machine Learning: pipelines, APIs, reprodutibilidade e métricas que se sustentam em produção.",
    keyHighlightsTitle: "Destaques",
    highlights: [
      "Sistemas de ML em produção com API, pipelines e monitoramento",
      "Fluxos ponta a ponta, da ingestão de dados à inferência",
      "Foco em reprodutibilidade e deploy no mundo real",
    ],
    mleTitle: "Engenheiro de Machine Learning",
    mleBullets: [
      "Churn em camadas desacopladas: inferência em FastAPI, treino em batch e camada de drift, com cadência de release independente.",
      "Scoring em FastAPI: I/O com Pydantic, erros explícitos e readiness probes para inferência em contêiner.",
      "Pipeline único de treino; MLflow registra parâmetros, métricas e artefatos para promoção auditável.",
      "Drift em produção frente a janela de referência fixa; alertas antes do atraso das métricas que dependem de label.",
      "Script de train → evaluate → export com dependências fixadas, reproduzível em CI.",
    ],
    dsTitle: "Cientista de Dados",
    dsBullets: [
      "KPIs de BI virando especificação de ML: métricas, guardrails, baselines e definição operacional de churn.",
      "Features sem leakage, com splits temporais; precision/recall calibrados para cenários de retenção.",
      "Tabelas SQL/ETL com grão, joins e snapshots alinhados à produção (paridade treino/serving).",
      "Comparação de finalistas: ROC/PR, calibração, latência, complexidade e custo de manutenção.",
      "Alinhamento com stakeholders: escopo do modelo, modos de falha, mapeamento score → ação e gatilhos de monitoramento.",
    ],
  },
  researchBand: "Experiência, formação e certificações",
  experience: {
    sectionTitle: "Experiência",
    roles: {
      paschoalotto: {
        title: "Estágio em Análise de Dados",
        period: "out 2023–fev 2024",
        bullets: [
          "Impacto: Escalei comunicação outbound com clientes (~85% de ganho de eficiência), melhorei higiene de dados e automatizei a preparação recorrente de análises (~20%).",
          "Estruturei disparos em massa pelo WhatsApp com governança (templates, listas, controles) para alto volume de contatos.",
          "Construí bases operacionais em Excel multipágina, com validações e rotinas de atualização usadas como fonte confiável downstream.",
          "Automatizei extrações e transformações em R e SQL, reduzindo ~20% do trabalho manual de preparação de relatórios.",
          "Consolidei cadastros de alto volume no sistema core; taxas de erro e inconsistência medidas estáveis em torno de ~15%.",
          "Entreguei melhorias web internas (Python, HTML, CSS, JS), reduzindo trabalho repetido em planilhas avulsas.",
        ],
      },
      sicrediApprentice: {
        title: "Aprendiz em Análise de Dados (foco Power BI)",
        period: "abr 2024–jun 2024",
        bullets: [
          "Impacto: Ganho de velocidade em monitoramento e preparação de relatórios (~40% / ~60%) ao combinar Power BI enxuto com extrações em Python.",
          "Desenvolvi Power BI sobre SQL corporativo: DAX, drill paths e camadas semânticas prontas para refresh.",
          "Modelei extrações (grão, filtros, staging) alinhadas ao ritmo de decisão de finanças e operações.",
          "Reestruturei visões de controle em Excel e Power BI, com ~40% mais eficiência no acompanhamento.",
          "Scripts Python para extrações agendadas, limpeza e handoff ao BI; ~60% menos preparação manual nos pipelines sob minha responsabilidade.",
          "Documentei definições de campos de KPI, filtros e visuais auditáveis pelas áreas.",
        ],
      },
      sicrediStrategic: {
        title: "Assistente em Análise de Dados e Planejamento Estratégico (foco Power BI)",
        period: "jul 2024–jul 2025",
        bullets: [
          "Impacto: Planejamento e desempenho de carteira mais confiáveis com datasets multi-fonte governados, modelos reutilizáveis e ciclos de BI mais rápidos antes dos gates de estratégia.",
          "Montei pipelines estilo ETL multi-fonte (extract, cleanse, reconcile) para bases usadas no planejamento pela liderança.",
          "Fui responsável por relatórios estratégicos no Power BI: datasets versionados, lineage e visões recorrentes de carteira.",
          "Co-projetei padrões dimensionais para reutilizar lógica conformada em vez de planilhas isoladas.",
          "Empacotei análises de variância e cenários para ciclos de planejamento: visões de coorte e tendência a partir de tabelas brutas.",
          "Reduzi retrabalho de BI com templates e medidas compartilhadas antes de cada gate.",
        ],
      },
      sicrediBi: {
        title: "Assistente em Análise de Dados e BI",
        period: "jul 2025–ago 2025",
        bullets: [
          "Impacto: Padronizei relatórios de KPI executivos e de agências com semântica governada, gates de validação e automação (~75–98% mais rápido em famílias de relatório modelo).",
          "Arquitetei modelos semânticos no Power BI (relacionamentos estrela, DAX, estratégia de refresh) para scorecards executivos e de agências.",
          "Entreguei dashboards de KPI quase em tempo real para agências e carteira, sem recompilar manualmente a cada ciclo.",
          "Defini dicionários de KPI e checagens de SQL até o relatório para garantir que métricas publicadas batam com grão e regras na origem.",
          "Automatizei extração, notificação e distribuição no Power Automate (~75–98% mais rápido em famílias padronizadas).",
          "Entreguei pacotes de métricas governados para fóruns de planejamento, com o mesmo rigor de especificação de reviews de experimentos de ML e de monitoramento.",
        ],
      },
    },
  },
  education: {
    sectionTitle: "Formação",
    entries: [
      {
        degree: "Bacharelado em Ciência da Computação",
        institution: "UNISAGRADO",
        period: "jan 2024 – dez 2026",
      },
      {
        degree: "Bacharelado em Engenharia Química (transferido)",
        institution: "UNISAGRADO",
        period: "2021 – 2023",
        details:
          "Graduação interrompida para migrar para Ciência da Computação.",
      },
    ],
  },
  certifications: {
    sectionTitle: "Certificações e cursos",
    visitProvider: "Acessar credencial",
    items: {
      dataSciencePath: { name: "Formação em Data Science", issuer: "Alura" },
      dataAnalyticsWarehousing: {
        name: "Data Analytics and Warehousing",
        issuer: "Databricks",
      },
      advancedPowerBi: {
        name: "Formação avançada em Power BI",
        issuer: "Tech6 Group",
      },
      conceptualBi: {
        name: "Treinamento conceitual em BI",
        issuer: "Tech6 Group",
      },
      spaceApps2022: { name: "Space Apps 2022", issuer: "NASA" },
    },
  },
  projects: {
    sectionTitle: "Projetos",
    view: "Ver",
    moreOnGitHub: "Mais no GitHub:",
    items: {
      churn: {
        title: "Sistema de predição de churn",
        description:
          "Sistema de machine learning ponta a ponta para predição de churn: pipeline de treino, serviço de inferência em FastAPI, experiment tracking no MLflow e monitoramento de data drift.",
      },
      dodocLens: {
        title: "DodocLens (EM ANDAMENTO)",
        description:
          "Inteligência documental local-first para busca semântica em arquivos privados: OCR, chunking, embeddings on-device e similaridade de cosseno com sentence-transformers, sem APIs externas. Destaques: IA com privacidade (100% offline); backend FastAPI e app desktop Electron; pipeline ponta a ponta de busca semântica.",
      },
      lyricsClassifier: {
        title: "LyricsClassifier",
        description:
          "Pipeline de NLP para classificar letras com vetorização e modelos probabilísticos, com foco em pré-processamento e extração de features.",
      },
      librasLive: {
        title: "LibrasLive",
        description:
          "Sistema em tempo real para reconhecimento de gestos em LIBRAS com visão computacional e processamento de entrada ao vivo.",
      },
      pokeTeam: {
        title: "PokeTeam",
        description:
          "Projeto de banco relacional modelando times de Pokémon e estratégias de batalha, com foco em modelagem SQL e relacionamentos entre dados.",
      },
    },
  },
  contact: {
    eyebrow: "Contato",
    title: "Contato",
    lead: "Aberto a oportunidades em Engenharia de Machine Learning e perfis focados em dados. Entre em contato pelos canais abaixo:",
    linkedinTitle: "LinkedIn",
    linkedinSubtitle: "Rede profissional",
    githubTitle: "GitHub",
    githubSubtitle: "Código e projetos",
    emailTitle: "E-mail",
    emailSubtitle: "joao.bruschi@outlook.com.br",
  },
} satisfies Translations;
