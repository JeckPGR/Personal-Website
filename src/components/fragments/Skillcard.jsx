import PropTypes from "prop-types";
function Skillcard({ icon, title, level }) {
  return (
    <>
      <div className=" flex flex-col hover:shadow-lg hover:shadow-blue-800/30 dark:hover:shadow-slate-800/20 transition-shadow duration-300 ease-in-out  items-center justify-between p-3 rounded-md card  dark:backdrop-blur-16 dark:backdrop-saturate-180  dark:bg-gray-300/60">
        <div>{icon}</div>
        <div className="flex flex-col items-center mt-1">
          <h4 className=" font-bold dark:text-primary">{title}</h4>
          <p className="text-sm  font-normal dark:text-primary">{level}</p>
        </div>
      </div>
    </>
  );
}
Skillcard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export default Skillcard;
