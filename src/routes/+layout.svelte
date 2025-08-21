<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import BaseLayout from '$lib/layouts/BaseLayout.svelte';
	import { page } from '$app/state';

	let { children } = $props();
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link
		rel="preload"
		as="font"
		href="/fonts/MonaspaceNeon-Bold.woff2"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href="/fonts/MonaspaceNeon-Regular.woff2"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href="/fonts/MonaspaceNeon-Italic.woff2"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<title>{page.data?.seo?.title ?? 'Leonardo Razovic'}</title>
	<meta name="description" content={page.data?.seo?.description ?? 'Software engineer. Notes and posts.'} />
</svelte:head>

<BaseLayout>
	{@render children?.()}
</BaseLayout>
