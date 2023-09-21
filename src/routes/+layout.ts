import { dev } from "$app/environment";
import { inject } from "@vercel/analytics";
import type { LayoutLoad } from "./$types";

inject({ mode: dev ? "development" : "production" });

export const prerender = true;

export const load: LayoutLoad<{
	internalLinks: {
		href: string;
		pathPrefix: string;
		exact?: boolean;
		label: string;
	}[];
	externalLink: {
		href: string;
		label: string;
		rel?: string[];
	};
}> = () => ({
	internalLinks: [
		{ href: "/", pathPrefix: "/", exact: true, label: "blog" },
		{ href: "/weeknotes", pathPrefix: "/weeknotes", label: "weeknotes" },
		{ href: "/inclusivity", pathPrefix: "/inclusivity", label: "inclusivity" },
		{ href: "/tech", pathPrefix: "/tech", label: "tech" },
		{ href: "/management", pathPrefix: "/management", label: "management" },
		{ href: "/food", pathPrefix: "/food", label: "food" },
		{ href: "/archive", pathPrefix: "/archive", label: "the archive" },
	],
	externalLink: { href: "https://erbridge.co.uk/", label: "home", rel: ["me"] },
});
