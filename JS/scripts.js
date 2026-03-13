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


