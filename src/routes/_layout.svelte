<script lang="ts">
  import { BaseLayout } from "@erbridge/website-theme";

  export let segment: string;

  const internalLinks: {
    href: string;
    segment: string | undefined;
    label?: string;
  }[] = [
    { href: ".", segment: undefined, label: "home" },
    { href: "weeknotes", segment: "weeknotes" },
    { href: "inclusivity", segment: "inclusivity" },
    { href: "tech", segment: "tech" },
    { href: "management", segment: "management" },
    { href: "archive", segment: "archive", label: "the archive" },
  ];
</script>

<BaseLayout {segment} contactEmail="blog@erbridge.co.uk" {internalLinks}>
  <slot slot="main" />
</BaseLayout>
