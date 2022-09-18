<script lang="ts">
	import PostIndex from "$lib/components/PostIndex.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<PostIndex
	title="inclusivity"
	description="I work hard to encourage better inclusivity in services I help build, and places I spend time. This is a collection of thoughts on how to achieve that."
	posts={data.posts}
>
	<h1>inclusivity</h1>

	<p>
		I work hard to encourage better inclusivity in services I help build, and
		places I spend time. This is a collection of thoughts on how to achieve
		that.
	</p>
</PostIndex>
