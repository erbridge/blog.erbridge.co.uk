<script lang="ts">
  import { onMount } from "svelte";

  export let status: number;
  export let error: Error;

  const dev = process.env.NODE_ENV === "development";

  onMount(() => {
    (window as any).plausible(status.toString(), {
      props: { path: document.location.pathname },
    });
  });
</script>

<svelte:head>
  <title>{status}: {error.message} - erbridge</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
