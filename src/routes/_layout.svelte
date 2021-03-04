<script lang="ts">
  import { BaseLayout } from "@erbridge/website-theme";

  export let segment: string;

  const internalLinks: {
    href: string;
    segment: string | undefined;
    label?: string;
  }[] = [
    { href: ".", segment: undefined, label: "blog" },
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
</BaseLayout>
