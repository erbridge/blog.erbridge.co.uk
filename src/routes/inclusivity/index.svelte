<script context="module" lang="ts">
  import type { Preload } from "@sapper/common";
  import PostIndex from "../../components/PostIndex.svelte";

  export const preload: Preload = async function (this, _page, _session) {
    const res = await this.fetch("inclusivity.json");
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
  title="inclusivity"
  description="I work hard to encourage better inclusivity in services I help build, and places I spend time. This is a collection of thoughts on how to achieve that."
  {posts}
>
  <h1>inclusivity</h1>

  <p>
    I work hard to encourage better inclusivity in services I help build, and
    places I spend time. This is a collection of thoughts on how to achieve
    that.
  </p>
</PostIndex>
