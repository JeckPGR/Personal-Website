import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
    </>
  );
}
