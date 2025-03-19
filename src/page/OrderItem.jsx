// src/OrderItem.js
import React from 'react';

const OrderItem = ({ item, removeFromOrder, updateQuantity }) => {
  return (
    <div className="order-item">
      <div className="order-item-details">
        <h3>{item.name}</h3>
        <p>Price: {item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <div className="order-item-actions">
        <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
        <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
        <button onClick={() => removeFromOrder(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default OrderItem;
