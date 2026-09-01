import React from 'react';
import './ProductCard.css';
import PaymentButton from './paymentbutton';

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

          <PaymentButton/>
        </div>

        {_id && <div className="product-meta">ID: {_id}</div>}
      </div>
    </div>
  );
}

export default ProductCard;
