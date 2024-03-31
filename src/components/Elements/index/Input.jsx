import PropTypes from "prop-types";
export const Input = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  required,
  custom,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full bg-transparent border-b-2 placeholder:text-slate-400/40 dark:placeholder:text-slate-950/70 border-slate-200/70 dark:border-slate-950  text-white placeholder-white focus:outline-none pb-2 ${custom}`}
        required={required}
      />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  custom: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
