# Hello, World! in every major programming language

A static [Astro](https://astro.build) site that collects the classic *Hello, World!*
program for major programming languages, historical and current, from 1940s assembly to
Mojo. Every language has its own page with a runnable snippet, a short introduction, a
paragraph on its history and links to the official homepage, documentation or
specification.

The site is deployed automatically to GitHub Pages:
**https://christoph-jerolimov.github.io/empty-repo-6/**

## Project layout

```
.
├── .github/workflows/deploy.yml   # builds and deploys to GitHub Pages on push to main
├── astro.config.mjs               # site + base path for GitHub Pages
├── src/
│   ├── content.config.ts          # schema for the "languages" content collection
│   ├── content/languages/*.md     # one Markdown file per programming language
│   ├── layouts/Layout.astro       # shared page shell
│   ├── pages/index.astro          # overview grouped by decade, with a filter box
│   ├── pages/languages/[slug].astro
│   ├── pages/about.astro
│   └── styles/global.css
└── public/favicon.svg
```

## Adding a language

Create `src/content/languages/<slug>.md` with this front matter and the three sections:

```markdown
---
title: Zig
year: 2016
era: 2010s                     # 1940s … 2020s, used for grouping on the index page
designers: [Andrew Kelley]
paradigms: [imperative, generic]
typing: static, strong
summary: One sentence shown on the overview card.
links:
  - label: Ziglang.org
    url: https://ziglang.org/
---

## Hello, World!

```zig
...
```

## About

One paragraph about the language.

## History

One paragraph about its history.
```

The schema in `src/content.config.ts` validates the front matter at build time.
Code blocks are highlighted with Shiki; use a language id Shiki knows, or `text`.

## Development

Requires Node.js 22.23.4 or newer; CI builds on Node 24.

```sh
npm install
npm run dev       # http://localhost:4321/empty-repo-6/
npm run build     # static output in dist/
npm run preview
```

## Deployment

The workflow in `.github/workflows/deploy.yml` runs on every push to `main` (and manually
via *Run workflow*). It builds the site with the `SITE` and `BASE` values provided by
`actions/configure-pages`, so forks deploy to their own Pages URL without config changes.

One-time setup in the repository: **Settings → Pages → Build and deployment → Source:
GitHub Actions**.
