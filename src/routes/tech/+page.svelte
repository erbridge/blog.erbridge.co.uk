<script lang="ts">
	import { CategoryIndexPage } from "@erbridge/website-theme";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<CategoryIndexPage
	title="tech"
	description="Some opinions on technology. Because the internet definitely needs more of those!"
	pages={data.posts}
>
	<h1>tech</h1>

	<p>
		Some opinions on technology. Because the internet definitely needs more of
		those!
	</p>
</CategoryIndexPage>
