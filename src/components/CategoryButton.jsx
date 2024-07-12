import PropTypes from 'prop-types';

function CategoryButton({ logo, label, onClick, isActive, color }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center m-2 md:m-4 p-2 md:p-4 rounded-xl shadow-lg transition duration-300 ${
        isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
      }`}
      style={{ backgroundColor: isActive ? color : undefined }}
    >
      <img
        src={logo}
        alt={label}
        className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4"
      />
      <span className="text-sm md:text-base">{label}</span>
    </button>
  );
}

CategoryButton.propTypes = {
  logo: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

export default CategoryButton;
