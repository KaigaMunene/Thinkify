import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './components/context/CartContext'; // Ensure correct path to CartContext
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

const Shop = React.lazy(() => import('./pages/Shop'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Checkout = React.lazy(() => import('./pages/CheckOut')); // Ensure correct path to Checkout

function App() {
  return (
    <CartProvider>
      <Router>
        <Suspense fallback={<Loading />}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </Suspense>
      </Router>
    </CartProvider>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default App;
