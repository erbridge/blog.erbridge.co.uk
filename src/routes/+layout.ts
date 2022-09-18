import type { LayoutLoad } from "./$types";

export const prerender = true;

export const load: LayoutLoad<{
	internalLinks: {
		href: string;
		pathPrefix: string;
		exact?: boolean;
		label: string;
	}[];
}> = () => ({
	internalLinks: [
		{ href: "/", pathPrefix: "/", exact: true, label: "home" },
		{ href: "/weeknotes", pathPrefix: "/weeknotes", label: "weeknotes" },
		{ href: "/inclusivity", pathPrefix: "/inclusivity", label: "inclusivity" },
		{ href: "/tech", pathPrefix: "/tech", label: "tech" },
		{ href: "/management", pathPrefix: "/management", label: "management" },
		{ href: "/archive", pathPrefix: "/archive", label: "the archive" },
	],
});
