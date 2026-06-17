# luisavalos.dev — Portfolio

The personal portfolio of **Luis Avalos** — software engineer (AI · graphics · systems).
Brutalist-editorial design: oversized grotesque type, asymmetric Swiss grid, black-on-paper with one acid-lime accent.

Built with **[Astro](https://astro.build) 5** + **[Tailwind CSS](https://tailwindcss.com) v4** + self-hosted variable fonts. Ships almost zero JavaScript.

## Stack

- **Astro 5** — static, island-free, near-zero JS
- **Tailwind CSS v4** (via `@tailwindcss/vite`) — design tokens live in `src/styles/global.css` under `@theme`
- **Fonts** (self-hosted, subsetted via Fontsource): Archivo (display), Space Grotesk (body), JetBrains Mono (labels)
- Progressive scroll-reveal via `IntersectionObserver` with a `prefers-reduced-motion` fallback

## Commands

```bash
npm install
npm run dev       # localhost:4321
npm run build     # → dist/
npm run preview   # serve the production build
```

## Project structure

```
src/
  data/
    projects.ts     # all project content (featured + secondary) — edit here to add work
    site.ts         # contact info, skills, experience, education, marquee words
  components/        # Nav, Hero, Marquee, Work, ProjectRow, ProjectCard, Capabilities, About, Contact
  layouts/Base.astro # <head>, SEO/OG/JSON-LD, fonts, scroll-reveal script
  styles/global.css  # the entire brutalist design system (tokens, utilities, motion, a11y)
  pages/index.astro  # composes the page
public/
  luis-avalos-resume.pdf   # résumé (linked from the nav + contact)
  favicon.svg, og.svg
scripts/shoot.mjs   # puppeteer-core screenshot helper
```

## Editing content

- **Add / edit a project:** `src/data/projects.ts` (the layout is fully data-driven).
- **Change the accent color, type scale, or spacing:** the tokens in `src/styles/global.css` → `@theme`.
- **Contact / skills / experience:** `src/data/site.ts`.

## Deploying

See **[DEPLOY.md](./DEPLOY.md)** — buy `luisavalos.dev` and ship to Vercel/Netlify.
