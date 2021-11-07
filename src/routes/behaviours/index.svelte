<script context="module" lang="ts">
  import type { Preload } from "@sapper/common";
  import PostIndex from "../../components/PostIndex.svelte";

  export const preload: Preload = async function (this, _page, _session) {
    const res = await this.fetch("behaviours.json");
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
  title="behaviours"
  description="I put a lot of thought into the things I do and the ways in which I behave. This is a collection of those that I’ve tried to put into words."
  {posts}
>
  <h1>behaviours</h1>

  <p>
    I put a lot of thought into the things I do and the ways in which I behave.
    This is a collection of those that I've tried to put into words.
  </p>
</PostIndex>
