// src/components/ProductCard.tsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  thumbnails: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  originalPrice,
  image,
  thumbnails,
}) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  // Declare the toast message state
  const [toastMessage, setToastMessage] = useState<string>('');

  const handleAdd = () => {
    console.log('Adding to cart:', { name, price, image, quantity });

    addToCart({ name, price, image, quantity });

    // Set the toast message and hide it after 3 seconds
    setToastMessage('Item added to cart');
    setTimeout(() => setToastMessage(''), 3000); // Clear the toast after 3 seconds
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row w-full max-w-4xl">
      {/* Toast Message */}
      {toastMessage && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          {toastMessage}
        </div>
      )}

      {/* Image & Thumbnails */}
      <div className="flex flex-col items-center md:w-1/2">
        <img src={image} alt={name} className="rounded-xl w-full max-w-sm" />
        <div className="flex mt-4 space-x-2">
          {thumbnails.map((thumb, idx) => (
            <img
              key={idx}
              src={thumb}
              alt={`thumb-${idx}`}
              className="w-14 h-14 rounded-lg border-2 border-transparent hover:border-orange-500 cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="mt-6 md:mt-0 md:ml-10 flex flex-col justify-center md:w-1/2">
        <h4 className="text-sm tracking-widest text-orange-600 font-semibold uppercase">
          Sneaker Company
        </h4>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">{name}</h2>
        <p className="text-gray-500 mt-4 text-sm leading-relaxed">
          These low–profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
        </p>

        {/* Pricing */}
        <div className="flex items-center mt-4 space-x-4">
          <span className="text-2xl font-bold">${price.toFixed(2)}</span>
          <span className="bg-gray-200 text-sm font-bold px-2 py-1 rounded text-orange-600">
            50%
          </span>
        </div>
        <span className="line-through text-gray-400 text-sm mt-1">
          ${originalPrice.toFixed(2)}
        </span>

        {/* Quantity + Add to Cart */}
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
            <button
              onClick={() => setQuantity(q => Math.max(q - 1, 1))}
              className="text-lg text-gray-700 hover:text-orange-500 px-2"
            >
              −
            </button>
            <span className="px-4 font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(q => q + 1)}
              className="text-lg text-gray-700 hover:text-orange-500 px-2"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAdd} // Handle add directly inside ProductCard
            className="bg-orange-500 text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-orange-600 transition w-full md:w-auto flex items-center justify-center gap-2"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
