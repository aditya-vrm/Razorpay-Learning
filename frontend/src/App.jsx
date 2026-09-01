import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard';

const INITIAL_PRODUCT = {
  price: {
    amount: 100000,
    currency: 'INR'
  },
  _id: '6a95b3adfc0f6aad82e6c4b5',
  image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'Dell XPS 15',
  description: 'test_Description',
  __v: 0
};

function App() {
  const [product, setProduct] = useState(INITIAL_PRODUCT);

  useEffect(() => {
    axios
      .get('http://localhost:3000/products/get')
      .then((res) => {
        if (res.data && res.data.product) {
          setProduct(res.data.product);
        }
      })
      .catch((err) => {
        console.info('Backend not reachable, using default product data:', err.message);
      });
  }, []);

  const handleBuyNow = (selectedProduct) => {
    alert(`Proceeding to checkout for ${selectedProduct.title}`);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Store Checkout</h1>
        <p>Select your item and proceed with payment</p>
      </header>

      <main className="product-display">
        <ProductCard product={product} onBuyNow={handleBuyNow} />
      </main>
    </div>
  );
}

export default App;
