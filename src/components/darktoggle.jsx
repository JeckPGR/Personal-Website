import { MdNightlightRound, MdLightMode } from "react-icons/md";
import { useState } from "react";
export const Darktoggle = () => {
  const [dark, setdark] = useState(false);
  const HandleDark = () => {
    setdark(!dark);
    if (dark) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };
  return (
    <button
      aria-label={dark ? "Activate light mode" : "Activate dark mode"}
      className={` rounded-full p-2 transition duration-300    flex fixed bottom-[10%] right-4 z-40  ${
        dark ? " bg-black text-slate-200" : " bg-slate-200 text-black"
      }`}
      onClick={HandleDark}
    >
      {dark ? <MdNightlightRound /> : <MdLightMode />}
    </button>
  );
};
