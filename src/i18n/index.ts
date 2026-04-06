import { en, type Translations } from "./en";
import { pt } from "./pt";

export type Lang = "en" | "pt";

export function getTranslations(lang: Lang): Translations {
  return lang === "pt" ? pt : en;
}

export function parseLangParam(value: string | null): Lang {
  return value === "pt" ? "pt" : "en";
}

export { en, pt, type Translations };
