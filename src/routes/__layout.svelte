<script>
	import '../app.css';
</script>

<main>
	<div class="container">
		<slot />
	</div>
</main>

<style lang="postcss">
	main {
		@apply w-screen h-screen;
	}

	.container {
		@apply mx-auto w-full h-full max-w-md;
	}
</style>
