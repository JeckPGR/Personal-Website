import PropTypes from "prop-types";
import { forwardRef, useState } from "react";
import { FaLaravel, FaBootstrap, FaPhp, FaReact } from "react-icons/fa";
import {
  SiMysql,
  SiTailwindcss,
  SiGithub,
  SiFlutter,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const techIcons = {
  Laravel: <FaLaravel size={28} color="red" />,
  Bootstrap: <FaBootstrap size={32} color="purple" />,
  PHP: <FaPhp size={32} color="aqua" />,
  MySQL: <SiMysql size={32} color="orange" />,
  React: <FaReact size={32} color="aqua" />,
  TailwindCSS: <SiTailwindcss size={32} color="teal" />,
  Flutter: <SiFlutter size={28} color="aqua" />, // Adjust color as needed
  Firebase: <SiFirebase size={28} color="#FFCA28" />, // Adjust color as needed
  NextJS: <SiNextdotjs size={28} color="green" />, // Adjust color as needed
};

export const ProjectCard = forwardRef(
  (
    {
      id,
      title,
      img,
      viewurl,
      githuburl,
      techStack,
      disableGithubLink,
      disableviewLink,
      type,
      status,
    },
    ref
  ) => {
    const [imageLoaded, setImageLoaded] = useState(false); //Blur it before load
    const imageClass = `w-full object-cover relative   top-4 ease-in-out  group-hover:top-12  object-cover object-center  overflow-hidden  transition-all  h-full rounded duration-700 ease-in-out  ${
      imageLoaded ? "filter-none" : "filter blur-lg"
    } ${
      type === "Mobile"
        ? "group-hover:scale-[1.5] group-hover:top-7 group-hover:active-[1.5] group-active:top-0 "
        : "  scale-[.7] group-hover:scale-110"
    }`;

    useEffect(() => {
      AOS.init({ duration: 800 });
    });
    return (
      <div
        data-aos="zoom-out"
        aria-label="card"
        ref={ref}
        key={id}
        className="flex flex-col gap-y-2 z-10    text-slate-200  transition-all rounded    duration-300 lg:w-[450px]    "
      >
        <a
          href={viewurl}
          target="blank"
          className="overflow-hidden h-full rounded group  "
        >
          <div
            className="relative  w-full h-full  bg-gradient-to-t from-primary  to-[#081f64cf]  
          dark:bg-[radial-gradient(109.40%_90.55%_at_55.76%_4.29%,rgba(0,0,0,0.20)_0%,rgba(255,250,255,1)_100%)]"
          >
            <img
              src={img}
              loading="lazy"
              alt="projectimages"
              className={imageClass}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </a>
        <div className="flex items-center justify-between ">
          <div className="flex flex-col gap-y-2 dark:text-primary ">
            <div
              className={`lg:mt-2  rounded  flex items-center w-fit px-3 py-1
              ${
                status === "Finished"
                  ? "ring-1  dark:ring-transparent  ring-transparent  ring-offset-2 dark:ring-offset-primary ring-offset-blue-300 "
                  : "ring-1  dark:ring-transparent ring-transparent   ring-offset-2 dark:ring-offset-green-500 ring-offset-green-500"
              }
              `}
            >
              <p
                className={` uppercase dark:text-primary border-spacing-1 tracking-wide text-sm text-blue-300   font-bold
                ${
                  status !== "Finished" && "text-green-500 dark:text-green-500"
                }`}
              >
                {status}
              </p>
            </div>
            <h2 className="text-2xl font-bold">{title}</h2>

            <div className="flex gap-x-3 items-center">
              {techStack.map((tech, index) => (
                <div key={index}>{techIcons[tech]}</div>
              ))}
            </div>
          </div>
          <div className="flex justify-end lg:flex-row text-center gap-3 px-2 py-3 lg:pt-0 items-center">
            {!disableGithubLink && <ButtonCard githuburl={githuburl} />}
            {!disableviewLink && <ButtonCard type="Live" viewurl={viewurl} />}
          </div>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

const ButtonCard = ({ type, viewurl, githuburl }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  if (type === "Live") {
    return (
      <div className="relative flex items-center justify-center">
        <a
          href={viewurl}
          target="_blank"
          rel="noreferrer"
          className="ring-1 ring-slate-200 hover:ring-0 hover:bg-slate-200 hover:text-primary dark:ring-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white transition-all group size-10 flex items-center justify-center duration-300 text-base rounded-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <IoIosArrowRoundForward
            size={26}
            className="-rotate-90 group-hover:rotate-0 transition-transform duration-500 ease-in-out group-active:rotate-0"
          />
        </a>
        {showTooltip && (
          <span className="absolute z-30 left-4 bottom-full mb-2 text-sm duration-200 h-10 flex items-center justify-center font-medium w-24 text-white bg-black px-2 py-1 rounded-md">
            Live View
          </span>
        )}
      </div>
    );
  } else {
    return (
      <div className="relative flex items-center justify-center">
        <a
          href={githuburl}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="size-10 flex items-center dark:text-primary justify-center duration-300 text-base group rounded-full overflow-hidden"
        >
          <SiGithub className="w-full h-fit" />
        </a>
        {showTooltip && (
          <span className="absolute left-4 z-30 bottom-full mb-2 text-sm duration-200 h-fit flex items-center justify-center font-medium w-24 text-white bg-black px-2 py-1 rounded-md">
            GitHub Code
          </span>
        )}
      </div>
    );
  }
};

ButtonCard.propTypes = {
  type: PropTypes.oneOf(["Live", "Github"]),
  viewurl: PropTypes.string,
  githuburl: PropTypes.string,
};

ProjectCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  status: PropTypes.string,
  disableviewLink: PropTypes.string,
  img: PropTypes.string.isRequired,
  viewurl: PropTypes.string.isRequired,
  githuburl: PropTypes.string.isRequired,
  disableGithubLink: PropTypes.bool,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;
