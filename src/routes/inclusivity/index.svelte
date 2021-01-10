<script context="module" lang="ts">
  export async function preload({ host, path }) {
    const url = `${host}/${path}`;

    const res = await this.fetch("inclusivity.json");
    const posts = await res.json();

    return { posts, url };
  }
</script>

<script lang="ts">
  import Head from "../../components/Head.svelte";
  import PostIndex from "../../components/PostIndex.svelte";

  export let posts: {
    slug: string;
    date: string;
    title: string;
    subtitle?: string;
  }[];
  export let url: string;
</script>

<Head
  {url}
  title="inclusivity"
  description="I work hard to encourage better inclusivity in services I help build, and
  places I spend time. This is a collection of thoughts on how to achieve
  that." />

<header>
  <h1>inclusivity</h1>

  <p>
    I work hard to encourage better inclusivity in services I help build, and
    places I spend time. This is a collection of thoughts on how to achieve
    that.
  </p>
</header>

<PostIndex {posts} />
