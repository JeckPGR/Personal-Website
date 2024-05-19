import AboutSection from "../components/Layout/About";
import { Darktoggle } from "../components/darktoggle";
import Navbar from "../components/navbar";

function Aboutpage() {
  return (
    <section className="overflow-hidden">
      <Navbar />
      <AboutSection />
      <Darktoggle />
      {/* <Footer /> */}
    </section>
  );
}

export default Aboutpage;
