<script context="module" lang="ts">
  import type { Preload } from "@sapper/common";
  import PostIndex from "../../components/PostIndex.svelte";

  export const preload: Preload = async function (this, _page, _session) {
    const res = await this.fetch("weeknotes.json");
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
  title="weeknotes"
  description="Weeknotes are an opportunity to reflect on the past week and look forward to the next one. Mine reflect on both my personal and my professional life, so expect a mixture of software stuff, video games, public sector work, existing as a trans person, tabletop roleplaying, and whatever else claims my attention."
  {posts}
>
  <h1>weeknotes</h1>

  <p>
    Weeknotes are an opportunity to reflect on the past week and look forward to
    the next one. Mine reflect on both my personal and my professional life, so
    expect a mixture of software stuff, video games, public sector work,
    existing as a trans person, tabletop roleplaying, and whatever else claims
    my attention.
  </p>

  <p>
    I aim to publish these notes every Friday, time, attention, and energy
    permitting.
  </p>
</PostIndex>
