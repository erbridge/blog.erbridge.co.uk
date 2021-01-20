<script>
  import Head from "../components/Head.svelte";
  import LongDate from "../components/LongDate.svelte";

  export let date;
  export let title;

  export let coauthors = null;
  export let crosspost = null;
  export let description =
    "Weeknotes are an opportunity to reflect on the past week, and look forward to the next one. Mine reflect on both my personal, and my professional life, so expect a mixture of software stuff, video games, public sector work, existing as a trans person, tabletop roleplaying, and whatever else claims my attention.";
  export let subtitle = null;
</script>

<Head
  title={subtitle ? `${title}: ${subtitle}` : title}
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
  <header>
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
          <p>
            This post was originally published on
            <cite
              ><a rel="external" href={crosspost.from.href}
                >{crosspost.from.text}</a
              ></cite
            >.
          </p>

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
    </div>
  </header>

  <section>
    <slot />
  </section>
</article>

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
