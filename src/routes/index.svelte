<script lang="ts">
	import { onMount } from 'svelte';

	import Loading from '$lib/components/Loading.svelte';
	import { delay } from '$lib/utils/utils';
	import Game from '$lib/components/Game.svelte';

	let isLoading = true;

	onMount(async () => {
		await delay(1000);
		isLoading = false;
	});
</script>

<svelte:head>
	<title>Energy Rain</title>
	<meta name="description" content="Get supercharged by collecting energy points" />
</svelte:head>

<article class="container">
	{#if isLoading}
		<Loading />
	{:else}
		<Game />
	{/if}
</article>

<style lang="postcss">
	:global(body) {
		@apply select-none;
	}

	.container {
		@apply bg-gradient-to-b from-blue-200 to-blue-300 h-full w-full;
	}
</style>
