<script>
  import LongDate from "../components/LongDate.svelte";

  export let date;
  export let subtitle = null;
  export let title;
</script>

<style>
  header {
    text-align: right;
  }

  header p {
    color: rgba(var(--text-colour), 0.8);
  }
</style>

<svelte:head>
  {#if subtitle}
    <title>{title}: {subtitle} - erbridge</title>
  {:else}
    <title>{title} - erbridge</title>
  {/if}
</svelte:head>

<article>
  <header>
    <hgroup>
      <h1>{title}</h1>

      {#if subtitle}
        <h2>{subtitle}</h2>
      {/if}

      <p>
        <LongDate value={date} />
      </p>
    </hgroup>
  </header>

  <section>
    <slot />
  </section>
</article>
