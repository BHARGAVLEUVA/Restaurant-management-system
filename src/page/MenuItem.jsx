import React from 'react';

const MenuItem = ({ item, addToOrder }) => {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>₹{item.price}</p>
        <button onClick={() => addToOrder(item)} className="add-to-order-button">
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
