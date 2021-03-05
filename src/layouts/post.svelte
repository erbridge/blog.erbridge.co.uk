<script context="module">
  import { Head, LongDate } from "@erbridge/website-theme";
  import { blur } from "svelte/transition";
  import a from "../components/markdown/a.svelte";
  import scrollToTop from "../utils/client/scrollToTop";
  import {
    CONTENT_IN_PROPERTIES,
    CONTENT_OUT_PROPERTIES,
    HEADER_IN_PROPERTIES,
    HEADER_OUT_PROPERTIES,
  } from "../utils/client/transitions";

  export { a };
</script>

<script>
  export let date;
  export let title;

  export let coauthors = null;
  export let crosspost = null;
  export let description = null;
  export let subtitle = null;
  export let previous = null;
  export let next = null;
</script>

<Head
  title={(subtitle ? `${title}: ${subtitle}` : title).toLowerCase()}
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
  <header
    in:blur={HEADER_IN_PROPERTIES}
    out:blur={HEADER_OUT_PROPERTIES}
    on:outrostart={scrollToTop}
  >
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

      {#if previous || next}
        <aside>
          <p>This post is part of a series.</p>
          <p>
            {#if previous}<a
                sapper:prefetch
                sapper:noscroll
                rel="prev"
                href={previous}>« previous</a
              >{/if}
            {#if next}<a sapper:prefetch sapper:noscroll rel="next" href={next}
                >next »</a
              >{/if}
          </p>
        </aside>
      {/if}
    </div>
  </header>

  <section in:blur={CONTENT_IN_PROPERTIES} out:blur={CONTENT_OUT_PROPERTIES}>
    <slot />

    {#if previous || next}
      <aside>
        {#if previous}<a
            sapper:prefetch
            sapper:noscroll
            rel="prev"
            href={previous}>« previous post in series</a
          >{/if}
        {#if next}<a sapper:prefetch sapper:noscroll rel="next" href={next}
            >next post in series »</a
          >{/if}
      </aside>
    {/if}
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

  section > aside {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
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
      min-width: 0;
      flex: 1;
    }
  }

  /*
    Prism styles

    Supported languages:

    - ini

    See https://prismjs.com/faq.html#how-do-i-know-which-tokens-i-can-style-for
    for token types.
  */

  section :global(code[class*="language-"]),
  section :global(pre[class*="language-"]) {
    tab-size: 4;
  }

  section :global(code[class*="language-"]) {
    margin-right: 1em;
  }

  section :global(pre[class*="language-"]) {
    margin: 1em;
    border-left: 2px solid rgb(var(--accent-colour));
    border-right: 2px solid rgb(var(--accent-colour));
    padding: 1em;
    overflow: auto;
  }

  section :global(.token.comment),
  section :global(.token.punctuation) {
    color: rgba(var(--text-colour), 0.7);
    font-style: normal;
  }

  section :global(.token.constant) {
    color: rgb(var(--accent-colour));
  }

  section :global(.token.selector) {
    color: rgb(var(--accent-colour));
    font-style: italic;
  }

  section :global(.token.attr-value) {
    color: rgb(var(--secondary-accent-colour));
    font-style: italic;
  }
</style>
