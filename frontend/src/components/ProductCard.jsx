import React from 'react';
import './ProductCard.css';

function ProductCard({ product, onBuyNow }) {
  if (!product) return null;

  const { title, description, image, price, _id } = product;

  const formatPrice = (amount, currency = 'INR') => {
    try {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: 0,
      }).format(amount);
    } catch {
      return `${currency} ${amount}`;
    }
  };

  const handleBuyNow = () => {
    if (onBuyNow) {
      onBuyNow(product);
    } else {
      console.log('Initiating purchase for:', product);
    }
  };

  return (
    <div className="product-card">
      <div className="card-image-container">
        <img
          src={image}
          alt={title}
          className="card-image"
          loading="lazy"
        />
        <span className="stock-badge">In Stock</span>
      </div>

      <div className="card-content">
        <div className="card-header">
          <span className="product-category">Featured Product</span>
          <h2 className="product-title">{title}</h2>
        </div>

        <p className="product-description">{description}</p>

        <div className="card-footer">
          <div className="price-section">
            <span className="price-label">Price</span>
            <span className="price-amount">{formatPrice(price?.amount/100, price?.currency)}</span>
          </div>

          <button
            type="button"
            className="buy-now-btn"
            onClick={handleBuyNow}
            id="buy-now-button"
          >
            <svg
              className="btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span>Buy Now</span>
          </button>
        </div>

        {_id && <div className="product-meta">ID: {_id}</div>}
      </div>
    </div>
  );
}

export default ProductCard;
