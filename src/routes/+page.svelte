<script lang="ts">
	import Intro from '$lib/components/Intro.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<Intro />
<h2 class="mb-2 text-[1em] font-normal text-[color:var(--theme-sub-text)]">Recent notes:</h2>
{#if data.posts?.length}
	<div class="space-y-2">
		{#each data.posts as post}
			<article class="flex justify-between">
				<h2
					class="m-0 mr-4 flex min-w-0 text-[1em] text-[color:var(--theme-link)] hover:text-[color:var(--theme-link-hover)]"
				>
					<a class="truncate underline" href="/blog/{post.slug}">{post.title}</a>
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
{:else}
	<p>No posts published yet.</p>
{/if}
