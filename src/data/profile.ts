/** Stable ids for merging copy from `src/i18n` at render time. */
export type ExperienceRowId =
  | "paschoalotto"
  | "sicrediApprentice"
  | "sicrediStrategic"
  | "sicrediBi"
  | "coteFacil";

export type CertificationId =
  | "dataSciencePath"
  | "dataAnalyticsWarehousing"
  | "advancedPowerBi"
  | "conceptualBi";

export type AwardId = "spaceApps2022";

export type ProjectId =
  | "churn"
  | "dodocLens"
  | "librasLive"
  | "lyricsClassifier";

export type ExperienceItem = {
  title: string;
  company: string;
  period?: string;
  /** Role changes within the same company, e.g. "A (Apr 2026–Jun 2026) → B (Jun 2026–Aug 2026)". */
  progression?: string;
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
  /** Short qualifier shown under the issuer, e.g. "Participation". */
  note?: string;
  url?: string;
};

export type ProjectItem = {
  displayName: string;
  repo?: string;
  description?: string;
  tech?: string[];
  url: string;
  demo?: string;
  /** Image URL (already prefixed with BASE_URL), shown above the description. */
  screenshot?: string;
};

export const experienceRows: { id: ExperienceRowId; company: string }[] = [
  { id: "coteFacil", company: "CoteFacil" },
  { id: "sicrediBi", company: "Sicredi Centro Oeste Paulista" },
  { id: "sicrediStrategic", company: "Sicredi Centro Oeste Paulista" },
  { id: "sicrediApprentice", company: "Sicredi Centro Oeste Paulista" },
  { id: "paschoalotto", company: "Paschoalotto" },
];

/** `url` must be the credential's verification page, never the provider's home page; omit it when there is none. */
export const certificationRows: { id: CertificationId; url?: string }[] = [
  { id: "dataSciencePath" },
  { id: "dataAnalyticsWarehousing" },
  { id: "advancedPowerBi" },
  { id: "conceptualBi" },
];

export const awardRows: { id: AwardId; url?: string }[] = [
  { id: "spaceApps2022" },
];

export const projectSources: {
  id: ProjectId;
  url: string;
  repo?: string;
  tech?: string[];
  demo?: string;
  /** Path relative to `public/`, e.g. "projects/dodoclens.png". */
  screenshot?: string;
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
    id: "librasLive",
    repo: "moonlitrevery/LibrasLive",
    url: "https://github.com/moonlitrevery/LibrasLive",
    tech: ["Computer Vision", "Python", "Real-time"],
  },
  {
    id: "lyricsClassifier",
    repo: "moonlitrevery/LyricsClassifier",
    url: "https://github.com/moonlitrevery/LyricsClassifier",
    tech: ["Python", "NLP", "Machine Learning"],
  },
];
