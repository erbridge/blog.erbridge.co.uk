<script lang="ts">
  import Nav from "../components/Nav.svelte";

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

<header>
  <Nav {segment} {internalLinks} {externalLink} />
</header>

<main>
  <slot />
</main>

<aside>
  <form
    action="https://erbridge.us7.list-manage.com/subscribe/post?u=8ee667c5a6d555a16190c31ed&amp;id=98f8fa63c9"
    method="post"
    target="_blank"
  >
    <h1>get email updates</h1>

    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <p style="position: absolute; left: -5000px;" aria-hidden="true">
      <input
        type="text"
        name="b_8ee667c5a6d555a16190c31ed_98f8fa63c9"
        tabindex="-1"
      />
    </p>

    <p>
      <input type="email" name="EMAIL" placeholder="name@example.com" /><input
        type="submit"
        value="subscribe"
      />
    </p>

    <p>
      Emails are sent at most once a week with any new posts.<br />
      Not what you want?
      <a href="mailto:blog@erbridge.co.uk">Let me know!</a>
    </p>

    <p>
      <a
        rel="external"
        href="https://us7.campaign-archive.com/home/?u=8ee667c5a6d555a16190c31ed&id=98f8fa63c9"
        >View previous emails.</a
      >
    </p>
  </form>
</aside>

<aside>
  <ul>
    <li>
      <a rel="external me" href="https://twitter.com/erbridge">twitter</a>
    </li>
    <li><a rel="external me" href="https://github.com/erbridge">github</a></li>
    <li><a href="mailto:blog@erbridge.co.uk">email</a></li>
  </ul>
</aside>

<style>
  header,
  main,
  aside {
    max-width: 58rem;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
  }

  main {
    flex-grow: 1;
  }

  aside {
    text-align: right;
  }

  input {
    border: none;
    border-bottom: 2px solid rgb(var(--secondary-accent-colour));
    padding: 0.5em;
    vertical-align: bottom;
    background-color: rgb(var(--background-colour));
    color: rgb(var(--text-colour));
    transition: color var(--transition-properties);
  }

  input:active,
  input:focus,
  input:focus-within,
  input:hover {
    color: rgb(var(--secondary-accent-colour));
  }

  input[type="email"] {
    outline: none;
    text-align: right;
  }

  input[type="submit"] {
    font-family: var(--heading-font-family);
  }

  input::placeholder {
    opacity: 0.8;
  }

  ul {
    margin-left: 0;
    padding-left: 0;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
  }
</style>
