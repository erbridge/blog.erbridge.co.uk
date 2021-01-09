<script lang="ts">
	import Nav from "../components/Nav.svelte";

	export let segment: string;
</script>

<style>
	header {
		max-width: 80em;
		margin: 0 auto;
	}

	main {
		max-width: 58em;
		padding: 1em;
		margin: 0 auto;
	}
</style>

<svelte:head>
	<title>erbridge</title>
</svelte:head>

<header>
	<Nav {segment} />
</header>

<main>
	<slot />
</main>
