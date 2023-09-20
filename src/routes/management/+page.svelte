<script lang="ts">
	import { CategoryIndexPage } from "@erbridge/website-theme";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<CategoryIndexPage
	title="management"
	description="Reconciling being a manager with being an anarchist has been a tricky balance for me, but here are some of the things I’ve done and learned in the process."
	pages={data.posts}
>
	<h1>management</h1>

	<p>
		Reconciling being a manager with being an anarchist has been a tricky
		balance for me, but here are some of the things I’ve done and learned in the
		process.
	</p>
</CategoryIndexPage>
