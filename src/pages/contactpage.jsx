import { Footer } from "../components/Elements/Footer";
import ContactForm from "../components/Layout/Contact";
import { Darktoggle } from "../components/darktoggle";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
function Contactpage() {
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
    <>
      <Navbar setToggle={setToggle} toggle={toggle} />
      <ContactForm />
      <Darktoggle />
      <Footer />
    </>
  );
}

export default Contactpage;
