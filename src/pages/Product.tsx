//product.tsx
import React from 'react';

const Product: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Product Details</h2>
      <div className="flex">
        <img src="https://via.placeholder.com/300" alt="Product" className="w-96 h-96 object-cover" />
        <div className="ml-8">
          <h3 className="text-2xl font-semibold">Product Name</h3>
          <p className="text-lg text-gray-600 mt-2">Product description goes here.</p>
          <p className="text-xl text-green-600 mt-4">$49.99</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
