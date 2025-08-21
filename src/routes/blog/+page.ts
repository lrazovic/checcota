import { loadPostsMetadata } from '$lib/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const posts = await loadPostsMetadata();
	return {
		posts,
		seo: {
			title: 'Notes',
			description: 'Blog posts and articles'
		}
	};
};
