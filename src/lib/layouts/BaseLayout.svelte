<script lang="ts">
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';

  let { title = 'Leonardo Razovic', children } = $props<{ title?: string; children?: any }>();
</script>

<div class="min-h-dvh mx-auto max-w-[60em] px-[4em] py-[6.472em] text-[13px] sm:max-w-full sm:px-[1rem] sm:py-[1.618rem] sm:text-[14px]">
  <SiteHeader {title} />

  <main class="my-[3em]">
    {@render children?.()}
  </main>

  <SiteFooter />
</div>
