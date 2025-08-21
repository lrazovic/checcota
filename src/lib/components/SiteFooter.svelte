<script lang="ts">
	import LastUpdated from '$lib/components/LastUpdated.svelte';
	import { page } from '$app/state';
</script>

<footer
	class="relative mt-[3em] flex flex-col gap-[0.3em] pt-[1em] text-[color:var(--theme-sub-text)]"
>
	<span>
		[↗]:
		<a target="_blank" href="mailto:lrazovic@gmail.com">Email</a>,
		<a target="_blank" href="https://github.com/lrazovic">GitHub</a>,
		<a target="_blank" href="https://x.com/lrazovic">X</a>,
		<a target="_blank" href="/rss.xml">RSS</a>
	</span>
	{#if page.url.pathname === '/'}
		<LastUpdated />
	{/if}
	<slot />
	<hr class="absolute top-0 mb-[1em] w-1/4 border-t border-[color:var(--theme-sub-text)]" />
</footer>
