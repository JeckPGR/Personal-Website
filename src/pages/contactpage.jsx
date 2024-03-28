import { Footer } from "../components/Elements/Footer";
import ContactForm from "../components/Layout/Contact";
import { Darktoggle } from "../components/darktoggle";
import Navbar from "../components/navbar";

function Contactpage() {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Darktoggle />
      <Footer />
    </>
  );
}

export default Contactpage;
