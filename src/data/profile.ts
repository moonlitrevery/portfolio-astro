/** Stable ids for merging copy from `src/i18n` at render time. */
export type ExperienceRowId =
  | "paschoalotto"
  | "sicrediApprentice"
  | "sicrediStrategic"
  | "sicrediBi";

export type CertificationId =
  | "dataSciencePath"
  | "dataAnalyticsWarehousing"
  | "advancedPowerBi"
  | "conceptualBi"
  | "spaceApps2022";

export type ProjectId =
  | "churn"
  | "dodocLens"
  | "lyricsClassifier"
  | "librasLive"
  | "pokeTeam";

export type ExperienceItem = {
  title: string;
  company: string;
  period?: string;
  bullets: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  period?: string;
  details?: string;
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
  tech?: string[];
  url: string;
  demo?: string;
};

export const experienceRows: { id: ExperienceRowId; company: string }[] = [
  { id: "paschoalotto", company: "Paschoalotto" },
  { id: "sicrediApprentice", company: "Sicredi Centro Oeste Paulista" },
  { id: "sicrediStrategic", company: "Sicredi Centro Oeste Paulista" },
  { id: "sicrediBi", company: "Sicredi Centro Oeste Paulista" },
];

export const certificationLinks: { id: CertificationId; url: string }[] = [
  {
    id: "dataSciencePath",
    url: "https://www.alura.com.br/formacao-data-science",
  },
  {
    id: "dataAnalyticsWarehousing",
    url: "https://customer-academy.databricks.com/",
  },
  { id: "advancedPowerBi", url: "https://tech6group.com/" },
  { id: "conceptualBi", url: "https://tech6group.com/" },
  {
    id: "spaceApps2022",
    url: "https://www.spaceappschallenge.org/",
  },
];

export const projectSources: {
  id: ProjectId;
  url: string;
  repo?: string;
  tech?: string[];
}[] = [
  {
    id: "churn",
    repo: "moonlitrevery/MLEChurn",
    url: "https://github.com/moonlitrevery/MLEChurn",
    tech: [
      "Python",
      "FastAPI",
      "MLflow",
      "Machine Learning",
      "MLOps",
      "Monitoring",
    ],
  },
  {
    id: "dodocLens",
    repo: "moonlitrevery/DodocLens",
    url: "https://github.com/moonlitrevery/DodocLens",
    tech: ["Python", "FastAPI", "NLP", "Embeddings", "Electron", "MLOps"],
  },
  {
    id: "lyricsClassifier",
    repo: "moonlitrevery/LyricsClassifier",
    url: "https://github.com/moonlitrevery/LyricsClassifier",
    tech: ["Python", "NLP", "Machine Learning"],
  },
  {
    id: "librasLive",
    repo: "moonlitrevery/LibrasLive",
    url: "https://github.com/moonlitrevery/LibrasLive",
    tech: ["Computer Vision", "Python", "Real-time"],
  },
  {
    id: "pokeTeam",
    repo: "moonlitrevery/PokeTeam",
    url: "https://github.com/moonlitrevery/PokeTeam",
    tech: ["SQL", "Database Design"],
  },
];
