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

  @media (min-width: 700px) {
    article {
      display: flex;
    }

    header {
      max-width: 14rem;
      margin-right: 2rem;
    }

    hgroup {
      margin-top: -0.2em;
      border-right: 2px solid rgb(var(--accent-colour));
      padding: 0.2em 1em 3em 0;
      position: sticky;
      top: 0.8em;
      will-change: transform;
    }

    section {
      flex: 1;
    }
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
