// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const heroHeadings = gsap.utils.toArray("#hero h1");
const mainScene = document.querySelector("main");

if (heroHeadings.length && mainScene) {
	gsap.fromTo(
		heroHeadings,
		{
			y: -220,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			ease: "none",
			stagger: 0.08,
			scrollTrigger: {
				trigger: mainScene,
				start: "top top",
				end: "+=500",
				scrub: true,
				pin: true,
				anticipatePin: 1,
			},
		}
	);
}

if (mainScene) {
	ScrollTrigger.create({
		trigger: document.body,
		start: "top -1110px",
		end: "top -1800px",
		pin: mainScene,
		anticipatePin: 1,
	});
}

// Boss section - fade in from top on scroll
const bossElements = [
	"#the-boss-heading",
	"#the-boss-text",
	"#the-boss-code-snippet",
];

// Hide elements immediately so they are never visible before scrolling
bossElements.forEach((selector) => {
	const el = document.querySelector(selector);
	if (el) gsap.set(el, { opacity: 0, y: -60 });
});

// Animate in as a staggered timeline, scrubbed over 300px of scroll starting at scrollY 1110
const bossTl = gsap.timeline({
	scrollTrigger: {
		trigger: document.body,
		start: "top -1000px",
		end: "top -1110px",
		scrub: 1,
	},
});

bossElements.forEach((selector, index) => {
	bossTl.to(
		selector,
		{ opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
		index === 0 ? 0 : "-=0.65"
	);
});


