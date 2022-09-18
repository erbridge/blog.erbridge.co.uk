import { createFeed } from "$lib/server/createFeed";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () => {
	const feed = createFeed("json", "feed");

	return new Response(feed.json1(), {
		status: 200,
		headers: { "Content-Type": "application/feed+json" },
	});
};
