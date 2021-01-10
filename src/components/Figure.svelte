<script lang="ts">
  export let src: string;
  export let alt: string;

  const captionId = `${src.replace(
    new RegExp("[/.]", "g"),
    "-"
  )}-caption-${Math.floor(Math.random() * 10000)}`;
</script>

<figure>
  <img {src} {alt} aria-describedby={captionId} />
  <figcaption id={captionId}>
    <slot />
  </figcaption>
</figure>
