import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import { Darktoggle } from "../components/darktoggle";

function Firstpage() {
  return (
    <div className="dark:bg-mywhite  bg-primary text-mywhite h-screen dark:text-primary w-full flex  items-center flex-col">
      <Navbar />
      <Hero />
      <Darktoggle />
    </div>
  );
}

export default Firstpage;
