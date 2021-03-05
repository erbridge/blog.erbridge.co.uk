<script lang="ts">
  export let href: string | null = null;
  export let rel: string | null = null;

  const props = { href, rel };

  if (/^https?:/.test(href)) {
    props.rel = props.rel ? `external ${props.rel}` : "external";
  }

  if (!/^\w+:/.test(href)) {
    props["sapper:prefetch"] = true;
    props["sapper:noscroll"] = true;
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a {...$$restProps} {...props}><slot /></a>
