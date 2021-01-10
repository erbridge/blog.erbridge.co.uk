<script>
  import Head from "../components/Head.svelte";
  import LongDate from "../components/LongDate.svelte";

  export let date;
  export let title;

  export let crosspost = null;
  export let description =
    "Weeknotes are an opportunity to reflect on the past week, and look forward to the next one. Mine reflect on both my personal, and my professional life, so expect a mixture of software stuff, video games, public sector work, existing as a trans person, tabletop roleplaying, and whatever else claims my attention.";
  export let subtitle = null;
</script>

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

  @media (min-width: 700px) {
    article {
      display: flex;
    }

    header {
      max-width: 14rem;
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
</Head>

<article>
  <header>
    <div>
      <h1>{title}</h1>

      {#if subtitle}
        <h2>{subtitle}</h2>
      {/if}

      <p>
        <LongDate value={date} />
      </p>

      {#if crosspost && crosspost.from}
        <aside>
          <p>
            This post was originally published on
            <cite><a
                href={crosspost.from.href}>{crosspost.from.text}</a></cite>.
          </p>
        </aside>
      {/if}
    </div>
  </header>

  <section>
    <slot />
  </section>
</article>
