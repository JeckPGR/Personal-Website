import { LuListFilter } from "react-icons/lu";
import Button from "./Elements/Button";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNavbar = () => {
    setToggle(!toggle);
  };

  const navigateWithAnimation = (path) => {
    const tl = gsap.timeline({
      onComplete: () => {
        window.scrollTo(0, 0);
        navigate(path, { replace: true });
        gsap.to(".transition-block", {
          translateX: "100%",
          duration: 1,
          ease: "Expo.easeinOut",
        });
      },
    });

    tl.to(".transition-block", {
      translateX: 0,
      duration: 1,
      ease: "Expo.easeinOut",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    let pageTitle = "Dzaky Razi | Personal Website";

    if (currentPath === "/About") {
      pageTitle = "Dzaky Razi | About   ";
    } else if (currentPath === "/Project") {
      pageTitle = "Dzaky Razi | Project ";
    } else if (currentPath === "/Contact") {
      pageTitle = "Dzaky Razi | Contact";
    }

    document.title = pageTitle;
  }, [location.pathname]);
  const isHomePage = location.pathname === "/";

  return (
    <header className="w-full">
      <nav
        className={`flex items-center ${
          isHomePage ? "" : "fixed top-0"
        } dark:border-none shadow dark:shadow shadow-blue-950 dark:bg-mywhite dark:text-primary z-20 justify-between bg-primary px-8 md:px-14 w-full py-3`}
      >
        <Link
          to="/"
          className="text-4xl text-slate-200 font-semibold font-Jakarta dark:text-primary "
        >
          Dzaky<span className="text-blue-600">.</span>
        </Link>
        <div className="hidden md:block text-mywhite dark:text-primary font-bold font-Jakarta">
          {currentTime}
        </div>

        <button
          aria-label={toggle ? "Close menu" : "Open menu"}
          aria-expanded={toggle}
          className={`text-2xl cursor-pointer transform origin-center text-slate-200 dark:text-primary  transition duration-300 ease-in-out ${
            toggle ? "!-rotate-180" : ""
          }`}
          onClick={toggleNavbar}
        >
          {toggle ? <MdOutlineClose /> : <LuListFilter />}
        </button>
        <div
          className={`block absolute top-14 -left-14 w-full py-4 h-screen dark:text-primary  text-slate-200 dark:bg-white transform z-10 overflow-hidden bg-primary   duration-300 ease-in-out ${
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
                className="group  relative overflow-hidden  transition-all  duration-300 ease-in-out text-2xl md:text-3xl xl:text-4xl font-Playfair uppercase w-full h-24 flex justify-center items-center"
              >
                <button
                  role="link"
                  className="z-10 group-hover:font-semibold font-Jakarta font-semibold group-hover:lg:translate-x-6 transition duration-300"
                  onClick={() => navigateWithAnimation(path)}
                  aria-label={`Navigate to ${path.substring(1) || "Home"} page`}
                >
                  {path.substring(1) || "Home"}
                </button>
                <span className="absolute opacity-0 group-active:lg:opacity-100 lg:group-hover:opacity-100 lg:-translate-x-10 lg:group-hover:translate-x-48   transition duration-300 ease-in-out">
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
      <div
        className="transition-block fixed top-0 left-0 w-full h-full bg-primary z-50 dark:bg-slate-100"
        style={{ transform: "translateX(-100%)" }}
      ></div>
    </header>
  );
}
