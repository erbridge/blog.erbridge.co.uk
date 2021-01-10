<script lang="ts">
	import Nav from "../components/Nav.svelte";

	export let segment: string;
</script>

<style>
	header,
	main {
		max-width: 58rem;
		width: 100%;
		margin: 0 auto;
		padding: 1rem;
	}

	main {
		flex: 1;
	}
</style>

<header>
	<Nav {segment} />
</header>

<main>
	<slot />
</main>
