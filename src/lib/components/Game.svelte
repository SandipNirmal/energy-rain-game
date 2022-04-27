<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onDestroy } from 'svelte';

	import Item from './Item.svelte';
	import { APP_STATES, colors } from '$lib/utils/gameData';
	import Intro from './Intro.svelte';

	/**
	 * Create store with all the balls, score, etc.
	 * Update store (remove) when ball moves out of screen. -> remove by index
	 * Update score on tap of every ball (based on item score)
	 */
	let score = 0;
	const SECOND = 1000;
	const GAME_TIME = 30 * SECOND;
	const COUNT = 4;
	const INTERVAL = 1500;

	let items: string[] = [];
	let int: number;
	let timeout: number;
	let itemsPassed: number = 0;

	let CURRENT_STATE = APP_STATES.INIT;

	const handleTap = (itemScore: number): void => {
		score += itemScore;
		updateItemsPassed();
	};

	const addNewItems = () => {
		const balls = Array(COUNT)
			.fill('')
			.map((i) => colors[Math.round(Math.random() * colors.length) - 1]);
		items = [...items, ...balls];
	};

	const resetScore = () => (score = 0);
	const resetItems = () => (items = []);

	const resetGame = () => {
		resetScore();
		resetItems();
		itemsPassed = 0;
	};

	const startGame = () => {
		resetGame();

		CURRENT_STATE = APP_STATES.STARTED;
		addNewItems();
		int = window.setInterval(addNewItems, INTERVAL);

		timeout = window.setTimeout(() => {
			clearInterval(int);
		}, GAME_TIME);
	};

	const updateItemsPassed = () => {
		itemsPassed += 1;
	};

	onDestroy(() => {
		int && clearInterval(int);
		timeout && clearTimeout(timeout);
	});

	$: {
		if (itemsPassed && items.length === itemsPassed) {
			CURRENT_STATE = APP_STATES.GAME_OVER;
		}
	}
</script>

<div class="game">
	{#if CURRENT_STATE === APP_STATES.INIT}
		<Intro onStart={startGame} />
	{/if}

	{#if CURRENT_STATE === APP_STATES.STARTED}
		<div class="flex justify-center p-20" out:fade>
			<h3 class="bg-white py-2 w-full rounded-3xl shadow-md text-center text-lg">
				Score: {score}
			</h3>
		</div>
		{#each items as item}
			<Item type={item} onTap={handleTap} {updateItemsPassed} />
		{/each}
	{/if}

	{#if CURRENT_STATE === APP_STATES.GAME_OVER}
		<div
			class="flex flex-col m-16 my-20 py-2 justify-center items-center bg-white shadow-md rounded-md"
			in:fade
		>
			<h1 class="text-center text-xl font-medium">Game Over</h1>
			<p class="py-2">Your Score: {score}</p>
			<button
				class="my-2 text-indigo-500 font-medium py-1 px-10 border rounded-3xl border-indigo-600 hover:bg-indigo-500 hover:text-white transition-colors"
				on:click={startGame}
			>
				Retry
			</button>
		</div>
	{/if}
</div>

<style lang="postcss">
	.game {
		overflow: hidden;
	}
</style>
