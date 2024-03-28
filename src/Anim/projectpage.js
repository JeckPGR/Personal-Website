import gsap from "gsap";

export const projectanimation = (comp, index) => {
  gsap.fromTo(
    comp.current,
    { opacity: 0 }, // Start each card with opacity: 0 and 0
    { opacity: 1, duration: 0.5, delay: index * 1 } // Set a delay based on the index
  );
};
