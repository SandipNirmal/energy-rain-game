<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';

	import { EnergyItems, type ENERGY_ITEM } from '$lib/utils/gameData';
	import { delay } from '$lib/utils/utils';

	export let type = 'green';
	export let onTap: Function;
	export let updateItemsPassed: Function;

	let hide = false;
	let showScore = false;
	let top = Math.random() * -50;
	let ref: number;

	const MAX_HEIGHT = 100;
	const { color, points, speed } = EnergyItems[type] as ENERGY_ITEM;
	const left = Math.random() * 90;
	const style = `
		background: ${color};
		left: ${left}%;
	`;

	const handleClick = (score: number) => async () => {
		onTap(score);
		hide = true;
		cancelDrop();

		showScore = true;
		await delay(1000);
		showScore = false;
	};

	const cancelDrop = () => {
		window?.cancelAnimationFrame(ref);
	};

	onMount(() => {
		const updateTop = () => {
			top += speed;

			if (top > MAX_HEIGHT) {
				window?.cancelAnimationFrame(ref);
				hide = true;
				updateItemsPassed();
			} else {
				ref = window?.requestAnimationFrame(updateTop);
			}
		};

		updateTop();
	});

	onDestroy(() => {
		ref && cancelDrop();
	});
</script>

{#if !hide}
	<div class="ball" style={`${style} top: ${top}%;`} on:click={handleClick(points)} out:fade />
{/if}

{#if showScore}
	<div
		class="ball text-green-500 font-semibold z-50"
		style={`left: ${left}%; top: ${top}%;`}
		in:fade
		out:fly={{
			y: -20,
			duration: 1200
		}}
	>
		+{points}
	</div>
{/if}

<style>
	.ball {
		position: absolute;
		width: 40px;
		height: 40px;
		cursor: pointer;
		border-radius: 50%;
	}
</style>
