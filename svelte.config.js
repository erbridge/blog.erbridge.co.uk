import autoprefixer from "autoprefixer";
import { mdsvex } from "mdsvex";
import path from "path";
import sveltePreprocess from "svelte-preprocess";

const mdsvexOptions = {
  extensions: [".sveltemd"],
  layout: {
    _: path.join(__dirname, "src", "md-layouts", "default.svelte"),
  },
};

export const extensions = [".svelte", ...mdsvexOptions.extensions];

export const preprocess = [
  mdsvex(mdsvexOptions),
  sveltePreprocess({
    postcss: {
      plugins: [autoprefixer],
    },
  }),
];
