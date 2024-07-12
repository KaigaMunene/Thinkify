import CartComponent from '../components/CartComponent';
import SearchBar from '../components/SearchBar';
import ProductDetails from '../components/ProductDetails';

function Cart() {
  return (
    <div className="bg-light_purple pt-12">
      <SearchBar />
      <CartComponent />
      <ProductDetails />
    </div>
  );
}

export default Cart;
