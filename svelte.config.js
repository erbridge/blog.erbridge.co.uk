import adapter from "@sveltejs/adapter-static";
import autoprefixer from "autoprefixer";
import { mdsvex } from "mdsvex";
import path from "path";
import rehypeSlug from "rehype-slug";
import sveltePreprocess from "svelte-preprocess";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mdsvexOptions = {
	extensions: [".sveltemd"],
	layout: {
		_: path.join(__dirname, "src", "lib", "layouts", "post.svelte"),
	},
	rehypePlugins: [rehypeSlug],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexOptions.extensions],

	preprocess: [
		mdsvex(mdsvexOptions),
		// Consult https://github.com/sveltejs/svelte-preprocess
		// for more information about preprocessors
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer],
			},
		}),
	],

	kit: {
		adapter: adapter(),
	},
};

export default config;
