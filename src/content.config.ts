import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const languages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/languages' }),
  schema: z.object({
    title: z.string(),
    /** Year the language first appeared (used for sorting the timeline). */
    year: z.number().int(),
    /** Designer(s) or originating organisation. */
    designers: z.array(z.string()).default([]),
    /** Broad paradigm labels, e.g. "object-oriented", "functional". */
    paradigms: z.array(z.string()).default([]),
    /** Typing discipline, e.g. "static, strong". */
    typing: z.string().optional(),
    /** Short tagline shown on the index page. */
    summary: z.string(),
    /** Era bucket for grouping on the index page. */
    era: z.enum(['1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s']),
    /** Links to the official homepage, specification, documentation, etc. */
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        }),
      )
      .min(1),
  }),
});

export const collections = { languages };
