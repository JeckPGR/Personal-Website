import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import { Darktoggle } from "../components/darktoggle";

function Firstpage() {
  return (
    <div className="dark:bg-white  bg-slate-950 text-slate-200 h-screen dark:text-slate-950 w-full flex  items-center flex-col">
      <Navbar />
      <Hero />
      <Darktoggle />
    </div>
  );
}

export default Firstpage;
