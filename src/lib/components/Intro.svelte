<script lang="ts">
	import Cross from './Cross.svelte';
	import GreenTick from './GreenTick.svelte';

	export let onStart;
</script>

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
		<button class="bg-white py-2 w-full rounded-3xl shadow-md" on:click={onStart}>Start</button>
	</div>
	<p class="text-sm font-medium">Use mobile browser for better experience</p>
</div>

<style lang="postcss">
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
