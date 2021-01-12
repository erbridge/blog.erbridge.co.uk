<script context="module" lang="ts">
  export async function preload({ host, path }) {
    const url = `${host}/${path}`;

    const res = await this.fetch("archive.json");
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
  title="the archive"
  description="These are the miscellaneous posts I keep for posterity. Throwing things away is hard!" />

<header>
  <h1>the archive</h1>

  <p>
    These are the miscellaneous posts I keep for posterity. Throwing things away
    is hard!
  </p>
</header>

<PostIndex {posts} />
