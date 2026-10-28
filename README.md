# João Vitor Bruschi — Portfolio

A personal portfolio site in English and Brazilian Portuguese. It is a single static page per language, built with Astro and Tailwind CSS and deployed to GitHub Pages.

Live site: https://moonlitrevery.github.io/portfolio-astro/

## Stack

- [Astro](https://astro.build/) 4, static output
- [Tailwind CSS](https://tailwindcss.com/) 3, with class-based dark mode
- TypeScript for site data and translations
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) for the sitemap

## Structure

```
public/                    Static files: CV, profile photo, icons, Open Graph images
src/
  pages/
    index.astro            English home page (/)
    pt/index.astro         Portuguese home page (/pt/)
    robots.txt.ts          Generates robots.txt with the sitemap URL
  layouts/BaseLayout.astro Shared <head> (meta, Open Graph, hreflang), header and footer
  components/              Page sections (Experience, Education, Certifications, Projects, ...)
  i18n/
    en.ts                  English copy; its shape defines the Translations type
    pt.ts                  Portuguese copy; must satisfy Translations
    index.ts               Language helpers
  data/profile.ts          Section IDs and order, project repos, credential URLs
  styles/global.css        Global styles and component classes
astro.config.mjs           Integrations, plus `base` and `site` read from env
.github/workflows/deploy.yml
```

Text lives in `src/i18n/`. Section order, links and other language-independent data live in `src/data/profile.ts`, keyed by the same IDs.

## Running locally

Requires Node.js 20 (the version the deploy workflow uses).

```bash
npm ci
npm run dev       # http://localhost:4321/
npm run build     # output in dist/
npm run preview   # serve dist/
```

`base` and `site` come from the `BASE_URL` and `SITE_URL` environment variables. Without them, the build uses `/` as the base, and it leaves out the absolute-URL tags (canonical, hreflang, `og:url`, `og:image`) and the sitemap. To reproduce the production build:

```bash
BASE_URL=/portfolio-astro/ SITE_URL=https://moonlitrevery.github.io/portfolio-astro/ npm run build
```

## Deployment

`.github/workflows/deploy.yml` deploys to GitHub Pages on every push to `main`, and can also be run manually. It installs dependencies with `npm ci` on Node 20 and builds with `BASE_URL=/<repo>/` and `SITE_URL=https://<owner>.github.io/<repo>/`. It then uploads `dist/` and publishes it with `actions/deploy-pages`.

In the repository settings, the Pages source must be set to "GitHub Actions".
