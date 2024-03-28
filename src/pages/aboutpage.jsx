import AboutSection from "../components/Layout/About";
import { Darktoggle } from "../components/darktoggle";
import Navbar from "../components/navbar";

function Aboutpage() {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <Darktoggle />
      {/* <Footer /> */}
    </div>
  );
}

export default Aboutpage;
