<script context="module" lang="ts">
  export async function preload() {
    const res = await this.fetch("archive.json");
    const posts = await res.json();

    return { posts };
  }
</script>

<script lang="ts">
  import { Head } from "@erbridge/website-theme";
  import PostIndex from "../../components/PostIndex.svelte";

  export let posts: {
    slug: string;
    date: string;
    title: string;
    subtitle?: string;
  }[];
</script>

<Head
  title="the archive"
  description="These are the miscellaneous posts I keep for posterity. Throwing things away is hard!"
/>

<header>
  <h1>the archive</h1>

  <p>
    These are the miscellaneous posts I keep for posterity. Throwing things away
    is hard!
  </p>
</header>

<PostIndex {posts} />
