import { Input } from "../Elements/index/Input";
import PropTypes from "prop-types";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TextArea } from "../Elements/index/Textarea";
export const Formfield = ({ handlesubmit, formData, handleChange }) => {
  return (
    <form
      onSubmit={handlesubmit}
      className="w-full max-w-lg lg:space-y-20 space-y-16 flex flex-col"
    >
      <Input
        type="text"
        name="fullName"
        placeholder="FULL NAME *"
        value={formData.fullname}
        onChange={handleChange}
        required
      />
      <FormInputGroup>
        <Input
          type="email"
          name="email"
          placeholder="EMAIL *"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="phone"
          placeholder="PHONE *"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </FormInputGroup>
      <TextArea
        name="message"
        placeholder="MESSAGE *"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button
        aria-label="submit"
        type="submit"
        className="flex justify-center transition-all duration-300 lg:hover:bg-transparent lg:ring-1 lg:ring-slate-200  items-center lg:self-end p-2 bg-white lg:bg-transparent lg:text-white lg:hover:p-5 text-black font-bold rounded-sm lg:rounded-full active:bg-gray-200"
      >
        <span className="lg:hidden">Submit</span>
        <IoIosArrowRoundForward size={40} className="lg:block hidden" />
      </button>
    </form>
  );
};

const FormInputGroup = ({ children }) => (
  <div className="flex justify-between">{children}</div>
);

Formfield.propTypes = {
  handlesubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

FormInputGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
