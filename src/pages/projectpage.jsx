import { Project } from "../components/Layout/Project";
import { Darktoggle } from "../components/darktoggle";
import Navbar from "../components/navbar";

function Projectpage() {
  return (
    <section className="overflow-hidden">
      <Navbar />
      <Project />
      <Darktoggle />
    </section>
  );
}

export default Projectpage;
