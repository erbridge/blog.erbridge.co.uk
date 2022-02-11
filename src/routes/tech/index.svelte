<script context="module" lang="ts">
  import type { Preload } from "@sapper/common";
  import PostIndex from "../../components/PostIndex.svelte";

  export const preload: Preload = async function (this, _page, _session) {
    const res = await this.fetch("tech.json");
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
  title="tech"
  description="Some opinions on technology. Because the internet definitely needs more of those!"
  {posts}
>
  <h1>tech</h1>

  <p>
    Some opinions on technology. Because the internet definitely needs more of
    those!
  </p>
</PostIndex>
