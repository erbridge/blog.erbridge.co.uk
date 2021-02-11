<script lang="ts">
  import { BaseLayout } from "@erbridge/website-theme";
  import EmailSignup from "../components/EmailSignup.svelte";

  export let segment: string;

  const internalLinks: {
    href: string;
    segment: string | undefined;
    label?: string;
  }[] = [
    { href: ".", segment: undefined, label: "about" },
    { href: "weeknotes", segment: "weeknotes" },
    { href: "inclusivity", segment: "inclusivity" },
    { href: "archive", segment: "archive", label: "the archive" },
  ];
  const externalLink = {
    href: "https://erbridge.co.uk",
    label: "main site",
    rel: ["me"],
  };
</script>

<BaseLayout
  {segment}
  contactEmail="blog@erbridge.co.uk"
  {internalLinks}
  {externalLink}
>
  <slot slot="main" />
  <aside slot="aside"><EmailSignup /></aside>
</BaseLayout>

<style>
  aside {
    max-width: 58rem;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    text-align: right;
  }
</style>
