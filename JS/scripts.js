// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
	scrollTrigger: {
		trigger: ".opening-page",
		start: "top top",
		end: "+=150%",
		pin: true,
		scrub: true
	}
})
.to("#crowd-image", {
	y: -165,
	ease: "none"
})
.to("#ticket-image", {
	y: 200,
	ease: "none"
}, 0)
.to("#background-image", {
	y: -50,
	ease: "none"
}, 0);

gsap.fromTo("#ticket-image", {
	y: 200
}, {
	y: 900,
	ease: "none",
	immediateRender: false,
	scrollTrigger: {
		trigger: ".gradient-divider",
		start: "top bottom",
		end: "bottom top",
		scrub: true
	}
});

