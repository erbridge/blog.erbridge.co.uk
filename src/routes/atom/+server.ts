import { createFeed } from "$lib/server/createFeed";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () => {
	const feed = createFeed("atom", "atom");

	return new Response(feed.atom1(), {
		status: 200,
		headers: { "Content-Type": "application/atom+xml" },
	});
};
