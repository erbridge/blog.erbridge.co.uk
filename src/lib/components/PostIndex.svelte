<script lang="ts">
	import {
		Head,
		LongDate,
		scrollToTop,
		transitions,
	} from "@erbridge/website-theme";
	import { blur } from "svelte/transition";

	export let title: string;
	export let description: string;
	export let posts: {
		slug: string;
		date: string;
		title: string;
		subtitle?: string;
	}[];

	const baseStaggeredTransitionIn = {
		...transitions.CONTENT_IN_PROPERTIES,
		delay:
			transitions.PAGE_IN_TRANSITION_DELAY +
			transitions.PAGE_IN_TRANSITION_DURATION / 6,
	};

	let transitionFocusIndex: number | null = null;

	function setFocusForTransition(index: number) {
		transitionFocusIndex = index;
	}
</script>

<Head {title} {description} />

<header
	in:blur={transitions.HEADER_IN_PROPERTIES}
	out:blur={transitionFocusIndex === null
		? transitions.HEADER_OUT_PROPERTIES
		: transitions.CONTENT_OUT_PROPERTIES}
	on:outroend={transitionFocusIndex === null ? scrollToTop : undefined}
>
	<slot />
</header>

<ul>
	{#each posts as post, index}
		<li
			in:blur={{
				...baseStaggeredTransitionIn,
				delay:
					baseStaggeredTransitionIn.delay +
					(index * transitions.PAGE_IN_TRANSITION_DURATION) / 6,
			}}
			out:blur={transitionFocusIndex === index
				? transitions.HEADER_OUT_PROPERTIES
				: transitions.CONTENT_OUT_PROPERTIES}
			on:outroend={transitionFocusIndex === index ? scrollToTop : undefined}
		>
			<a
				data-sveltekit-noscroll
				href={post.slug}
				on:click={() => setFocusForTransition(index)}
			>
				<h2>
					{post.title}{#if post.subtitle}: {post.subtitle}{/if}
				</h2>
				<p>
					<LongDate value={post.date} />
				</p>
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		padding-left: 0;
		list-style: none;
	}

	li h2 {
		font-size: 1.4em;
		margin-top: 0;
		margin-bottom: 0.2em;
	}

	li p {
		margin: 0;
		color: rgba(var(--text-colour), 0.8);
	}

	li a {
		display: block;
		border-left: 2px double rgba(var(--text-colour), 0.4);
		padding: 0.5em 0 0.5em 1em;
		text-decoration: none;
	}

	li a:active,
	li a:focus,
	li a:focus-within,
	li a:hover {
		border-left-color: rgb(var(--accent-colour));
	}
</style>
