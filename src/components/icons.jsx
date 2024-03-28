import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiReplit } from "react-icons/si";

export default function Icons() {
  return (
    <>
      <div>
        {" "}
        <a href="https://github.com/JeckPGR">
          <FaGithub />
        </a>{" "}
      </div>
      <div className=" hover:text-sky-600">
        <a href="https://www.linkedin.com/in/ahmad-dzaky-67b630248/">
          <FaLinkedin />
        </a>{" "}
      </div>
      <div className=" hover:text-red-500">
        <a href="">
          <FaInstagram />
        </a>
      </div>
      <div className=" hover:text-orange-600">
        {" "}
        <a href="">
          <SiReplit />
        </a>{" "}
      </div>
    </>
  );
}
