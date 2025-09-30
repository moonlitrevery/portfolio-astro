import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

const base = process.env.BASE_URL || '/';
const site = process.env.SITE_URL;

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  integrations: [tailwind()],
  server: { port: 4321 },
  base,
  site
});
