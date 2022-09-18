<script lang="ts">
	export let href: string | undefined = undefined;
	export let rel: string | undefined = undefined;

	const props: {
		href: string | undefined;
		rel: string | undefined;
		"data-sveltekit-prefetch"?: boolean;
		"data-sveltekit-noscroll"?: boolean;
	} = { href, rel };

	if (href && /^https?:/.test(href)) {
		props.rel = props.rel ? `external ${props.rel}` : "external";
	}

	if (href && !/^\w+:/.test(href)) {
		props["data-sveltekit-prefetch"] = true;
		props["data-sveltekit-noscroll"] = true;
	}
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a {...$$restProps} {...props}><slot /></a>
