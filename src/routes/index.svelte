<script lang="ts">
  import { Head } from "@erbridge/website-theme";
  import { blur } from "svelte/transition";
  import scrollToTop from "../utils/client/scrollToTop";
  import {
    CONTENT_IN_PROPERTIES,
    CONTENT_OUT_PROPERTIES,
    HEADER_IN_PROPERTIES,
    HEADER_OUT_PROPERTIES,
  } from "../utils/client/transitions";
</script>

<Head />

<header
  in:blur={HEADER_IN_PROPERTIES}
  out:blur={HEADER_OUT_PROPERTIES}
  on:outrostart={scrollToTop}
>
  <p>hi, my name is F</p>

  <h1>this is the home of my ramblings.</h1>
</header>

<section in:blur={CONTENT_IN_PROPERTIES} out:blur={CONTENT_OUT_PROPERTIES}>
  <p>
    I’m an
    <span class="secondary">anarchist</span>,
    <span class="secondary">agender</span>,
    <span class="secondary">trans</span>,
    <span class="secondary">queer</span>,
    <span class="secondary">ace</span>,
    <span class="secondary">autistic</span>,
    <span class="secondary">mentally ill</span>,
    <span class="secondary">disabled</span>,
    <span class="secondary">vegan</span>,
    <span class="secondary">tattooed</span>
    <span>technologist</span>.
  </p>

  <p>
    I used to make <span>games</span>. Now I work to improve
    <span>public services</span>.
  </p>
</section>

<aside in:blur={CONTENT_IN_PROPERTIES} out:blur={CONTENT_OUT_PROPERTIES}>
  <p>
    For more about me and my work, professional and personal, see my <a
      rel="external me"
      href="https://erbridge.co.uk">main site</a
    >.
  </p>

  <p>
    If you’d like to chat about anything I’ve written,
    <a rel="external me" href="https://twitter.com/erbridge">tweet or DM me</a>
    or
    <a href="mailto:blog@erbridge.co.uk">email me</a>. I’d love to hear from
    you!
  </p>
</aside>

<style>
  header {
    margin: 25vh 0;
  }

  header p {
    margin-bottom: 0;
    font-family: var(--heading-font-family);
    font-weight: 600;
    font-size: 1em;
    line-height: 1.2;
    color: rgb(var(--accent-colour));
  }

  header h1 {
    margin-top: 0.2em;
    margin-bottom: 2em;
    margin-left: 0.8em;
  }

  section {
    margin-bottom: 20vh;
    margin-left: 5em;
    font-size: 1.1em;
  }

  section p:not(:last-child) {
    margin-bottom: 10vh;
  }

  section p:last-child {
    margin-left: 3em;
  }

  aside {
    margin: 0 2em;
    font-size: 1em;
  }

  span {
    font-family: var(--heading-font-family);
    color: rgb(var(--accent-colour));
  }

  span.secondary {
    color: rgb(var(--secondary-accent-colour));
  }

  @media (min-width: 900px) {
    header {
      font-size: 1.2em;
    }

    section {
      font-size: 1.2em;
    }
  }

  @media (min-width: 1024px) {
    header {
      font-size: 1.4em;
    }

    section {
      font-size: 1.2em;
    }
  }
</style>
