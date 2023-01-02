<script lang="ts">
	import PostIndex from "$lib/components/PostIndex.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<PostIndex
	title="food"
	description="Some things I’ve cooked that someone’s asked for a recipe for."
	posts={data.posts}
>
	<h1>food</h1>

	<p>Some things I’ve cooked that someone’s asked for a recipe for.</p>
</PostIndex>
