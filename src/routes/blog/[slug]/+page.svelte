<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const PostComponent = $derived(data.post.content);
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta name="description" content={data.post.description} />
</svelte:head>

<div>
	<article>
		<header>
			<h1>{data.post.title}</h1>

			<div>
				<time datetime={data.post.date}>
					{new Date(data.post.date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</time>
			</div>
		</header>

		<div>
			<PostComponent />
		</div>
	</article>

	<nav>
		<a href="/blog"> ← Back to blog </a>
	</nav>
</div>
