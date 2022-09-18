import { createFeed } from "$lib/server/createFeed";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () => {
	const feed = createFeed("rss2", "rss");

	return new Response(feed.rss2(), {
		status: 200,
		headers: { "Content-Type": "application/rss+xml" },
	});
};
