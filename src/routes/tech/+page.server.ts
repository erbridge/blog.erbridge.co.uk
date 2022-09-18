import { getAllPosts } from "$lib/server/getAllPosts";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad<{
	posts: {
		slug: string;
		date: string;
		title: string;
		subtitle?: string;
	}[];
}> = () => ({
	posts: getAllPosts("tech"),
});
