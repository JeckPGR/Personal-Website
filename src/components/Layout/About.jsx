import { AboutFirst } from "../fragments/AboutFirstline";
import { Footer } from "../Elements/Footer";
// import { Quotes } from "../fragments/Quotes";

// import SiReact from "react-icons/si";
const AboutSection = () => {
  return (
    <>
      <section className="bg-primary dark:bg-mywhite px-6 py-11  w-full  flex flex-col text-gray-800  ">
        {/* Introduction Section */}
        <AboutFirst />

        {/* <Quotes /> */}
      </section>

      <Footer />
    </>
  );
};

export default AboutSection;
