import PropTypes from "prop-types";
import { forwardRef } from "react";
import { useState } from "react";

export const ProjectCard = forwardRef(
  ({ id, title, img, viewurl, githuburl, children }, ref) => {
    const [imageLoaded, setImageLoaded] = useState(false); //Blur it before load
    const imageClass = `w-full h-40 object-cover transition-all duration-700 ease-in-out ${
      imageLoaded ? "filter-none" : "filter blur-lg"
    }`;
    return (
      <div
        aria-label="card"
        ref={ref}
        key={id}
        className=" border flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 hover:shadow-slate-200/20 dark:hover:shadow-slate-950/20  bg-slate-950 dark:bg-slate-100/40 text-slate-200 transition-all duration-300  w-80 overflow-hidden h-96  border-slate-400 rounded-md"
      >
        <img
          src={img}
          loading="lazy"
          alt="projectimages"
          className={imageClass}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="flex flex-col gap-y-2 mt-3 p-3 dark:text-slate-950">
          <h2 className="text-2xl font-semibold  ">{title}</h2>
          <p className="text-sm text-slate-400 w-[80%] dark:text-slate-950">
            {children}
          </p>
          <div></div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-start text-center gap-3 px-2 p-4 lg:pt-0 w-full justify-center items-center ">
          <ButtonCard type="Live" viewurl={viewurl} />
          <ButtonCard githuburl={githuburl} />
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

const ButtonCard = ({ type, viewurl, githuburl }) => {
  if (type === "Live") {
    return (
      <>
        <a
          href={viewurl}
          target="_blank"
          rel="noreferrer"
          className="ring-1 ring-slate-200 hover:ring-0 hover:bg-slate-200 hover:text-slate-950 dark:ring-slate-950 dark:text-slate-950 dark:hover:bg-slate-950 dark:hover:text-white px-3 py-2 transition-all duration-300 text-base w-3/4 lg:w-fit  rounded-full  "
        >
          Live View
        </a>
      </>
    );
  } else {
    return (
      <>
        <a
          href={githuburl}
          target="_blank"
          rel="noreferrer"
          className="bg-slate-300 text-slate-950 hover:bg-slate-400/80 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-950/70 px-3 py-2 transition-all duration-500   text-base w-3/4 lg:w-fit  rounded-full"
        >
          Github Code
        </a>
      </>
    );
  }
};

ButtonCard.propTypes = {
  type: PropTypes.oneOf(["Live", "Github"]),
  viewurl: PropTypes.string.isRequired,
  githuburl: PropTypes.string.isRequired,
};
ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  viewurl: PropTypes.string.isRequired,
  githuburl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired, // Adjusted to `node` for generic children content
};
