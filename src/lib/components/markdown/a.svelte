<script lang="ts">
	export let href: string | undefined = undefined;
	export let rel: string | undefined = undefined;

	if (href && /^https?:/.test(href)) {
		rel = rel ? `external ${rel}` : "external";
	}
</script>

<a {...$$restProps} {href} {rel} data-sveltekit-noscroll><slot /></a>
