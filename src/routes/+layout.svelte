<script lang="ts">
	import { page } from "$app/stores";
	import { BaseLayout } from "@erbridge/website-theme";
	import "@erbridge/website-theme/stylesheets/global.css";
	import "normalize.css";
	import { onMount } from "svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	onMount(async () => {
		await import("prismjs");
	});
</script>

<svelte:head>
	<meta name="theme-color" content="#2B303B" />

	<style>
		:root {
			--background-colour: 43, 48, 59;
			--text-colour: 201, 211, 233;
			--accent-colour: 0, 255, 221;
			--secondary-accent-colour: 255, 83, 187;
		}

		:root.theme--light {
			--background-colour: 247, 232, 209;
			--text-colour: 43, 48, 59;
			--accent-colour: 50, 71, 255;
			--secondary-accent-colour: 208, 2, 66;
		}

		@media (prefers-color-scheme: light) {
			:root:not(.theme--dark) {
				--background-colour: 247, 232, 209;
				--text-colour: 43, 48, 59;
				--accent-colour: 50, 71, 255;
				--secondary-accent-colour: 208, 2, 66;
			}
		}
	</style>
</svelte:head>

<BaseLayout
	pathname={$page.url.pathname}
	contactEmail="blog@erbridge.co.uk"
	internalLinks={data.internalLinks}
	externalLink={data.externalLink}
>
	<slot slot="main" />
</BaseLayout>
