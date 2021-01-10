<script>
  import Head from "../components/Head.svelte";
  import LongDate from "../components/LongDate.svelte";

  export let date;
  export let title;

  export let description =
    "Weeknotes are an opportunity to reflect on the past week, and look forward to the next one. Mine reflect on both my personal, and my professional life, so expect a mixture of software stuff, video games, public sector work, existing as a trans person, tabletop roleplaying, and whatever else claims my attention.";
  export let subtitle = null;
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

<Head
  title={subtitle ? `${title}: ${subtitle}` : title}
  type="article"
  {description}>
  <meta
    property="og:article:published_time"
    content={new Date(date).toISOString().split('T')[0]} />
  <meta property="og:article:author" content="F" />
  <meta property="og:article:section" content="weeknotes" />
</Head>

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
