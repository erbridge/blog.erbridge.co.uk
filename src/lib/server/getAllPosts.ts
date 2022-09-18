import { walkSync } from "@nodelib/fs.walk";
import frontMatter from "front-matter";
import fs from "fs";
import path from "path";

const ROUTES_ROOT_PATH = path.resolve("src", "routes");
const ALL_PATH_SEP = new RegExp(path.sep, "g");

export function getAllPosts(rootPath: string) {
	return walkSync(path.resolve(ROUTES_ROOT_PATH, rootPath))
		.filter((entry) => entry.name.endsWith(".sveltemd"))
		.map((entry) => {
			const file = fs.readFileSync(entry.path, "utf-8");
			const { attributes } = frontMatter<{
				coauthors?: { href: string; name: string }[];
				crosspost?: { from: { href: string; text: string } };
				date: string;
				description?: string;
				title: string;
				subtitle?: string;
				previous?: string;
				next?: string;
				archived?: boolean;
			}>(file);

			const slug = path
				.relative(ROUTES_ROOT_PATH, entry.path)
				.replace(/\+page\.sveltemd$/, "")
				.replace(ALL_PATH_SEP, "/");

			return { ...attributes, slug };
		})
		.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
}
