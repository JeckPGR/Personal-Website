import PropTypes from "prop-types";
export const TextArea = ({ name, placeholder, value, onChange, required }) => (
  <textarea
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full bg-transparent border-b border-slate-200/70 border-ro text-white placeholder-white focus:outline-none pb-2 h-32 resize-none"
    required={required}
  />
);

TextArea.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
