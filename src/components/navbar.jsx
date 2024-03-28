import { LuListFilter } from "react-icons/lu";
import Button from "./Elements/Button";
import gsap from "gsap";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setToggle(!toggle);
  };

  // Function to handle navigation with animation
  const navigateWithAnimation = (path) => {
    // Define your animation here, then navigate
    gsap.to("body", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        navigate(path);
        gsap.fromTo("body", { opacity: 0 }, { opacity: 1, duration: 0.5 });
      },
    });
  };

  return (
    <nav className="flex items-center border-b  border-slate-200/5  dark:bg-white dark:text-slate-9500 z-20 justify-between bg-slate-950 px-8  md:px-14  w-full py-3  relative">
      <Link
        to="/"
        className="text-4xl text-slate-200 font-semibold font-Playfair dark:text-slate-950"
      >
        Dzaky
      </Link>

      <button
        aria-label={toggle ? "Close menu" : "Open menu"}
        aria-expanded={toggle}
        className={`text-2xl cursor-pointer transform origin-center text-slate-200 dark:text-slate-950 transition duration-300 ease-in-out `}
        onClick={toggleNavbar}
      >
        {toggle ? <MdOutlineClose /> : <LuListFilter />}
      </button>
      <div
        className={`block absolute top-14 -left-14 w-full py-4 h-screen dark:text-slate-950 text-slate-200 dark:bg-white transform z-10 overflow-hidden bg-slate-950  duration-300 ease-in-out ${
          toggle ? "translate-x-14" : "-left-14"
        } ${toggle && " min-h-screen "}`}
        style={{
          width: toggle ? "100%" : 0,
        }}
      >
        <ul className="flex flex-col  xl:space-y-8 overflow-hidden h-screen   ">
          {["/About", "/Project", "/Contact"].map((path, index) => (
            <li
              key={index}
              className="group hover:border-b relative overflow-hidden border-slate-200/50 transition-all dark:border-slate-950 hdark:border-b duration-300 ease-in-out text-4xl font-Playfair uppercase w-full h-24 flex justify-center items-center"
            >
              <button
                role="link"
                className="z-10 group-hover:font-semibold group-hover:translate-x-6 transition duration-300"
                onClick={() => navigateWithAnimation(path)}
                aria-label={`Navigate to ${path.substring(1) || "Home"} page`}
              >
                {path.substring(1) || "Home"}
              </button>
              <span className="absolute opacity-0 group-active:opacity-100 lg:group-hover:opacity-100 lg:-translate-x-10 lg:group-hover:translate-x-48  group-active:translate-x-32 transition duration-300 ease-in-out">
                <IoIosArrowForward
                  size={30}
                  className="hover:font-bold"
                  aria-hidden="true"
                />
              </span>
            </li>
          ))}
          <li className="  text-xl uppercase w-full h-24   flex justify-center items-center">
            <Button />
          </li>
        </ul>
      </div>
    </nav>
  );
}
