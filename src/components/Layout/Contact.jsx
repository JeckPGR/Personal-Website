import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { Formfield } from "../fragments/FormField";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <>
      <div className=" bg-slate-950   h-full">
        <div className="flex flex-col dark:bg-white dark:text-slate-950 relative md:flex-row md:gap-x-4 lg:gap-x-0 items-center justify-center bg-slate-950 text-white h-full">
          <div className=" hidden lg:flex absolute top-32 gap-y-12 left-[37%] flex-col">
            <a className="flex items-center gap-x-4 cursor-pointer text-xl hover:underline">
              <FaPhone size={25} />
              <p>+62-877-9478-0139</p>
            </a>
            <a className="flex items-center gap-x-4 cursor-pointer text-xl hover:underline">
              <IoMailSharp size={25} />
              <p>dzakyrazi@gmail.com</p>
            </a>
          </div>

          {/* Left Section */}
          <div className="flex flex-col justify-center  items-center w-full lg:w-1/2 md:w-[45%] px-5 lg:px-10 md:py-0   py-10 lg:py-20 h-fit">
            <h1 className="text-8xl md:text-[105px] -indent-24 md:indent-0 lg:text-[180px] md:text-start w-fit  md:w-full  text-center font-thin mb-4 leading-none">
              LET&apos;S
              <span className=" lg:block block  lg:indent-28 md:indent-7">
                GET IN
              </span>{" "}
              TOUCH
            </h1>
          </div>

          {/* Right Section */}
          <div className="flex  flex-col overflow-hidden justify-center items-center w-full lg:w-1/2 md:w-[50%] px-5 lg:px-10 py-10 lg:py-20">
            <Formfield
              handleSubmit={handleSubmit}
              formData={formData}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
