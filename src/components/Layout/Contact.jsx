const ContactPage = () => {
  return (
    <>
      <div className=" bg-primary py-11 px-4 dark:bg-mywhite   h-full">
        <div className="flex flex-col xl:h-[68.2dvh] dark:bg-mywhite items-center gap-y-2 bg-primary dark:text-primary relative     text-mywhite h-full">
          <div>
            <h1 className=" text-base md:text-xl  tracking-[6px]  font-Jakarta  font-semibold  uppercase text-center dark:text-slate-950 text-blue-500">
              Contact
            </h1>
            <h2 className="text-4xl md:text-5xl mb-4 mt-2 text-mywhite font-black text-center font-Jakarta dark:text-slate-950">
              Get In Touch<span className="text-blue-700">.</span>
            </h2>
          </div>
          <div className="mt-2   ">
            <p className="text-3xl  md:text-4xl text-center font-black">
              Have any project in mind?
            </p>
            <p className="text-3xl my-1  md:text-4xl text-center font-black text-blue-600">
              Or
            </p>
            <p className="text-3xl  md:text-4xl text-center font-black">
              Have any project to work with?
            </p>
          </div>
          <div className="flex flex-col md:flex-row mt-10 gap-4 w-full md:justify-center items-center ">
            <a
              href="mailto:dzakyrazi@gmail.com"
              className="rounded-full font-semibold text-center bg-blue-700 py-3 px-6 hover:bg-blue-600 duration-200"
            >
              Contact via email
            </a>
            <a
              href="https://www.linkedin.com/messaging/compose/?recipientId=67b630248"
              className="rounded-full font-semibold text-center bg-blue-700 py-3 px-6 hover:bg-blue-600 duration-200"
              target="blank"
            >
              Chat on LinkedIn
            </a>
          </div>
          <div>
            <p className=" mt-8  text-xl text-center font-black">
              Let&apos;s create something amazing together.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
