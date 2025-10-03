// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  
});

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const slides = document.querySelectorAll(".swiper-slide");
const cards = document.querySelectorAll(".show-card");

// Create a timeline that only plays when bottom-content scrolls into view
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".bottom-content",
    start: "top center",  
    toggleActions: "play none none reverse",  
    scrub: 1,
  }
});

slides.forEach((slide, i) => {
  const card = cards[i];
  if (!card) return;

  // Use GSAP's `fromTo` inside the timeline
  tl.to(slide, {
    x: () => {
      const cardRect = card.getBoundingClientRect();
      const slideRect = slide.getBoundingClientRect();
      return cardRect.left - slideRect.left;
    },
    y: () => {
      const cardRect = card.getBoundingClientRect();
      const slideRect = slide.getBoundingClientRect();
      return cardRect.top - slideRect.top;
    },
    scale: 1,
    rotation: 0,
    borderRadius: "2rem",
    ease: "power3.out",
    duration: 1
  }, 0); // all animate at the same time
});
