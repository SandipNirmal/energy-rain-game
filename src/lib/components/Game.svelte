<script lang="ts">
	import { onDestroy } from 'svelte';

	import Item from './Item.svelte';
	import { colors } from '$lib/utils/gameData';
	import GreenTick from './GreenTick.svelte';
	import Cross from './Cross.svelte';

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
	let gameOver = false;
	let gameStarted = false;
	let int: number;
	let timeout: number;

	const handleTap = (itemScore: number): void => {
		score += itemScore;
	};

	const startGame = () => {
		int = window.setInterval(() => {
			const balls = Array(COUNT)
				.fill('')
				.map((i) => colors[Math.round(Math.random() * colors.length) - 1]);
			items = [...items, ...balls];
		}, INTERVAL);

		timeout = window.setTimeout(() => {
			clearInterval(int);
		}, GAME_TIME);
	};

	onDestroy(() => {
		int && clearInterval(int);
		timeout && clearTimeout(timeout);
	});
</script>

<div class="game">
	{#if !gameStarted}
		<div class="flex flex-col items-center text-center p-20">
			<div class="font-medium">
				<p>In 30s, tap on as many gems as you can:</p>
				<div class="flex justify-around py-4">
					<div class="ball green-ball relative">
						<sup class="sup tick">
							<GreenTick />
						</sup>
					</div>
					<div class="ball blue-ball relative">
						<sup class="sup tick">
							<GreenTick />
						</sup>
					</div>
					<div class="ball orange-ball relative">
						<sup class="sup tick">
							<GreenTick />
						</sup>
					</div>
				</div>
			</div>

			<div class="font-medium">
				<p class="py-4">Avoid tapping on gray gems.</p>
				<div class="flex justify-center">
					<div class="ball gray-ball relative">
						<sup class="sup cross">
							<Cross />
						</sup>
					</div>
				</div>
			</div>

            <div class="flex justify-center py-6 w-full">
                <button class="bg-white py-2 w-full rounded-3xl shadow-md">Start</button>
            </div>
		</div>
	{/if}

	{#if !gameOver && gameStarted}
		{#each items as item}
			<Item type={item} onTap={handleTap} />
		{/each}
	{:else}
		<h1 class="text-center">Game Over</h1>
	{/if}
</div>

<style lang="postcss">
	.game {
		overflow: hidden;
	}

	.ball {
		@apply w-8 h-8 rounded-full;
	}

	.sup {
		@apply absolute -right-3;
	}

	.tick {
		@apply text-green-700;
	}

	.cross {
		@apply text-red-600;
	}
</style>
