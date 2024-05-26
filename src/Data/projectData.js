import Autosphere from "../assets/MacbookAuto.png";
import Tailwind from "../assets/MacbookTailwin.png";
import Aircarft from "../assets/Macbook-Aircarft.png";
import WatchSite from "../assets/MacbookWatchsite.png";
import EduLocal from "../assets/MacbookEdulocal.png";
import Phone1 from "../assets/Phone-EduLocal.png";

export const ProjectData = [
  {
    id: 1,
    tittle: "EduLocal",
    img: EduLocal,
    type: "Website",
    status: "Finished",
    viewurl: "#",
    githuburl: "#",
    techStack: ["Laravel", "Bootstrap", "PHP", "MySQL"],
    disableGithubLink: true,
  },

  {
    id: 2,
    tittle: "Personal Tailwind",
    img: Tailwind,
    type: "Website",
    status: "Finished",
    viewurl: "https://personal-tailwind.vercel.app/",
    githuburl: "https://github.com/JeckPGR/Personal-Tailwind.git",
    techStack: ["TailwindCSS"],
  },
  {
    id: 3,
    tittle: "Aircarft",
    img: Aircarft,
    type: "Website",
    status: "Finished",
    viewurl: "https://air-carft.vercel.app/",
    githuburl: "https://github.com/JeckPGR/AirCarft.git",
    techStack: ["React", "TailwindCSS"],
  },

  {
    id: 4,
    tittle: "Autosphere",
    img: Autosphere,
    type: "Website",
    status: "Finished",
    viewurl: "https://autosphere-orpin.vercel.app/",
    githuburl: "#",
    techStack: ["React", "TailwindCSS"],
  },
  {
    id: 5,
    tittle: "WatchSite",
    img: WatchSite,
    type: "Website",
    status: "Finished",
    viewurl: "https://watch-site.vercel.app/",
    githuburl: "#",
    techStack: ["React", "TailwindCSS", "NextJS"],
  },
  {
    id: 6,
    tittle: "EduLocal",
    img: Phone1,
    type: "Mobile",
    status: "On Build",
    viewurl: "",
    disableviewLink: true,
    githuburl: "",
    techStack: ["Flutter", "Firebase"],
  },
];
