<script lang="ts">
	import { CategoryIndexPage } from "@erbridge/website-theme";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<CategoryIndexPage
	title="food"
	description="Some things I’ve cooked that someone’s asked for a recipe for."
	pages={data.posts}
>
	<h1>food</h1>

	<p>Some things I’ve cooked that someone’s asked for a recipe for.</p>
</CategoryIndexPage>
