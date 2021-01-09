<script lang="ts">
	export let segment: string;
</script>

<style>
	nav {
		padding: 1.5rem 2.5rem;
		font-family: var(--heading-font-family);
		font-size: 1.2rem;
	}

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		list-style: none;
	}

	a {
		border-bottom: 2px double rgb(var(--text-colour));
		padding: 0.1em 0.2em;
		text-decoration: none;
	}

	a:active,
	a:focus,
	a:focus-within,
	a:hover {
		border-bottom: 2px solid rgb(var(--accent-colour));
	}

	a:not(:last-child) {
		margin-right: 0.5em;
	}

	div {
		flex: 1;
	}

	[aria-current] {
		color: rgb(var(--accent-colour));
	}
</style>

<nav>
	<ul>
		<li>
			<a
				rel="prefetch"
				aria-current={segment === 'weeknotes' ? 'page' : undefined}
				href="weeknotes">weeknotes</a>
		</li>

		<div />

		<li><a href="https://erbridge.co.uk">main site</a></li>
	</ul>
</nav>
