# blog.erbridge.co.uk

A Sapper blog app.

## Directory structure

Sapper expects to find two directories in the root of your project — `src` and
`static`.

### src

The [src](src) directory contains the entry points for your app — `client.js`,
`server.js` and (optionally) a `service-worker.js` — along with a
`template.html` file and a `routes` directory.

#### src/routes

This is the heart of your Sapper app. There are two kinds of routes — _pages_,
and _server routes_.

**Pages** are Svelte components written in `.svelte` files. When a user first
visits the application, they will be served a server-rendered version of the
route in question, plus some JavaScript that 'hydrates' the page and initialises
a client-side router. From that point forward, navigating to other pages is
handled entirely on the client for a fast, app-like feel. (Sapper will preload
and cache the code for these subsequent pages, so that navigation is
instantaneous.)

**Server routes** are modules written in `.js` files, that export functions
corresponding to HTTP methods. Each function receives Express `request` and
`response` objects as arguments, plus a `next` function. This is useful for
creating a JSON API, for example.

There are three simple rules for naming the files that define your routes:

- A file called `src/routes/about.svelte` corresponds to the `/about` route. A
  file called `src/routes/blog/[slug].svelte` corresponds to the `/blog/:slug`
  route, in which case `params.slug` is available to the route
- The file `src/routes/index.svelte` (or `src/routes/index.js`) corresponds to
  the root of your app. `src/routes/about/index.svelte` is treated the same as
  `src/routes/about.svelte`.
- Files and directories with a leading underscore do _not_ create routes. This
  allows you to colocate helper modules and components with the routes that
  depend on them — for example you could have a file called
  `src/routes/_helpers/datetime.js` and it would _not_ create a
  `/_helpers/datetime` route.

#### src/node_modules/images

Images added to `src/node_modules/images` can be imported into your code using
`import 'images/<filename>'`. They will be given a dynamically generated
filename containing a hash, allowing for efficient caching and serving the
images on a CDN.

See [`index.svelte`](src/routes/index.svelte) for an example.

#### src/node_modules/@sapper

This directory is managed by Sapper and generated when building. It contains all
the code you import from `@sapper` modules.

### static

The [static](static) directory contains static assets that should be served
publicly. Files in this directory will be available directly under the root URL,
e.g. an `image.jpg` will be available as `/image.jpg`.

The default [service-worker.js](src/service-worker.js) will preload and cache
these files, by retrieving a list of `files` from the generated manifest:

```js
import { files } from "@sapper/service-worker";
```

If you have static files you do not want to cache, you should exclude them from
this list after importing it (and before passing it to `cache.addAll`).

Static files are served using [sirv](https://github.com/lukeed/sirv).

## Using external components

When using Svelte components installed from npm, such as
[@sveltejs/svelte-virtual-list](https://github.com/sveltejs/svelte-virtual-list),
Svelte needs the original component source (rather than any precompiled
JavaScript that ships with the component). This allows the component to be
rendered server-side, and also keeps your client-side app smaller.

Because of that, it's essential that the bundler doesn't treat the package as an
_external dependency_. You can either modify the `external` option under
`server` in [rollup.config.js](rollup.config.js), or simply install the package
to `devDependencies` rather than `dependencies`, which will cause it to get
bundled (and therefore compiled) with your app:

```bash
npm install -D @sveltejs/svelte-virtual-list
```
