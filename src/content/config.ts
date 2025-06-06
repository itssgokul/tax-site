import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		image: z.string(),
		author: z.string(),
		tags: z.array(z.string()),
	}),
});

const legalCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

export const collections = {
	blog: blogCollection,
	legal: legalCollection, // ✅ Add the legal collection
};
