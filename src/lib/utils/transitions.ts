import { sineIn, sineOut } from "svelte/easing";

export const PAGE_OUT_TRANSITION_DURATION = 800;
export const PAGE_IN_TRANSITION_DELAY = PAGE_OUT_TRANSITION_DURATION;
export const PAGE_IN_TRANSITION_DURATION = 600;

export const HEADER_IN_PROPERTIES = {
	delay: PAGE_IN_TRANSITION_DELAY,
	duration: PAGE_IN_TRANSITION_DURATION,
	easing: sineOut,
};
export const HEADER_OUT_PROPERTIES = {
	delay: PAGE_OUT_TRANSITION_DURATION / 4,
	duration: (PAGE_OUT_TRANSITION_DURATION * 3) / 4,
	easing: sineIn,
};

export const CONTENT_IN_PROPERTIES = {
	delay: PAGE_IN_TRANSITION_DELAY + PAGE_IN_TRANSITION_DURATION / 3,
	duration: (PAGE_IN_TRANSITION_DURATION * 2) / 3,
	easing: sineOut,
};
export const CONTENT_OUT_PROPERTIES = {
	duration: PAGE_OUT_TRANSITION_DURATION / 2,
	easing: sineIn,
};
