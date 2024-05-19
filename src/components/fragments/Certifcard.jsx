import { IoIosArrowRoundForward } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";
import { IoIosPaper } from "react-icons/io";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
export const CeritifCard = ({ link, title, publisher, exp }) => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  });
  return (
    <>
      <div
        data-aos="fade-right"
        className="w-full flex-col flex gap-1 overflow-hidden"
      >
        <div className="flex  gap-1">
          <a href={link} className="hover:underline">
            <h4 className="font-black line-clamp-2 md:line-clamp-1 text-lg text-mywhite dark:text-primary">
              {title}
            </h4>
          </a>
          <a href={link} className="arrow-wrapper">
            {" "}
            <IoIosArrowRoundForward size={26} />
          </a>
        </div>
        <div className="flex flex-col md:flex-row font-medium  gap-y-1 gap-x-4 ">
          <p className=" text-slate-500 flex gap-2 items-center ">
            {" "}
            <span>
              <IoIosPaper size={21} className=" text-blue-500" />
            </span>
            {publisher}
          </p>
          <p className=" text-slate-500 flex gap-2 items-center">
            {" "}
            <span>
              {" "}
              <RiTimeLine size={21} className=" text-blue-500" />
            </span>
            {exp}
          </p>
        </div>
      </div>
    </>
  );
};

CeritifCard.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  exp: PropTypes.string.isRequired,
};
