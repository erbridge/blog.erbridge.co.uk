<script lang="ts">
	import { CategoryIndexPage } from "@erbridge/website-theme";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<CategoryIndexPage
	title="the archive"
	description="These are the miscellaneous posts from before 2019 that I keep for posterity. Throwing things away is hard!"
	pages={data.posts}
>
	<h1>the archive</h1>

	<p>
		These are the miscellaneous posts from before 2019 that I keep for
		posterity. Throwing things away is hard!
	</p>
</CategoryIndexPage>
