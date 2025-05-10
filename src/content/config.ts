import { defineCollection, z } from "astro:content";

const Books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    post: z.boolean().default(true),
    rating: z.number().optional(),
    source: z.object({
        name: z.string(),
        url: z.string(),
    }).optional(),
    tags: z.array(z.string()).optional(),
    wordCount: z.number().optional()
  })
});

export const collections = {
  books: Books,
};

