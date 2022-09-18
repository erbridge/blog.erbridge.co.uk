<script lang="ts">
	import PostIndex from "$lib/components/PostIndex.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<PostIndex
	title="tech"
	description="Some opinions on technology. Because the internet definitely needs more of those!"
	posts={data.posts}
>
	<h1>tech</h1>

	<p>
		Some opinions on technology. Because the internet definitely needs more of
		those!
	</p>
</PostIndex>
