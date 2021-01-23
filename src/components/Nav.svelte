<script lang="ts">
  export let segment: string;
  export let internalLinks: {
    href: string;
    segment: string | undefined;
    label?: string;
  }[];
  export let externalLink: { href: string; label: string; rel?: string[] };
</script>

<nav>
  <ul>
    {#each internalLinks as link}
      <li>
        <a
          sapper:prefetch
          aria-current={segment === link.segment ? "page" : undefined}
          href={link.href}>{link.label || link.href}</a
        >
      </li>
    {/each}

    <li>
      <a
        rel="external{externalLink.rel ? ` ${externalLink.rel.join(' ')}` : ''}"
        href={externalLink.href}>{externalLink.label}</a
      >
    </li>
  </ul>
</nav>

<style>
  nav {
    font-family: var(--heading-font-family);
    font-weight: 600;
    font-size: 1.2rem;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li:not(:last-child) {
    margin-top: 0.3em;
    margin-top: calc(0.2em + 2px);
  }

  li:last-child {
    order: -1;
    margin-left: auto;
  }

  a {
    border-bottom: 2px double rgb(var(--text-colour));
    border-left: 2px double rgb(var(--text-colour));
    padding: 0.1em 0.2em;
    text-decoration: none;
  }

  a:active,
  a:focus,
  a:focus-within,
  a:hover {
    border-bottom-color: rgb(var(--accent-colour));
    border-left-color: rgb(var(--accent-colour));
  }

  a[href^="http"]:active,
  a[href^="http"]:focus,
  a[href^="http"]:focus-within,
  a[href^="http"]:hover {
    border-bottom-color: rgb(var(--secondary-accent-colour));
    border-left-color: rgb(var(--secondary-accent-colour));
  }

  a:not(:last-child) {
    margin-right: 0.5em;
  }

  [aria-current] {
    border-bottom: 2px solid rgb(var(--accent-colour));
    border-left: 2px solid rgb(var(--accent-colour));
  }

  @media (min-width: 600px) {
    ul {
      flex-direction: row;
    }

    li:not(:last-child) {
      margin-top: 0;
    }

    li:last-child {
      order: initial;
    }

    a {
      border-left: none;
    }

    [aria-current] {
      border-left: none;
    }
  }
</style>
