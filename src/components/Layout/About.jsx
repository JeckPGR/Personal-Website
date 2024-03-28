import { AboutFirst } from "../fragments/AboutFirstline";
import { Techstack } from "../fragments/Techstack";
import { Footer } from "../Elements/Footer";
import { Quotes } from "../fragments/Quotes";
const AboutSection = () => {
  return (
    <>
      <section className="bg-slate-950 dark:bg-white flex flex-col text-gray-800  ">
        {/* Introduction Section */}
        <AboutFirst />
        <Quotes />
        {/* Tech Stack Section */}
        <Techstack />
      </section>

      <Footer />
    </>
  );
};

export default AboutSection;
