<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Blog posts and articles" />
</svelte:head>

<div>
	<h1 class="text-xl font-normal mb-2 text-[color:var(--theme-sub-text)]">Notes</h1>

	{#if data.posts.length === 0}
		<p>No posts published yet.</p>
	{:else}
		<div class="space-y-2">
			{#each data.posts as post}
				<article class="flex justify-between">
					<h2 class="m-0 mr-4 text-[1em] min-w-0 flex text-[color:var(--theme-link)] hover:text-[color:var(--theme-link-hover)]">
						<a class="truncate" href="/blog/{post.slug}">
							{post.title}
						</a>
					</h2>
					<span class="text-[color:var(--theme-sub-text)] whitespace-nowrap">
						<time datetime={post.date}>
							{new Date(post.date).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</time>
					</span>
				</article>
			{/each}
		</div>
	{/if}
</div>
