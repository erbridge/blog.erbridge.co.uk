<script lang="ts">
	import { CategoryIndexPage } from "@erbridge/website-theme";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<CategoryIndexPage
	title="inclusivity"
	description="I work hard to encourage better inclusivity in services I help build, and places I spend time. This is a collection of thoughts on how to achieve that."
	pages={data.posts}
>
	<h1>inclusivity</h1>

	<p>
		I work hard to encourage better inclusivity in services I help build, and
		places I spend time. This is a collection of thoughts on how to achieve
		that.
	</p>
</CategoryIndexPage>
