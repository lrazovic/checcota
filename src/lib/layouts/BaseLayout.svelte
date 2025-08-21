<script lang="ts">
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';

	let { title = 'Leonardo Razovic', children } = $props<{ title?: string; children?: any }>();
</script>

<div
	class="mx-auto min-h-dvh max-w-[60em] px-[7em] py-[7em] text-[13px]
	max-[480px]:max-w-full max-[480px]:px-[1em] max-[480px]:py-[1em] max-[480px]:text-[14px]"
>
	<SiteHeader {title} />

	<main class="my-[3em]">
		{@render children?.()}
	</main>

	<SiteFooter />
</div>
