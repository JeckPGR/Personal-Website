// import Button from "../Elements/Button";
import myself from "../../assets/Me.png";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Skillcard from "./Skillcard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiMysql,
  SiGithub,
  SiNextdotjs,
  SiFigma,
} from "react-icons/si";

import { CeritifCard } from "./Certifcard";

const ccoursedata = [
  {
    id: 1,
    title: "Basic Web Programming",
    exp: "September 2023 - 2026",
    publisher: "Dicoding Indonesia",
    link: "https://drive.google.com/file/d/19uNBrriLkqRSogt5qEO78IJOV5ruSjKI/view?usp=sharing",
  },
  {
    id: 2,
    title: "Fundamental Front-End Web Development (Intermediate)",
    exp: "January 2024 - 2027",
    publisher: "Dicoding Indonesia",
    link: "https://drive.google.com/file/d/1MdVjZcwJLmQRx0Jukq4hcOFFnLpSQvJP/view?usp=sharing",
  },
  {
    id: 3,
    title: "Basic Git with GitHub",
    exp: "September 2023 - 2026",
    publisher: "Dicoding Indonesia",
    link: "https://drive.google.com/file/d/17N-KOF8urKpFtNBBX5n2zsWELs170-BT/view?usp=sharing",
  },
  {
    id: 4,
    title: "Basic Structured Query Language (SQL)",
    exp: "September 2023 - 2026",
    publisher: "Dicoding Indonesia",
    link: "https://drive.google.com/file/d/1tFp_zsyD9FHlpUviL-IQpvmtTOHFFahl/view?usp=sharing",
  },
  {
    id: 5,
    title: "Front-End Web Development for Beginners",
    exp: "September 2023 - 2026",
    publisher: "Dicoding Indonesia",
    link: "https://drive.google.com/file/d/1SwM4q57XBz_rtUkzPhoMSOYg4pWaEdlX/view",
  },
  {
    id: 6,
    title: "Junior Web Developer",
    exp: "November 2023 - 2026",
    publisher: "Digitalent - Kominfo",
    link: "https://drive.google.com/file/d/1cTvT7Wr2Y1al2vxFzFWeg6fu3-y4AYhN/view?usp=sharing",
  },
  {
    id: 7,
    title: "FRONTEND - CSS",
    exp: "August 2023 - 2026",
    publisher: "Myskill",
    link: "https://drive.google.com/file/d/1Au1fqRf1yKEiiiINMVmthRO1LzbxpCDS/view?usp=sharing",
  },
  {
    id: 8,
    title: "FRONTEND - HTML",
    exp: "July 2023 - 2026",
    publisher: "Myskill",
    link: "https://drive.google.com/file/d/1jWMkrRb-K7NLnN7xa5CVnQevM5ieWW2M/view?usp=sharing",
  },
  {
    id: 9,
    title: "FRONTEND - Javascript",
    exp: "October 2023 - 2026",
    publisher: "Myskill",
    link: "https://drive.google.com/file/d/11pqLGu3NnDRXfF-0jLWNNhinFAGt1mUN/view?usp=sharing",
  },
  {
    id: 10,
    title: "FRONTEND - React",
    exp: "May 2024 - 2027",
    publisher: "Myskill",
    link: "https://drive.google.com/file/d/11pqLGu3NnDRXfF-0jLWNNhinFAGt1mUN/view?usp=sharing",
  },
];

const techStack = [
  {
    icon: <SiHtml5 size={32} color="#E34F26" />,
    title: "HTML",
    level: "Advanced",
  },
  {
    icon: <SiCss3 size={32} color="#1572B6" />,
    title: "CSS",
    level: "Advanced",
  },
  {
    icon: <SiJavascript size={32} color="#F7DF1E" />,
    title: "JavaScript",
    level: "Intermediate",
  },
  {
    icon: <SiTailwindcss size={32} color="teal" />,
    title: "Tailwind CSS",
    level: "Advanced",
  },
  {
    icon: <SiBootstrap size={32} color="#7952B3" />,
    title: "Bootstrap",
    level: "Advanced",
  },
  {
    icon: <SiReact size={32} color="#61DAFB" />,
    title: "React",
    level: "Intermediate",
  },
  {
    icon: <SiNextdotjs size={32} color="#AADB1E" />,
    title: "Next.js",
    level: "Novice",
  },
  {
    icon: <SiMysql size={32} color="orange" />,
    title: "MySQL",
    level: "Intermediate",
  },
  {
    icon: <SiGithub size={32} color="black" />,
    title: "GitHub",
    level: "Novice",
  },
  {
    icon: <SiFigma size={32} color="#9013CD" />,
    title: "Figma",
    level: "Intermediate",
  },
  // Tambahkan entri baru untuk setiap tech stack
];
export const AboutFirst = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  useEffect(() => {
    AOS.init({ duration: 800 });
  });
  return (
    <div className="flex flex-col-reverse h-full     items-center justify-between gap-10 ">
      <div className="w-full flex flex-col lg:justify-start gap-y-4  lg:w-1/2 md:w-3/4   text-mywhite dark:text-slate-950">
        <div data-aos="fade-right" className="mb-8 " data-aos-delay="1200">
          <h3 className="text-2xl  font-black mb-3    text-mywhite dark:text-slate-950">
            🙌 Hello!
          </h3>
          <p className="text-sm lg:text-base leading-relaxed  text-[#eeeeeebf] dark:text-primary font-semibold  ">
            I&apos;m an aspiring front-end developer with a keen interest in
            crafting inspiring web designs. I believe that captivating and
            user-friendly design has the potential to transform the online user
            experience. With the knowledge and skills I&apos;m developing, I
            aspire to contribute to creating innovative and impactful web
            experiences in the future.
          </p>
        </div>
        <div data-aos="fade-left" className="mb-8">
          <h3 className="text-2xl  font-black mb-4    text-mywhite dark:text-slate-950">
            📞 Let&apos;s Connect
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5 ">
            <a
              data-aos="fade-right"
              href="https://www.linkedin.com/in/ahmad-dzaky-67b630248/"
              target="blank"
              className="outline outline-1 relative overflow-hidden outline-mywhite rounded-sm flex gap-y-1 group transition-colors duration-300 ease-in-out hover:bg-mywhite dark:outline-primary dark:hover:bg-primary d  flex-col  items-center py-4"
            >
              <h4 className="font-black group-hover:text-primary dark:group-hover:text-white  font-Jakarta text-2xl">
                LinkedIn
              </h4>
              <FaLinkedin
                size={34}
                className="text-sky-600  absolute translate-x-72 top-[13%] group-hover:translate-x-[74px] transition-transform duration-500 "
              />
              <p className="text-slate-500 font-bold">DzakyRazi</p>
            </a>
            <a
              data-aos="fade-left"
              href="https://github.com/JeckPGR"
              className="outline outline-1 relative overflow-hidden outline-mywhite rounded-sm flex gap-y-1 group transition-colors duration-300 ease-in-out hover:bg-mywhite dark:outline-primary dark:hover:bg-primary d  flex-col  items-center py-4"
            >
              <h4 className="font-black group-hover:text-primary dark:group-hover:text-white  font-Jakarta text-2xl">
                GitHub
              </h4>
              <FaGithub
                size={33}
                className="text-primary absolute translate-x-72 dark:group-hover:text-white top-[16%] group-hover:translate-x-[64px]  transition-transform duration-500 "
              />

              <p className="text-slate-500 font-bold">JeckPGR</p>
            </a>
          </div>
        </div>
        <div className="mb-8">
          <h3
            data-aos="zoom-in"
            className="text-2xl  font-bold mb-4    text-mywhite dark:text-slate-950"
          >
            ⚡ Tech stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {techStack.map((data, index) => (
              <Skillcard
                key={index}
                icon={data.icon}
                title={data.title}
                level={data.level}
              />
            ))}
          </div>
        </div>
        <div>
          <h3
            data-aos="fade-left"
            className="text-2xl  font-black mb-4    text-mywhite dark:text-slate-950"
          >
            📜 Certification & Course
          </h3>
          <div className="flex  flex-col gap-y-6">
            {ccoursedata.map((data) => (
              <CeritifCard
                key={data.id}
                title={data.title}
                link={data.link}
                publisher={data.publisher}
                exp={data.exp}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Top */}
      <div className="w-full flex-col flex items-center gap-4 ">
        <div data-aos="fade-down" data-aos-delay="100">
          <h1 className="text-base md:text-xl  tracking-[6px]  font-Jakarta  font-semibold  uppercase text-center dark:text-blue-500 text-blue-500">
            About
          </h1>
          <h2 className="text-4xl md:text-5xl mb-4 mt-2 text-mywhite font-black text-center font-Jakarta dark:text-slate-950">
            Get To Know Me ⁉
          </h2>
        </div>
        <div className="flex-col flex items-center gap-y-8 ">
          <img
            data-aos="fade-up"
            data-aos-delay="450"
            src={myself} // Replace with your image path
            alt="Picture of me"
            className=" border rounded-full size-48 object-cover object-center outline outline-1 outline-mywhite dark:outline-primary"
            loading="lazy"
          />
          <div className="relative " data-aos="fade-right" data-aos-delay="900">
            <p className="font-bold relative  text-mywhite dark:text-primary text-3xl">
              {" "}
              Front End Developer
            </p>
            <a
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              href="mailto:dzakyrazi@gmail.com"
              className="absolute top-1 transition-all duration-300 -right-4 ease-in-out size-[10px] animate-pulse  bg-green-400 dark:bg-green-600 rounded-full"
            >
              {" "}
            </a>
            {showTooltip && (
              <span
                href="mailto:dzakyrazi@gmail.com"
                className={`absolute -top-10 -right-28 origin-top bottom-full mb-2 text-sm duration-300 h-10 flex items-center justify-center  w-24 text-mywhite bg-black font-semibold px-2 py-1 rounded-md ${
                  showTooltip
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                Hire me
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
