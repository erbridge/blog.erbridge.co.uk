export default function scrollToTop() {
	const nav = document.querySelector("#app > header");
	let navBottom = 0;

	if (nav) {
		navBottom = nav.getBoundingClientRect().bottom + window.scrollY;
	}

	// Jump, so we only smooth scroll the last bit.
	if (window.scrollY > navBottom) {
		window.scrollTo({
			left: window.scrollX,
			top: navBottom,
			behavior: "instant" as ScrollBehavior,
		});
	}

	window.scrollTo({
		left: 0,
		top: 0,
		behavior: "smooth",
	});
}
