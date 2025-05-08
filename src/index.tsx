import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import App from './App'; // Make sure this line is correct
import { CartProvider } from './context/CartContext'; // Import the CartProvider

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <CartProvider> {/* Wrap App component with CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);
