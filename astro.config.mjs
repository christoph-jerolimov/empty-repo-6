// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages serves project sites from https://<owner>.github.io/<repo>/.
// The deploy workflow sets SITE and BASE from the repository name so the same
// config works for any fork; local dev falls back to the values below.
const site = process.env.SITE ?? 'https://christoph-jerolimov.github.io';
const base = process.env.BASE ?? '/empty-repo-6';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
