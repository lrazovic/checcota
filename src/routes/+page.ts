import { loadPostsMetadata } from '$lib/posts';

export const load = async () => {
	const posts = await loadPostsMetadata();
	return { posts };
};
