import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <div className="bg-primary py-20 px-4 dark:bg-mywhite h-full">
        <div className="flex flex-col xl:h-[68.2dvh] py-10 justify-center items-center dark:bg-mywhite gap-y-2 bg-primary dark:text-primary relative text-mywhite h-full">
          <div data-aos="fade-down" data-aos-delay="0">
            <h1 className="text-base md:text-xl  tracking-[6px]  font-Jakarta  font-semibold  uppercase text-center dark:text-blue-700 text-blue-500">
              Contact
            </h1>
            <h2 className="text-4xl md:text-5xl mb-4 mt-2 text-mywhite font-black text-center font-Jakarta dark:text-slate-950">
              Get In Touch<span className="text-blue-700">.</span>
            </h2>
          </div>
          <div data-aos="fade-right" data-aos-delay="300">
            <p className="text-3xl md:text-4xl text-center font-black">
              Have any project in mind?
            </p>
            <p className="text-3xl my-1 md:text-4xl text-center font-black text-blue-600">
              Or
            </p>
            <p className="text-3xl md:text-4xl text-center font-black">
              Have any project to work with?
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="flex flex-col md:flex-row mt-10 gap-4 dark:text-mywhite w-full md:justify-center items-center"
          >
            <a
              href="mailto:dzakyrazi@gmail.com"
              className="rounded-full font-semibold text-center bg-blue-700 py-3 px-6 hover:bg-blue-600 duration-200"
            >
              Contact via email
            </a>
            <a
              href="https://www.linkedin.com/messaging/compose/?recipientId=67b630248"
              className="rounded-full font-semibold text-center bg-blue-700 py-3 px-6 hover:bg-blue-600 duration-200"
              target="_blank"
              rel="noreferrer"
            >
              Chat on LinkedIn
            </a>
          </div>
          <div data-aos="fade-up" data-aos-delay="900">
            <p className="mt-8 text-xl text-center font-black">
              Let&apos;s create something amazing together.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
