<script context="module" lang="ts">
  export async function preload() {
    const res = await this.fetch("archive.json");
    const posts = await res.json();

    return { posts };
  }
</script>

<script lang="ts">
  import PostIndex from "../../components/PostIndex.svelte";

  export let posts: {
    slug: string;
    date: string;
    title: string;
    subtitle?: string;
  }[];
</script>

<PostIndex
  title="the archive"
  description="These are the miscellaneous posts I keep for posterity. Throwing things away is hard!"
  {posts}
>
  <h1>the archive</h1>

  <p>
    These are the miscellaneous posts I keep for posterity. Throwing things away
    is hard!
  </p>
</PostIndex>
