import type { Component } from 'svelte';
import type { Post as PostMeta } from '$lib/types';

export type Post = PostMeta & { content: Component };
export type PostMetadata = PostMeta;

/**
 * Load all posts at build time
 */
export async function loadPosts(): Promise<Post[]> {
	// Load full modules (component + metadata)
	const modules = import.meta.glob<{ default: Component; metadata: PostMeta }>('/src/posts/*.svx', {
		eager: true
	});

	const posts: Post[] = Object.entries(modules)
		.map(([path, m]) => {
			const slug = path.split('/').pop()?.replace('.svx', '') || '';
			if (!m.metadata.published) return null;
			return {
				slug,
				title: m.metadata.title,
				description: m.metadata.description,
				date: m.metadata.date,
				published: m.metadata.published ?? true,
				content: m.default
			} satisfies Post;
		})
		.filter(Boolean) as Post[];

	// Sort posts by date (newest first)
	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Load post metadata only (lighter for listing pages)
 */
export async function loadPostsMetadata(): Promise<PostMetadata[]> {
	// Use metadata-only glob to avoid pulling components for listing
	const metaModules = import.meta.glob<PostMeta>('/src/posts/*.svx', {
		eager: true,
		import: 'metadata'
	});

	const posts: PostMetadata[] = Object.entries(metaModules)
		.map(([path, m]) => {
			if (!m.published) return null;
			const slug = path.split('/').pop()?.replace('.svx', '') || '';
			return {
				slug,
				title: m.title,
				description: m.description,
				date: m.date,
				published: m.published ?? true
			} satisfies PostMetadata;
		})
		.filter(Boolean) as PostMetadata[];

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single post by slug
 */
export async function getPost(slug: string): Promise<Post | null> {
	// Use a static glob map for Vite to pre-bundle all posts, then select by slug
	const modules = import.meta.glob<{ default: Component; metadata: PostMeta }>('/src/posts/*.svx');
	const entry = Object.entries(modules).find(([path]) => path.endsWith(`/${slug}.svx`));
	if (!entry) return null;

	try {
		const mod = await entry[1]();
		if (!mod.metadata.published) return null;
		return {
			slug,
			title: mod.metadata.title,
			description: mod.metadata.description,
			date: mod.metadata.date,
			published: mod.metadata.published ?? true,
			content: mod.default
		} satisfies Post;
	} catch (e) {
		console.error(`Error loading post ${slug}:`, e);
		return null;
	}
}
