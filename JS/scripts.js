// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Parallax scrolling effect for opening page
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
	ease: "power1.out"
})
.to("#ticket-image", {
	y: 200,
	ease: "power2.out"
}, 0)
.to("#background-image", {
	y: -50,
	ease: "slow(0.7, 0.7, false)"
}, 0);

gsap.fromTo("#ticket-image", {
	y: 200
}, {
	y: 900,
	ease: "power1.out",
	immediateRender: false,
	scrollTrigger: {
		trigger: ".gradient-divider",
		start: "top bottom",
		end: "bottom top",
		scrub: true
	}
});


// 3D hover effect on ticket image
const ticketImage = document.getElementById('ticket-image');
const openingPage = document.querySelector('.opening-page');
const hoverRadius = 900;
let hasScrolled = false;

openingPage.addEventListener('mousemove', (e) => {
  if (hasScrolled) return;
  
  const ticketRect = ticketImage.getBoundingClientRect();
  const ticketCenterX = ticketRect.left + ticketRect.width / 2;
  const ticketCenterY = ticketRect.top + ticketRect.height / 2;
  
  const distX = e.clientX - ticketCenterX;
  const distY = e.clientY - ticketCenterY;
  const distance = Math.sqrt(distX * distX + distY * distY);
  
  if (distance < hoverRadius) {
    const x = (e.clientX - ticketRect.left) / ticketRect.width;
    const y = (e.clientY - ticketRect.top) / ticketRect.height;
    
    const rotateX = (y - 0.5) * 15;
    const rotateY = (x - 0.5) * -15;
    
    ticketImage.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
});

openingPage.addEventListener('mouseleave', () => {
  if (hasScrolled) return;
  ticketImage.style.transform = 'translate(-50%, -50%) rotateX(0deg) rotateY(0deg)';
});

// Disable hover effect once scrolling starts
window.addEventListener('scroll', () => {
  hasScrolled = true;
  ticketImage.style.transform = '';
}, { once: true });


// Fade out audience gradient & text on scroll
gsap.timeline({
scrollTrigger: {
		trigger: ".audience-page",
		start: "top top",
		end: "+=300%",
		pin: true,
		scrub: true
	}
})
.to(".audience-page", {
	"--audience-overlay-opacity": 1,
	ease: "none"
}, 0)
.to(".audience-page .text-content", {
	opacity: 1,
	ease: "none"
}, 0)
.to(".audience-page", {
	"--audience-overlay-opacity": 0,
	ease: "none",
	immediateRender: false
}, 0.8)
.to(".audience-page .text-content", {
	opacity: 0,
	ease: "none",
	immediateRender: false
}, 0.8);
