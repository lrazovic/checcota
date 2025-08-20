<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Blog posts and articles" />
</svelte:head>

<div>
	<h1>Blog</h1>

	{#if data.posts.length === 0}
		<p>No posts published yet.</p>
	{:else}
		<div>
			{#each data.posts as post}
				<article>
					<h2>
						<a href="/blog/{post.slug}">
							{post.title}
						</a>
					</h2>

					<div>
						<time datetime={post.date}>
							{new Date(post.date).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</time>
					</div>

					<p>{post.description}</p>

					{#if post.categories.length > 0}
						<div>
							{#each post.categories as category}
								<span>
									{category}
								</span>
							{/each}
						</div>
					{/if}
				</article>
			{/each}
		</div>
	{/if}
</div>
