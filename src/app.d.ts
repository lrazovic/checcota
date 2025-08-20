// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

// Typed mdsvex modules (.svx)
declare module '*.svx' {
	import type { Component } from 'svelte';

	export const metadata: {
		title: string;
		description: string;
		date: string; // ISO string preferred
		published?: boolean;
	};

	const component: Component;
	export default component;
}
