<script lang="ts">
	import PostIndex from "$lib/components/PostIndex.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<PostIndex
	title="fiction"
	description="Stories, poems, weird word etc."
	posts={data.posts}
>
	<h1>fiction</h1>

	<p>Stories, poems, weird word art, etc.</p>
</PostIndex>
