import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin"; // Adjust the import path based on how you access TextPlugin

gsap.registerPlugin(TextPlugin);
// Function to create and return a GSAP timeline
function createLandingAnimation(comp) {
  // Use gsap.context to manage the lifecycle of GSAP animations in React components
  return gsap.context(() => {
    const tl = gsap.timeline();

    tl.from(comp.current, {
      duration: 1.8,
      x: -20,
      opacity: 1,
    });

    tl.fromTo(
      comp.current.querySelectorAll("p"),
      { opacity: 0, y: 0, x: -120, scale: 1 },
      { duration: 1.3, y: 0, x: 0, opacity: 1, stagger: 0.2 },
      "-=0.8" // Overlap with container animation
    );

    // Text writing animation for the "role" text
    tl.to(
      comp.current.querySelector("#role"),
      {
        duration: 2.3,
        text: "A Front End Developer",
        delay: 2.4,
        stagger: 0.1,
      },
      "-=1.2"
    );

    tl.fromTo(
      comp.current.querySelector("#Icon"),
      { opacity: 0, x: 10, scale: 1 },
      { duration: 2, x: 0, opacity: 1 },
      "-=0.5" // Overlap with last <p> animation
    );
  }, comp);
}

export default createLandingAnimation;
