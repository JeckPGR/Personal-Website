import { Project } from "../components/Layout/Project";
import { Darktoggle } from "../components/darktoggle";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
function Projectpage() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Mengontrol perilaku scroll saat navbar dibuka atau ditutup
    if (toggle) {
      document.body.style.overflow = "hidden"; // Optional: Disable body scrolling
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggle]);

  return (
    <section className="overflow-hidden">
      <Navbar setToggle={setToggle} toggle={toggle} />
      <Project />
      <Darktoggle />
    </section>
  );
}

export default Projectpage;
