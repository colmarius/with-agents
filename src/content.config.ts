import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    order: z.number(),
  }),
});

const summaries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/summaries' }),
  schema: z.object({
    title: z.string(),
    resourceId: z.coerce.number(),
    series: z.string().optional(),
    episode: z.number().int().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { posts, summaries };
