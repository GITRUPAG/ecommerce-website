
//checkout.tsx
import React from 'react';

const Checkout: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold">Billing Details</h3>
        {/* Billing form here */}
        <input type="text" placeholder="Name" className="mt-4 p-2 border rounded w-full" />
        <input type="email" placeholder="Email" className="mt-4 p-2 border rounded w-full" />
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
