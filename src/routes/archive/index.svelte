<script context="module" lang="ts">
  import type { Preload } from "@sapper/common";
  import PostIndex from "../../components/PostIndex.svelte";

  export const preload: Preload = async function (this, _page, _session) {
    const res = await this.fetch("archive.json");
    const posts = await res.json();

    return { posts };
  };
</script>

<script lang="ts">
  export let posts: {
    slug: string;
    date: string;
    title: string;
    subtitle?: string;
  }[];
</script>

<PostIndex
  title="the archive"
  description="These are the miscellaneous posts from before 2019 that I keep for posterity. Throwing things away is hard!"
  {posts}
>
  <h1>the archive</h1>

  <p>
    These are the miscellaneous posts from before 2019 that I keep for
    posterity. Throwing things away is hard!
  </p>
</PostIndex>
