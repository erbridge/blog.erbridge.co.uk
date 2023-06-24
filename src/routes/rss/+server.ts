import { createFeed } from "$lib/server/createFeed";
import type { RequestHandler } from "./$types";

export const prerender = true;

export const GET: RequestHandler = async () => {
	const feed = createFeed("rss", "rss");

	return new Response(feed.rss2(), {
		status: 200,
		headers: { "Content-Type": "application/rss+xml" },
	});
};
