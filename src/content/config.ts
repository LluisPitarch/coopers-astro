import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    color: z.enum(['red', 'blue', 'magenta', 'orange']),
    tags: z
      .array(
        z.enum([
          'Frontend',
          'Backend',
          'UI/UX',
          'Microfrontends',
          'Compiler',
          'AI',
        ])
      )
      .optional(),
  }),
});

export const collections = { blog };
