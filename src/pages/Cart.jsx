import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../components/context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, incrementItem, decrementItem } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Your Cart</h1>
      <div className="mb-4">
        <p className="text-xl">Subtotal: ${subtotal.toFixed(2)}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="border p-4 rounded relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl font-bold mt-2">{item.title}</h2>
            <p>{item.description}</p>
            <p className="text-lg font-bold mt-2">${item.price}</p>
            <div className="flex items-center justify-between mt-2">
              <button
                type="button"
                onClick={() => decrementItem(item.id)}
                className="text-red-500"
                aria-label="Decrement"
              >
                <FaMinus />
              </button>
              <span>{item.quantity}</span>
              <button
                type="button"
                onClick={() => incrementItem(item.id)}
                className="text-green-500"
                aria-label="Increment"
              >
                <FaPlus />
              </button>
            </div>
            <button
              type="button"
              onClick={() => removeFromCart(item.id)}
              className="absolute top-2 right-2 text-red-500"
              aria-label="Remove from Cart"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Link
          to="/checkout"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
