import { Feed } from "feed";
import type { Author } from "feed/lib/typings";
import { getAllPosts } from "./getAllPosts";

const BASE_URL = "https://blog.erbridge.co.uk/";

export function createFeed(type: "atom" | "json" | "rss", slug: string) {
	const feed = new Feed({
		id: BASE_URL,
		title: "erbridge",
		language: "en-GB",
		feedLinks: {
			[type]: `${BASE_URL}${slug}`,
		},
		link: BASE_URL,
		description: "F's blog",
		copyright: "",
	});

	const posts = getAllPosts(".");

	for (const post of posts) {
		const url = `${BASE_URL}${post.slug}`;

		const authors: Author[] = [
			{
				name: "F",
				email: "blog@erbridge.co.uk",
				link: "https://erbridge.co.uk",
			},
		];

		if (post.coauthors) {
			for (const author of post.coauthors) {
				authors.push({ name: author.name, link: author.href });
			}
		}

		feed.addItem({
			title: post.subtitle ? `${post.title}: ${post.subtitle}` : post.title,
			link: url,
			date: new Date(post.date),
			description: post.description,
			author: authors,
		});
	}

	return feed;
}
