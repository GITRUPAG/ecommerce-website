import React, { useEffect, useState, useRef } from 'react';
import ProductCard from '../components/ProductCard';

import product1 from '../assests/p1.jpeg';
import product2 from '../assests/p2.jpeg';
import product3 from '../assests/p3.jpeg';

const products = [
  {
    name: 'Fall Limited Edition Sneakers',
    price: 125.0,
    originalPrice: 250.0,
    image: product1,
    thumbnails: [product1, product2, product3],
  },
  {
    name: 'Summer Runner Shoes',
    price: 99.0,
    originalPrice: 199.0,
    image: product2,
    thumbnails: [product2, product1, product3],
  },
  {
    name: 'Urban Classic Trainers',
    price: 89.0,
    originalPrice: 179.0,
    image: product3,
    thumbnails: [product3, product1, product2],
  },
];

const Home: React.FC = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleAddToCart = (productName: string) => {
    alert(`${productName} added to cart!`);
  };

  const showNext = () => {
    setIndex((prev) => (prev + 1) % products.length);
    pauseAutoCycle();
  };

  const showPrev = () => {
    setIndex((prev) => (prev - 1 + products.length) % products.length);
    pauseAutoCycle();
  };

  const pauseAutoCycle = () => {
    setIsPaused(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeout(() => setIsPaused(false), 10000); // Resume after 10 seconds
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % products.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const current = products[index];

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-pink-100 relative px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cart and Shoes Icons in Background */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        {/* Cart Icon */}
        <i
          className="fas fa-shopping-cart text-6xl text-gray-500 opacity-20 absolute top-12 left-12 transform rotate-45 hover:scale-110 hover:opacity-80 transition-all duration-300"
          style={{ zIndex: -1 }}
        ></i>

        {/* Shoes Icon */}
        <i
          className="fas fa-shoe-prints text-6xl text-gray-500 opacity-20 absolute bottom-12 right-12 transform rotate-45 hover:scale-110 hover:opacity-80 transition-all duration-300"
          style={{ zIndex: -1 }}
        ></i>
      </div>

      {/* Previous Button */}
      <button
        onClick={showPrev}
        className="absolute left-4 text-3xl font-bold text-gray-600 hover:text-gray-900 transition z-10"
      >
        ‹
      </button>

      {/* Product Card */}
      <ProductCard
        name={current.name}
        price={current.price}
        originalPrice={current.originalPrice}
        image={current.image}
        thumbnails={current.thumbnails}
        //onAddToCart={() => handleAddToCart(current.name)}
      />

      {/* Next Button */}
      <button
        onClick={showNext}
        className="absolute right-4 text-3xl font-bold text-gray-600 hover:text-gray-900 transition z-10"
      >
        ›
      </button>
    </div>
  );
};

export default Home;
