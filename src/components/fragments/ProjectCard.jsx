import PropTypes from "prop-types";
import { forwardRef, useState } from "react";
import { FaLaravel, FaBootstrap, FaPhp, FaReact } from "react-icons/fa";
import {
  SiMysql,
  SiTailwindcss,
  SiGithub,
  SiFlutter,
  SiFirebase,
} from "react-icons/si";
import { IoIosArrowRoundForward } from "react-icons/io";

const techIcons = {
  Laravel: <FaLaravel size={28} color="red" />,
  Bootstrap: <FaBootstrap size={32} color="purple" />,
  PHP: <FaPhp size={32} color="aqua" />,
  MySQL: <SiMysql size={32} color="orange" />,
  React: <FaReact size={32} color="aqua" />,
  TailwindCSS: <SiTailwindcss size={32} color="teal" />,
  Flutter: <SiFlutter size={28} color="aqua" />, // Adjust color as needed
  Firebase: <SiFirebase size={28} color="#FFCA28" />, // Adjust color as needed
};

export const ProjectCard = forwardRef(
  (
    { id, title, img, viewurl, githuburl, techStack, disableGithubLink },
    ref
  ) => {
    const [imageLoaded, setImageLoaded] = useState(false); //Blur it before load
    const imageClass = `w-full object-cover   object-cover object-center overflow-hidden group-hover:scale-110 transition-all bg-slate-900 h-full rounded duration-700 ease-in-out ${
      imageLoaded ? "filter-none" : "filter blur-lg"
    }`;

    return (
      <div
        aria-label="card"
        ref={ref}
        key={id}
        className="flex flex-col gap-y-2  text-slate-200 transition-all duration-300 lg:w-96  h-72 "
      >
        <a
          href={viewurl}
          target="blank"
          className="overflow-hidden h-full rounded group "
        >
          <img
            src={img}
            loading="lazy"
            alt="projectimages"
            className={imageClass}
            onLoad={() => setImageLoaded(true)}
          />
        </a>
        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col gap-y-2 dark:text-primary">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="flex gap-x-3 items-center">
              {techStack.map((tech, index) => (
                <div key={index}>{techIcons[tech]}</div>
              ))}
            </div>
          </div>
          <div className="flex justify-end lg:flex-row text-center gap-3 px-2 py-3 lg:pt-0 items-center">
            {/* Conditionally render GitHub link based on disableGithubLink flag */}
            {!disableGithubLink && <ButtonCard githuburl={githuburl} />}
            <ButtonCard type="Live" viewurl={viewurl} />
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
          <span className="absolute left-4 bottom-full mb-2 text-sm duration-200 h-10 flex items-center justify-center font-medium w-24 text-white bg-black px-2 py-1 rounded-md">
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
          <span className="absolute left-4 bottom-full mb-2 text-sm duration-200 h-fit flex items-center justify-center font-medium w-24 text-white bg-black px-2 py-1 rounded-md">
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
  img: PropTypes.string.isRequired,
  viewurl: PropTypes.string.isRequired,
  githuburl: PropTypes.string.isRequired,
  disableGithubLink: PropTypes.bool,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;
