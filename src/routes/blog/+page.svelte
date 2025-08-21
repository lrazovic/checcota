<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Blog posts and articles" />
</svelte:head>

<div>
	<h1 class="mb-2 text-xl font-normal text-[color:var(--theme-sub-text)]">Notes</h1>

	{#if data.posts.length === 0}
		<p>No posts published yet.</p>
	{:else}
		<div class="space-y-2">
			{#each data.posts as post}
				<article class="flex justify-between">
					<h2
						class="m-0 mr-4 flex min-w-0 text-[1em] text-[color:var(--theme-link)] hover:text-[color:var(--theme-link-hover)]"
					>
						<a class="truncate underline" href="/blog/{post.slug}">
							{post.title}
						</a>
					</h2>
					<span class="whitespace-nowrap text-[color:var(--theme-sub-text)]">
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
