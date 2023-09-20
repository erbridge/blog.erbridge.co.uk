<script lang="ts">
	import { CategoryIndexPage } from "@erbridge/website-theme";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<CategoryIndexPage
	title="fiction"
	description="Stories, poems, weird word etc."
	pages={data.posts}
>
	<h1>fiction</h1>

	<p>Stories, poems, weird word art, etc.</p>
</CategoryIndexPage>
