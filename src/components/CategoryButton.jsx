import PropTypes from 'prop-types';

function CategoryButton({ logo, label, onClick, isActive, color }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center p-2 rounded ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
      style={{ backgroundColor: color }}
    >
      <img src={logo} alt={label} className="w-8 h-8 mr-2" />
      {label}
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
