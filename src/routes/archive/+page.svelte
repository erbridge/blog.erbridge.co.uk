<script lang="ts">
	import PostIndex from "$lib/components/PostIndex.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<PostIndex
	title="the archive"
	description="These are the miscellaneous posts from before 2019 that I keep for posterity. Throwing things away is hard!"
	posts={data.posts}
>
	<h1>the archive</h1>

	<p>
		These are the miscellaneous posts from before 2019 that I keep for
		posterity. Throwing things away is hard!
	</p>
</PostIndex>
