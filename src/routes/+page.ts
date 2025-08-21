import { loadPostsMetadata } from '$lib/posts';

export const load = async () => {
	const posts = await loadPostsMetadata();
	return {
		posts,
		seo: {
			title: 'Leonardo Razovic',
			description: 'Not causing trouble, not touching anything, fixing the primus'
		}
	};
};
