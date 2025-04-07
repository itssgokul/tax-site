import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
	schema: z.object({ // Removed function wrapper () => ...
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			image: z.string(),
			author: z.string(),
			tags: z.array(z.string())
		}), // Removed function wrapper () => ...
})

export const collections = {
	posts: blogCollection
}
