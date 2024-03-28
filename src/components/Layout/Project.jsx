import { ProjectCard } from "../fragments/ProjectCard";
import { projectanimation } from "../../Anim/projectpage";
import { useState, useRef } from "react";
import { Footer } from "../Elements/Footer";
import { ProjectData } from "../../Data/projectData";

export const Project = () => {
  const [activetype, setactivetype] = useState("Personal");
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

  return (
    <>
      <div className="flex flex-col justify-center pt-11 items-center gap-y-20 dark:bg-white bg-slate-950 dark:text-slate-950 text-white">
        <h1 className="text-5xl lg:text-6xl font-normal font-Playfair">
          My Project
        </h1>
        <div className=" flex text-center text-slate-600 w-3/4 justify-between lg:justify-around  items-center">
          {["Collab", "Personal", "UIUX"].map((type) => (
            <button
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
          className=" flex px-8  gap-14 items-center justify-center flex-wrap"
        >
          {Filteredproject.length === 0 ? (
            <>
              <div className="h-96 flex justify-center items-center">
                <p className="text-4xl text-center font-semibold text-slate-400/70">
                  {activetype} Project is not available
                </p>
              </div>
            </>
          ) : (
            Filteredproject.map((data, index) => (
              <ProjectCard
                key={data.id}
                tittle={data.tittle}
                img={data.img}
                title={data.tittle}
                viewurl={data.viewurl}
                loading="lazy"
                githuburl={data.githuburl}
                ref={(projectRef) => {
                  if (projectRef) {
                    projectanimation(projectRef, index);
                  }
                }}
              >
                {data.Desc}
              </ProjectCard>
            ))
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};
