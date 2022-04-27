<script lang="ts">
	import { GOLDEN_RATIO } from '$lib/utils/utils';
	import Skeleton from './Skeleton.svelte';

	// const style = 'background-image: linear-gradient(270deg, #cacaca, #dadada, #cacaca, #dadada);';

	const headerHeight = (1 - 1 / GOLDEN_RATIO) * 100;
	// const containerHeight = (1 / GOLDEN_RATIO) * 100;
</script>

<div class="flex flex-col items-center h-full">
	<div
		class="flex px-8 flex-col w-full items-center justify-center"
		style="height: {headerHeight}%;"
	>
		<Skeleton classname="h-16 my-2" style={`width: 64px; border-radius: 50%`} />
		<Skeleton classname="h-4 my-2"/>
		<Skeleton classname="h-4 my-2"/>
		<Skeleton classname="h-4 my-2"/>
	</div>

	<!-- <div
		class="flex px-8 flex-col w-full items-center bg-gray-500"
		style="height: {containerHeight}%;"
	/> -->
	<div />
</div>