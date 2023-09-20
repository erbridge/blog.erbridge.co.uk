<script context="module">
	import a from "$lib/components/markdown/a.svelte";
	import {
		Head,
		LongDate,
		scrollToTop,
		transitions,
	} from "@erbridge/website-theme";
	import { ChevronsLeft, ChevronsRight } from "lucide-svelte";
	import { blur } from "svelte/transition";

	export { a };
</script>

<script>
	/** @type {string} */
	export let date;
	/** @type {string} */
	export let title;

	/** @type {{ href: string; name: string }[] | undefined} */
	export let coauthors = undefined;
	/** @type {{ from: { href: string; text: string } } | undefined} */
	export let crosspost = undefined;
	/** @type {string | undefined} */
	export let description = undefined;
	/** @type {string | undefined} */
	export let subtitle = undefined;
	/** @type {string | undefined} */
	export let previous = undefined;
	/** @type {string | undefined} */
	export let next = undefined;
	export let archived = false;
</script>

<Head
	title={(subtitle ? `${title}: ${subtitle}` : title).toLowerCase()}
	type="article"
	{description}
>
	<meta
		property="og:article:published_time"
		content={new Date(date).toISOString().split("T")[0]}
	/>

	<meta property="og:article:author" content="F" />

	{#if coauthors}
		{#each coauthors as coauthor}
			<meta property="og:article:author" content={coauthor.name} />
		{/each}
	{/if}
</Head>

<article>
	<header
		in:blur={transitions.HEADER_IN_PROPERTIES}
		out:blur={transitions.HEADER_OUT_PROPERTIES}
		on:outroend={scrollToTop}
	>
		<div>
			<h1>{title}</h1>

			{#if subtitle}
				<h2>{subtitle}</h2>
			{/if}

			<p>
				<LongDate value={date} />
			</p>

			{#if (crosspost && crosspost.from) || (coauthors && coauthors.length > 0)}
				<aside>
					{#if crosspost && crosspost.from}
						<p>
							This post was originally published on
							<cite
								><a rel="external" href={crosspost.from.href}
									>{crosspost.from.text}</a
								></cite
							>.
						</p>
					{/if}

					{#if coauthors && coauthors.length > 0}
						<p class="coauthors-intro">This post was coauthored with:</p>
						<ul class="coauthors-list">
							{#each coauthors as coauthor}
								<li>
									<a rel="author external" href={coauthor.href}
										>{coauthor.name}</a
									>
								</li>
							{/each}
						</ul>
					{/if}
				</aside>
			{/if}

			{#if previous || next}
				<aside>
					<p>This post is part of a series.</p>
					<p>
						{#if previous}
							<ChevronsLeft role="presentation" />
							<a data-sveltekit-noscroll rel="prev" href={previous}>previous</a>
						{/if}
						{#if next}
							<a data-sveltekit-noscroll rel="next" href={next}>next</a>
							<ChevronsRight role="presentation" />
						{/if}
					</p>
				</aside>
			{/if}
		</div>
	</header>

	<section
		in:blur={transitions.CONTENT_IN_PROPERTIES}
		out:blur={transitions.CONTENT_OUT_PROPERTIES}
	>
		<slot />

		{#if previous || next}
			<aside>
				{#if previous}
					<span>
						<ChevronsLeft role="presentation" />
						<a data-sveltekit-noscroll rel="prev" href={previous}>
							previous post in series
						</a>
					</span>
				{/if}
				{#if next}
					<span>
						<a data-sveltekit-noscroll rel="next" href={next}>
							next post in series
						</a>
						<ChevronsRight role="presentation" />
					</span>
				{/if}
			</aside>
		{/if}
	</section>
</article>

{#if archived}
	<aside role="banner">
		This archived post may not be accurate or up-to-date!
	</aside>
{/if}

<style>
	header {
		max-width: 30rem;
		margin-left: auto;
		text-align: right;
	}

	header p {
		color: rgba(var(--text-colour), 0.8);
	}

	header aside {
		max-width: 60%;
		margin-left: auto;
	}

	aside :global(svg) {
		width: 1em;
		height: 1em;
		vertical-align: bottom;
		color: rgb(var(--accent-colour));
	}

	.coauthors-intro {
		margin-bottom: 0;
	}

	.coauthors-list {
		margin-top: 0;
		margin-left: 0;
		padding-left: 0;
		list-style: none;
		color: rgba(var(--text-colour), 0.8);
	}

	section > aside {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	@media (min-width: 768px) {
		article {
			display: flex;
		}

		header {
			max-width: 14.5rem;
			margin-right: 2rem;
			word-wrap: break-word;
		}

		header > div {
			margin-top: -0.2em;
			border-right: 2px solid rgb(var(--accent-colour));
			padding: 0.2em 1em 3em 0;
			position: sticky;
			top: 0.8em;
			will-change: transform;
		}

		header aside {
			max-width: 80%;
		}

		section {
			min-width: 0;
			flex: 1;
		}
	}

	/*
    Prism styles

    Supported languages:

    - ini
    - javascript (partial)
    - markup (partial)

    See https://prismjs.com/faq.html#how-do-i-know-which-tokens-i-can-style-for
    for token types.
  */

	section :global(code[class*="language-"]),
	section :global(pre[class*="language-"]) {
		tab-size: 4;
	}

	section :global(code[class*="language-"]) {
		margin-right: 1em;
	}

	section :global(pre[class*="language-"]) {
		margin: 1em;
		border-left: 2px solid rgb(var(--accent-colour));
		border-right: 2px solid rgb(var(--accent-colour));
		padding: 1em;
		overflow: auto;
	}

	section :global(.token.comment),
	section :global(.token.keyword),
	section :global(.token.punctuation) {
		color: rgba(var(--text-colour), 0.7);
	}

	section :global(.token.constant),
	section :global(.token.tag) {
		color: rgb(var(--accent-colour));
	}

	section :global(.token.attr-name),
	section :global(.token.selector) {
		color: rgb(var(--accent-colour));
		font-style: italic;
	}

	section :global(.token.attr-value),
	section :global(.token.string) {
		color: rgb(var(--secondary-accent-colour));
		font-style: italic;
	}

	[role="banner"] {
		margin-top: 1rem;
		padding: 0.5em 1em;
		width: 100%;
		position: sticky;
		left: 0;
		bottom: 0;
		background-color: rgb(var(--secondary-accent-colour));
		color: rgb(var(--background-colour));
		font-family: var(--heading-font-family);
		text-align: center;
	}
</style>
