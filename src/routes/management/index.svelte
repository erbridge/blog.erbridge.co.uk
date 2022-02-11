<script context="module" lang="ts">
  import type { Preload } from "@sapper/common";
  import PostIndex from "../../components/PostIndex.svelte";

  export const preload: Preload = async function (this, _page, _session) {
    const res = await this.fetch("management.json");
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
  title="management"
  description="Reconciling being a manager with being an anarchist has been a tricky balance for me, but here are some of the things I’ve done and learned in the process."
  {posts}
>
  <h1>management</h1>

  <p>
    Reconciling being a manager with being an anarchist has been a tricky
    balance for me, but here are some of the things I’ve done and learned in the
    process.
  </p>
</PostIndex>
