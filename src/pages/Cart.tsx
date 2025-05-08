import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cartItems } = useCart();

  // Debugging log to check cartItems
  useEffect(() => {
    console.log(cartItems); // Log cart items when component is mounted
  }, [cartItems]);

  return (
    <div className="min-h-screen p-8 bg-pink-50">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto space-y-4">
          {cartItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
            >
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                <div>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
              </div>
              <span className="text-lg font-bold text-pink-600">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
