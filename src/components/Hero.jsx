import Icons from "./icons";
import { useLayoutEffect, useRef } from "react";
import createLandingAnimation from "../Anim/landingpage";

function Hero() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    createLandingAnimation(comp);
  }, []);
  return (
    <>
      <div
        ref={comp}
        className="mt-12 flex md:justify-start items-center md:items-start flex-col lg:w-[100vw]  lg:px-12  xl:px-32 lg:mt-28 font-Jakarta dark:bg-mywhite bg-primary text-primary dark:text-primary text-center md:text-start selection:bg-orange-500 selection:text-white  "
      >
        <p className="text-[45px] md:text-7xl md:mt-5 lg:text-8xl font-semibold dark:text-primary text-mywhite ">
          {" "}
          Hello <span className="hidden md:inline-block">👋🏻</span>
        </p>
        <p className="text-5xl md:mt-5 lg:text-8xl font-semibold text-slate-200  dark:text-primary   lg:mt-5">
          I&rsquo;ts me{" "}
          <span className="cursor-pointer relative hover:underline ">
            Dzaky
          </span>
        </p>
        <p
          id="role"
          className="text-[45px] md:text-5xl md:mt-5 lg:text-8xl font-semibold text-slate-200 dark:text-primary  lg:mt-5"
        >
          Who Am i ?
        </p>

        <div
          id="Icon"
          className="flex mt-8 justify-evenly dark:text-primary text-white  text-4xl w-full md:w-1/2 md:justify-around lg:justify-start lg:gap-12"
        >
          <Icons />
        </div>
      </div>
    </>
  );
}

export default Hero;
