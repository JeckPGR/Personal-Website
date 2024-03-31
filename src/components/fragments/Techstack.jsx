import {
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiBootstrap,
  SiFigma,
  SiGithub,
  SiNextdotjs,
} from "react-icons/si";

// Expanded tech stack with more items and colors
const techstack = [
  {
    id: 1,
    image: SiHtml5,
    title: "HTML5",
    hovercolor: "orange-400",
  },
  {
    id: 2,
    image: SiCss3,
    title: "CSS3",
    hovercolor: "blue-400",
  },
  {
    id: 3,
    image: SiJavascript,
    title: "JavaScript",
    hovercolor: "amber-400",
  },

  {
    id: 4,
    image: SiTailwindcss,
    title: "Tailwind CSS",
    hovercolor: "sky-400",
  },
  {
    id: 5,
    image: SiReact,
    title: "React",
    hovercolor: "blue-500",
  },
  {
    id: 6,
    image: SiBootstrap,
    title: "Bootstrap",
    hovercolor: "purple-500",
  },
  {
    id: 7,
    image: SiMysql,
    title: "MySQL",
    hovercolor: "orange-200",
  },
  {
    id: 8,
    image: SiFigma,
    title: "Figma",
    hovercolor: "purple-500",
  },
  {
    id: 9,
    image: SiGithub,
    title: "Github",
    hovercolor: "slate-200",
  },
  {
    id: 10,
    image: SiNextdotjs,
    title: "Next Js",
    hovercolor: "green-400",
  },
];

// Updated color map to include more colors
const colorMap = {
  "orange-400": "#E34F26",
  "orange-200": "#ff8c00",
  "sky-400": "#38BDF8",
  "blue-400": "#3BA8F6",
  "blue-500": "#3B82F6",
  "amber-400": "#FBBF24",
  "purple-500": "#9013CD",
  "black-500": "#94a2d4",
  "gray-500": "#808080",
  "green-400": "#AADB1E",
  "slate-200": "fefefefe",
};

export const Techstack = () => {
  return (
    <>
      <div
        aria-label="Tech Stack"
        className="flex flex-col gap-y-10 justify-center items-center mt-20 lg:mt-0 mb-6"
      >
        <h1 className="text-6xl text-center text-slate-200 font-semibold dark:text-slate-950">
          Tech Stack
        </h1>
        <div className="flex-wrap justify-center items-center lg:grid lg:px-10 lg:grid-cols-5 gap-8 flex md:w-[700px] lg:py-10 lg:pb-20 lg:w-full max-w-6xl">
          {techstack.map((data) => {
            const IconComponent = data.image;
            let iconColor = colorMap[data.hovercolor] || "#000009";

            return (
              <div
                key={data.id}
                className="flex  lg:w-full size-36 overflow-hidden p-2 transition-all duration-300 flex-col items-center justify-around rounded-md text-slate-200 ring-1 ring-slate-950/50 hover:shadow-techcard hover:shadow-slate-100/30 hover:-translate-y-3 dark:bg-slate-100/50 bg-slate-800/40 dark:shadow-slate-950/20 "
              >
                <IconComponent size={80} color={iconColor} loading="lazy" />
                <p
                  className="text-center font-semibold text-lg"
                  style={{ color: colorMap[data.hovercolor] || "#000000" }}
                >
                  {data.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
