import PropTypes from 'prop-types';

function ItemGrid({ items, onAddToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-8 lg:p-12 bg-cream rounded-lg">
      {items.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg bg-white">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{item.title}</h2>
          <p className="text-light_gray mb-4">{item.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-lg text-light_gray">${item.price}</p>
            <button
              type="button"
              onClick={() => onAddToCart({ ...item, quantity: 1 })}
              className="bg-dark_green hover:bg-dark_purple text-white py-2 px-4 rounded-xl"
            >
              Add to Cart
            </button>
          </div>
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
