<script lang="ts">
  import { Head, LongDate } from "@erbridge/website-theme";
  import { blur } from "svelte/transition";
  import scrollToTop from "../utils/client/scrollToTop";
  import {
    CONTENT_IN_PROPERTIES,
    CONTENT_OUT_PROPERTIES,
    HEADER_IN_PROPERTIES,
    HEADER_OUT_PROPERTIES,
    PAGE_IN_TRANSITION_DELAY,
    PAGE_IN_TRANSITION_DURATION,
  } from "../utils/client/transitions";

  export let title: string;
  export let description: string;
  export let posts: {
    slug: string;
    date: string;
    title: string;
    subtitle?: string;
  }[];

  const baseStaggeredTransitionIn = {
    ...CONTENT_IN_PROPERTIES,
    delay: PAGE_IN_TRANSITION_DELAY + PAGE_IN_TRANSITION_DURATION / 6,
  };

  let transitionFocusIndex: number | null = null;

  function setFocusForTransition(index: number) {
    transitionFocusIndex = index;
  }
</script>

<Head {title} {description} />

<header
  in:blur={HEADER_IN_PROPERTIES}
  out:blur={transitionFocusIndex === null
    ? HEADER_OUT_PROPERTIES
    : CONTENT_OUT_PROPERTIES}
  on:outrostart={scrollToTop}
>
  <slot />
</header>

<ul>
  {#each posts as post, index}
    <li
      in:blur={{
        ...baseStaggeredTransitionIn,
        delay:
          baseStaggeredTransitionIn.delay +
          (index * PAGE_IN_TRANSITION_DURATION) / 6,
      }}
      out:blur={transitionFocusIndex === index
        ? HEADER_OUT_PROPERTIES
        : CONTENT_OUT_PROPERTIES}
    >
      <a
        sapper:prefetch
        sapper:noscroll
        href={post.slug}
        on:click={() => setFocusForTransition(index)}
      >
        <h2>
          {post.title}{#if post.subtitle}: {post.subtitle}{/if}
        </h2>
        <p>
          <LongDate value={post.date} />
        </p>
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    padding-left: 0;
    list-style: none;
  }

  li h2 {
    font-size: 1.4em;
    margin-top: 0;
    margin-bottom: 0.2em;
  }

  li p {
    margin: 0;
    color: rgba(var(--text-colour), 0.8);
  }

  li a {
    display: block;
    border-left: 2px double rgba(var(--text-colour), 0.4);
    padding: 0.5em 0 0.5em 1em;
    text-decoration: none;
  }

  li a:active,
  li a:focus,
  li a:focus-within,
  li a:hover {
    border-left-color: rgb(var(--accent-colour));
  }
</style>
