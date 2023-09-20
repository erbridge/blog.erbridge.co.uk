<script lang="ts">
	import { CategoryIndexPage } from "@erbridge/website-theme";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<CategoryIndexPage
	title="weeknotes"
	description="Weeknotes are an opportunity to reflect on the past week and look forward to the next one. Mine reflect on both my personal and my professional life, so expect a mixture of software stuff, video games, public sector work, existing as a trans person, tabletop roleplaying, and whatever else claims my attention."
	pages={data.posts}
>
	<h1>weeknotes</h1>

	<p>
		Weeknotes are an opportunity to reflect on the past week and look forward to
		the next one. Mine reflect on both my personal and my professional life, so
		expect a mixture of software stuff, video games, public sector work,
		existing as a trans person, tabletop roleplaying, and whatever else claims
		my attention.
	</p>

	<p>
		I aim to publish these notes every Friday, time, attention, and energy
		permitting.
	</p>
</CategoryIndexPage>
