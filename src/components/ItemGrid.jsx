import PropTypes from 'prop-types';

function ItemGrid({ items, onAddToCart }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.id} className="border p-4 rounded">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <h2 className="text-xl font-bold mt-2">{item.title}</h2>
          <p>{item.description}</p>
          <p className="text-lg font-bold mt-2">${item.price}</p>
          <button
            type="button"
            onClick={() => onAddToCart({ ...item, quantity: 1 })}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-2"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

ItemGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ItemGrid;
