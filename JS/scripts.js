// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


// Hero section - fade in from top on scroll and pin the section in place while the hero elements animate in
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

// Boss section - pin the section in place while the boss elements animate in
if (mainScene) {
	ScrollTrigger.create({
		trigger: document.body,
		start: "top -1110px",
		end: "top -1800px",
		pin: mainScene,
		anticipatePin: 1,
	});
}

// Employeescene - second pin after the boss pin range
if (mainScene) {
	ScrollTrigger.create({
		trigger: document.body,
		start: "top -2684px",
		end: "+=500",
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

// Boss section - animate the lamp dropping in from above, scrubbed over the same scroll range as the boss elements
const bossLamp = document.querySelector("#boss-lamp");

if (bossLamp) {
	gsap.fromTo(
		bossLamp,
		{ y: -140 },
		{
			y: 0,
			ease: "power2.out",
			scrollTrigger: {
				trigger: document.body,
				start: "top -1000px",
				end: "top -1110px",
				scrub: 1,
			},
		}
	);
}

// Boss section - animate boss and computer rising together from below over the same scroll range
const boss = document.querySelector("#boss");
const bossComputer = document.querySelector("#boss-computer");

if (boss && bossComputer) {
	gsap.fromTo(
		[boss, bossComputer],
		{ y: 250 },
		{
			y: 0,
			ease: "power2.out",
			scrollTrigger: {
				trigger: document.body,
				start: "top -1000px",
				end: "top -1110px",
				scrub: 1,
			},
		}
	);
}

// Boss section - animate bubble + emoji together with a pop/fade that completes at pin end + change boss skin to flush color
const bossBubble = document.querySelector("#boss-bubble");
const bossEmoji = document.querySelector("#boss-emoji");
const bossSkin = gsap.utils.toArray("#boss .skin");
const rootStyles = getComputedStyle(document.documentElement);
const skinBaseColor = rootStyles.getPropertyValue("--Skincolorprimary").trim();
const skinAccentColor = rootStyles.getPropertyValue("--Skincoloraccent").trim();
const skinFlushColor = skinBaseColor && skinAccentColor
	? gsap.utils.interpolate(skinBaseColor, skinAccentColor, 0.35)
	: skinAccentColor;

if (bossBubble && bossEmoji) {
	gsap.set([bossBubble, bossEmoji], {
		autoAlpha: 0,
		scale: 0.96,
		transformOrigin: "50% 50%",
	});

	gsap.to([bossBubble, bossEmoji], {
		autoAlpha: 1,
		scale: 1,
		ease: "power1.out",
		scrollTrigger: {
			trigger: document.body,
			start: "top -1110px",
			end: "top -1800px",
			scrub: 1,
		},
	});

	if (bossSkin.length && skinFlushColor) {
		gsap.to(bossSkin, {
			fill: skinFlushColor,
			ease: "none",
			scrollTrigger: {
				trigger: document.body,
				start: "top -1110px",
				end: "top -1800px",
				scrub: 1,
			},
		});
	}
}

// Employee section - animate lamps dropping in from above over the employee intro range
const employeeLamps = gsap.utils.toArray(".employee-lamp");

if (employeeLamps.length) {
	gsap.fromTo(
		employeeLamps,
		{ y: -140 },
		{
			y: 0,
			ease: "power2.out",
			scrollTrigger: {
				trigger: document.body,
				start: "top -2600px",
				end: "top -2684px",
				scrub: 1,
			},
		}
	);
}

// Employee section - animate employee and cubicle rising in from below over the same range
const employee = document.querySelector("#employee");
const cubicle = document.querySelector("#cubicle");

if (employee && cubicle) {
	gsap.fromTo(
		[employee, cubicle],
		{ y: 300 },
		{
			y: 0,
			ease: "power2.out",
			scrollTrigger: {
				trigger: document.body,
				start: "top -2600px",
				end: "top -2684px",
				scrub: 1,
			},
		}
	);
}

// Employee section - animate bubble + emoji together over the employee pin progression
const employeeBubble = document.querySelector("#employee-bubble");
const employeeEmoji = document.querySelector("#employee-emoji");

if (employeeBubble && employeeEmoji) {
	gsap.set([employeeBubble, employeeEmoji], {
		autoAlpha: 0,
		scale: 0.96,
		transformOrigin: "50% 50%",
	});

	gsap.to([employeeBubble, employeeEmoji], {
		autoAlpha: 1,
		scale: 1,
		ease: "power1.out",
		scrollTrigger: {
			trigger: document.body,
			start: "top -2684px",
			end: "top -2934px",
			scrub: 1,
		},
	});
}

// Employee section - after bubble reveal, move employee left toward the cubicle within the same pin
if (employee && cubicle) {
	gsap.to(employee, {
		x: () => -window.innerWidth * 0.32,
		ease: "none",
		scrollTrigger: {
			trigger: document.body,
			start: "top -2934px",
			end: "top -3184px",
			scrub: 1,
			invalidateOnRefresh: true,
		},
	});
}


