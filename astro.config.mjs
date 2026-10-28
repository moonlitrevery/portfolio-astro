import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const base = process.env.BASE_URL || '/';
const site = process.env.SITE_URL;

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", pt: "pt-BR" } },
    }),
  ],
  server: { port: 4321 },
  base,
  site
});
