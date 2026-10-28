import type { Translations } from "./en";

export const pt = {
  layout: {
    metaTitle: "João Vitor Bruschi — Engenheiro de Machine Learning",
    metaDescription:
      "Engenheiro de Machine Learning e profissional de dados full-stack: análise de dados e BI (Power BI), engenharia de dados, ciência de dados e ML em produção com Python, FastAPI e MLOps.",
    ariaHome: "Início",
    ariaMenu: "Abrir ou fechar menu",
    ariaTheme: "Alternar tema",
    ariaLang: "Alternar idioma",
    ogImageAlt:
      "João Vitor Bruschi — Engenheiro de Machine Learning | Profissional de Dados Full-Stack",
  },
  nav: {
    about: "Sobre",
    requirements: "Competências",
    projects: "Projetos",
    contact: "Contato",
  },
  footer: {
    line1:
      "Construído por João - Engenheiro de Machine Learning.",
    line2: "Foco em sistemas de ML no mundo real, não só em modelos.",
  },
  hero: {
    label: "Introdução",
    greeting: "Olá, eu sou",
    nameDisplay: "João Vitor Bruschi",
    subtitle:
      "Engenheiro de Machine Learning | Profissional de Dados Full-Stack · Engenharia de Dados · BI (Power BI) · Python · Ciência da Computação @ UNISAGRADO",
    portraitAlt: "Retrato de João Vitor Bruschi",
    openToOpportunities: "Aberto a oportunidades",
    downloadCv: "Baixar CV",
    cvFile: "cv-pt.pdf",
    socialGithub: "GitHub",
    socialLinkedin: "LinkedIn",
  },
  about: {
    title: "Sobre",
    eyebrow: "Trajetória",
    paragraphs: [
      "Sou o João, Engenheiro de Machine Learning e profissional de dados full-stack. Já atuei em todo o ciclo de vida dos dados: analytics e BI, engenharia de dados e ML em produção.",
      "Na prática, isso significou trabalho de Analista de Dados (dashboards em Power BI, DAX, relatórios de KPI), de Engenheiro de Dados (pipelines em Python e SQL, ETL, AWS) e de Cientista de Dados (feature engineering, treino e avaliação de modelos), sempre voltado a sistemas que rodam em produção.",
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
        label: "Linguagens e núcleo",
        items: ["Python", "SQL", "C/C++", "Git", "Linux"],
      },
      {
        label: "Ciência de dados e machine learning",
        items: [
          "scikit-learn",
          "PyTorch",
          "OpenCV",
          "Pandas",
          "NumPy",
          "Feature engineering",
          "Model evaluation",
          "NLP",
        ],
      },
      {
        label: "Engenharia de dados e MLOps",
        items: ["FastAPI", "MLflow", "REST APIs", "Data pipelines", "AWS", "Docker", "Monitoramento"],
      },
      {
        label: "Análise de dados e BI",
        items: ["Power BI", "DAX", "Data modeling", "ETL", "Excel"],
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
    earlierLabel: "Anteriores",
    roles: {
      paschoalotto: {
        title: "Estágio em Análise de Dados",
        period: "out 2023–fev 2024",
        bullets: [
          "Impacto: Escalei comunicação outbound com clientes (~85% mais soluções vendidas por campanha), melhorei higiene de dados e automatizei a preparação recorrente de análises (~20%).",
          "Estruturei disparos em massa pelo WhatsApp com governança (templates, listas, controles) para alto volume de contatos.",
          "Consolidei cadastros de alto volume no sistema core, reduzindo em ~15% as taxas de erro e inconsistência.",
        ],
      },
      sicrediApprentice: {
        title: "Aprendiz em Análise de Dados (foco Power BI)",
        period: "abr 2024–jun 2024",
        bullets: [
          "Desenvolvi Power BI sobre SQL corporativo: DAX, drill paths e camadas semânticas prontas para refresh.",
          "Reestruturei visões de controle em Excel e Power BI, com ~40% mais eficiência no acompanhamento.",
          "Scripts Python para extrações agendadas, limpeza e handoff ao BI; ~60% menos preparação manual nos pipelines sob minha responsabilidade.",
        ],
      },
      sicrediStrategic: {
        title: "Assistente em Análise de Dados e Planejamento Estratégico (foco Power BI)",
        period: "jul 2024–jul 2025",
        bullets: [
          "Montei pipelines estilo ETL multi-fonte (extract, cleanse, reconcile) para bases usadas no planejamento pela liderança.",
          "Fui responsável por relatórios estratégicos no Power BI: datasets versionados, lineage e visões recorrentes de carteira.",
          "Co-projetei padrões dimensionais para reutilizar lógica conformada em vez de planilhas isoladas.",
        ],
      },
      sicrediBi: {
        title: "Assistente em Análise de Dados e BI",
        period: "jul 2025–ago 2025",
        bullets: [
          "Impacto: Padronizei relatórios de KPI executivos e de agências com semântica governada, gates de validação e automação; ciclos de relatórios modelo com ~75–98% menos tempo, dependendo do tipo de relatório.",
          "Arquitetei modelos semânticos no Power BI (relacionamentos estrela, DAX, estratégia de refresh) para scorecards executivos e de agências.",
          "Entreguei dashboards de KPI quase em tempo real para agências e carteira, sem recompilar manualmente a cada ciclo.",
          "Defini dicionários de KPI e checagens de SQL até o relatório para garantir que métricas publicadas batam com grão e regras na origem.",
          "Automatizei extração, notificação e distribuição no Power Automate, reduzindo em ~75–98% o tempo de montagem/espera de relatórios padronizados, dependendo do tipo de relatório.",
          "Entreguei pacotes de métricas governados para fóruns de planejamento, com o mesmo rigor de especificação de reviews de experimentos de ML e de monitoramento.",
        ],
      },
      coteFacil: {
        title: "Engenheiro de Machine Learning / Engenheiro de Dados",
        period: "abr 2026–ago 2026",
        progression:
          "Engenheiro de Software Júnior (abr 2026–jun 2026) → Engenheiro de Machine Learning / Engenheiro de Dados (jun 2026–ago 2026)",
        bullets: [
          "Impacto: Tirei extração e reconhecimento de scripts avulsos para pipelines em nuvem repetíveis e modelos OCR em produção (CNN/CRNN + CTC) e depois entreguei sistemas de ML ponta a ponta, com pipelines batch e APIs de inferência prontos para produção.",
          "Fui responsável por sistemas de ML cobrindo ingestão, feature engineering, deploy de modelos e monitoramento.",
          "Construí pipelines escaláveis de dados, automação e batch, além de APIs de inferência, com Python, AWS, Docker e FastAPI para extração, processamento e integração de sistemas.",
          "Desenvolvi e otimizei modelos de visão computacional e OCR (CNN, CRNN, CTC loss): geração de datasets, fine-tuning em dados reais, early stopping, LR scheduling, augmentation e avaliação.",
          "Construí e mantive serviços de ML com foco em reprodutibilidade, experiment tracking, observabilidade e prontidão para produção.",
          "Implementei CI/CD e automação de infraestrutura para aplicações containerizadas e distribuídas.",
          "Colaborei com engenharia em escalabilidade, observabilidade, confiabilidade e performance em ambientes cloud.",
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
        period: "jan 2024 – jul 2027 (previsão)",
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
    viewCredential: "Ver credencial",
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
    },
  },
  awards: {
    sectionTitle: "Prêmios e eventos",
    items: {
      spaceApps2022: {
        name: "Space Apps 2022",
        issuer: "NASA",
        note: "Participação",
      },
    },
  },
  projects: {
    sectionTitle: "Projetos",
    view: "Ver",
    demo: "Demo",
    screenshotAlt: "Captura de tela do projeto",
    moreOnGitHub: "Mais no GitHub:",
    items: {
      churn: {
        title: "Sistema de predição de churn",
        description:
          "Sistema de machine learning ponta a ponta para predição de churn: pipeline de treino, serviço de inferência em FastAPI, experiment tracking no MLflow e monitoramento de data drift.",
      },
      dodocLens: {
        title: "DodocLens",
        description:
          "Inteligência documental local-first para busca semântica em arquivos privados: OCR, chunking, embeddings on-device e similaridade de cosseno com sentence-transformers, sem APIs externas. Destaques: IA com privacidade (100% offline); backend FastAPI e app desktop Electron; pipeline ponta a ponta de busca semântica.",
      },
      librasLive: {
        title: "LibrasLive",
        description:
          "Sistema em tempo real para reconhecimento de gestos em LIBRAS com visão computacional e processamento de entrada ao vivo.",
      },
      lyricsClassifier: {
        title: "LyricsClassifier",
        description:
          "Pipeline de NLP para classificar letras com vetorização e modelos probabilísticos, com foco em pré-processamento e extração de features.",
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
