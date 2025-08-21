<script lang="ts">
	import { onMount } from 'svelte';

	let lastUpdatedDate = $state<string>('');

	function isProd(): boolean {
		return import.meta.env.MODE === 'production';
	}

	function formatUpdatedDate(date?: Date): string {
		if (!date) return 'unknown';
		const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
			timeZone: 'Europe/Berlin',
			dateStyle: 'long',
			timeStyle: 'short'
		});
		return `${dateTimeFormat.format(date)} [CET]`;
	}

	onMount(async () => {
		try {
			if (!isProd()) {
				lastUpdatedDate = formatUpdatedDate(new Date());
			} else {
				// Fetch last commit date for this repo's default branch (master)
				const res = await fetch('https://api.github.com/repos/lrazovic/checcota/branches/master');
				const data: any = await res.json();
				const lastCommitDate = data?.commit?.commit?.author?.date;
				lastUpdatedDate = formatUpdatedDate(lastCommitDate ? new Date(lastCommitDate) : undefined);
			}
		} catch {
			lastUpdatedDate = 'unknown';
		}
	});
</script>

<span class="text-[0.9em] text-[color:var(--theme-sub-text)] opacity-70"
	>Last updated: {lastUpdatedDate}</span
>
