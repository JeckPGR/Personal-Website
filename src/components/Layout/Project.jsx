import { ProjectCard } from "../fragments/ProjectCard";
import { projectanimation } from "../../Anim/projectpage";
import { useState, useRef } from "react";
import { Footer } from "../Elements/Footer";
import { ProjectData } from "../../Data/projectData";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const Project = () => {
  const [activetype, setactivetype] = useState("Website");
  const projectContainerRef = useRef(null);

  const Filteredproject = ProjectData.filter(
    (project) => project.type === activetype
  );
  const handleButtonClick = (type) => {
    navigateWithAnimation();
    setactivetype(type);
  };

  const navigateWithAnimation = () => {
    projectanimation(projectContainerRef);
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
  });

  return (
    <>
      <div className="flex flex-col justify-center pt-32  items-center gap-y-20 dark:bg-mywhite bg-primary dark:text-primary text-white">
        <div data-aos="fade-down" data-aos-delay="100">
          <h1 className="text-base md:text-xl  tracking-[6px]  font-Jakarta  font-semibold  uppercase text-center dark:text-blue-700 text-blue-500">
            Project
          </h1>
          <h2 className="text-4xl md:text-5xl mb-4 mt-2 text-mywhite font-black text-center font-Jakarta dark:text-primary">
            My Project<span className="text-blue-700">.</span>
          </h2>
        </div>
        <div className=" flex text-center text-slate-600 w-3/4 justify-between lg:justify-around  items-center">
          {["Mobile", "Website"].map((type) => (
            <button
              data-aos="zoom-out"
              data-aos-delay="400"
              key={type}
              className={` px-4 md:px-8 py-2 text-slate-200 hover:bg-transparent hover:ring-1 dark:hover:text-white hover:ring-slate-200 dark:hover:bg-slate-500 dark:text-slate-950 dark:ring-0 rounded-full lg:text-lg text-base hover:text-white transition duration-300 ${
                activetype === type &&
                "dark:bg-slate-950 ring-1 ring-slate-200 bg-transparent dark:text-white"
              }`}
              onClick={() => handleButtonClick(type)}
            >
              {`${type}`}
            </button>
          ))}
        </div>
        <div
          ref={projectContainerRef}
          className=" grid grid-cols-1 px-4 md:px-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-10   gap-y-6 gap-x-3 items-center justify-center "
        >
          {Filteredproject.length === 0 ? (
            <>
              <div className="h-96 flex justify-center items-center">
                <p className="text-4xl text-center  col-span-full font-semibold text-slate-400/70">
                  {activetype} Project is not available
                </p>
              </div>
            </>
          ) : (
            Filteredproject.map((data) => (
              <ProjectCard
                key={data.id}
                tittle={data.tittle}
                img={data.img}
                title={data.tittle}
                viewurl={data.viewurl}
                loading="lazy"
                githuburl={data.githuburl}
                techStack={data.techStack}
                disableGithubLink={data.disableGithubLink}
                ref={(projectRef) => {
                  if (projectRef) {
                    projectanimation(projectRef, data.id);
                  }
                }}
              ></ProjectCard>
            ))
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};
