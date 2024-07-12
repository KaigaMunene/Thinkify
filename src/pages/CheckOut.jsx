import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetails from '../components/ProductDetails';

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardOwner: '',
    expiryDate: '',
    cvv: '',
    paypalEmail: '',
    mpesaNumber: '',
  });

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
    setFormData({
      cardNumber: '',
      cardOwner: '',
      expiryDate: '',
      cvv: '',
      paypalEmail: '',
      mpesaNumber: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform the payment processing here
    // Display a thank you message
    toast.success('Thank you for shopping!');
  };

  return (
 ft-style-home-page
    <div className="container mx-auto px-4 pt-24">
      <div className="flex-col justify-center items-center">
        {' '}
        <h1 className="text-2xl font-bold my-4">Choose Your Payment Method</h1>
        <div className="mb-4 p-4">
          <button
            type="button"
            onClick={() => handlePaymentChange('card')}
            className={`py-2 px-4 rounded mr-2 ${paymentMethod === 'card' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Pay via Card
          </button>
          <button
            type="button"
            onClick={() => handlePaymentChange('paypal')}
            className={`py-2 px-4 rounded mr-2 ${paymentMethod === 'paypal' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Pay via PayPal
          </button>
          <button
            type="button"
            onClick={() => handlePaymentChange('mpesa')}
            className={`py-2 px-4 rounded ${paymentMethod === 'mpesa' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Pay via Mpesa
          </button>
        </div>{' '}
      </div>

      {paymentMethod && (
        <form onSubmit={handleFormSubmit} className="mb-8">

    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Checkout</h1>
      <div className="mb-4">
        <button
          type="button"
          onClick={() => handlePaymentChange('card')}
          className={`py-2 px-4 rounded mr-2 ${paymentMethod === 'card' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Pay via Card
        </button>
        <button
          type="button"
          onClick={() => handlePaymentChange('paypal')}
          className={`py-2 px-4 rounded mr-2 ${paymentMethod === 'paypal' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Pay via PayPal
        </button>
        <button
          type="button"
          onClick={() => handlePaymentChange('mpesa')}
          className={`py-2 px-4 rounded ${paymentMethod === 'mpesa' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Pay via Mpesa
        </button>
      </div>
      {paymentMethod && (
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            {paymentMethod === 'card' && (
              <div>
                <label htmlFor="cardNumber" className="block mb-2">
                  Card Number
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    className="border py-2 px-4 w-full rounded"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label htmlFor="cardOwner" className="block mb-2">
                  Card Owner Name
                  <input
                    type="text"
                    id="cardOwner"
                    name="cardOwner"
                    className="border py-2 px-4 w-full rounded"
                    value={formData.cardOwner}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label htmlFor="expiryDate" className="block mb-2">
                  Expiry Date
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    className="border py-2 px-4 w-full rounded"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label htmlFor="cvv" className="block mb-2">
                  CVV
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    className="border py-2 px-4 w-full rounded"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
            )}
            {paymentMethod === 'paypal' && (
              <div>
                <label htmlFor="paypalEmail" className="block mb-2">
                  PayPal Email
                  <input
                    type="email"
                    id="paypalEmail"
                    name="paypalEmail"
                    className="border py-2 px-4 w-full rounded"
                    value={formData.paypalEmail}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
            )}
            {paymentMethod === 'mpesa' && (
              <div>
                <label htmlFor="mpesaNumber" className="block mb-2">
                  Mpesa Number
                  <input
                    type="text"
                    id="mpesaNumber"
                    name="mpesaNumber"
                    className="border py-2 px-4 w-full rounded"
                    value={formData.mpesaNumber}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      )}
      <ProductDetails />
    </div>
  );
}

export default Checkout;
