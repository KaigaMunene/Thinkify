const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$10',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$20',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$30',
    imageUrl: 'https://via.placeholder.com/150',
  },
  // Add more products as needed
];

function ProductCard() {
  return (
    <div className="min-h-50% bg-red-300 p-8 flex flex-col ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-500">{product.price}</p>
              <button
                type="button"
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
