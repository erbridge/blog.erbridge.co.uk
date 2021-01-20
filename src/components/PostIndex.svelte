<script lang="ts">
  import LongDate from "./LongDate.svelte";

  export let posts: {
    slug: string;
    date: string;
    title: string;
    subtitle?: string;
  }[];
</script>

<ul>
  {#each posts as post}
    <li>
      <a rel="prefetch" href={post.slug}>
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
