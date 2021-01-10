<script context="module" lang="ts">
  export async function preload({ host, path }) {
    const url = `${host}/${path}`;

    const res = await this.fetch("weeknotes.json");
    const posts = await res.json();

    return { posts, url };
  }
</script>

<script lang="ts">
  import Head from "../../components/Head.svelte";
  import LongDate from "../../components/LongDate.svelte";

  export let posts: {
    slug: string;
    date: string;
    title: string;
    description?: string;
    subtitle?: string;
  }[];
  export let url: string;
</script>

<style>
  ul {
    margin: 0;
    padding: 0;
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

<Head
  {url}
  title="weeknotes"
  description="Weeknotes are an opportunity to reflect on the past week, and look forward to the next one. Mine reflect on both my personal, and my professional life, so expect a mixture of software stuff, video games, public sector work, existing as a trans person, tabletop roleplaying, and whatever else claims my attention." />

<section>
  <h1>weeknotes</h1>

  <p>
    Weeknotes are an opportunity to reflect on the past week, and look forward
    to the next one. Mine reflect on both my personal, and my professional life,
    so expect a mixture of software stuff, video games, public sector work,
    existing as a trans person, tabletop roleplaying, and whatever else claims
    my attention.
  </p>

  <p>
    I aim to publish these notes every Friday, time, attention, and energy
    permitting.
  </p>
</section>

<ul>
  {#each posts as post}
    <li>
      <a rel="preload" href={post.slug}>
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
