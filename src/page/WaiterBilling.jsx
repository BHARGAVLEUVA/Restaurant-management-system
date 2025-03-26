// WaiterBillingScreen.js
import React, { useState } from "react";
import './WaiterBilling.css'

const WaiterBilling= () => {
  const [orderItems, setOrderItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [discount, setDiscount] = useState(0);

  // Function to add item to the order
  const handleAddItem = () => {
    if (itemName && itemPrice) {
      const newItem = {
        name: itemName,
        price: parseFloat(itemPrice),
      };
      setOrderItems([...orderItems, newItem]);
      setItemName("");
      setItemPrice("");
    }
  };

  // Function to remove item from the order
  const handleRemoveItem = (index) => {
    const updatedOrder = orderItems.filter((_, i) => i !== index);
    setOrderItems(updatedOrder);
  };

  // Calculate the total price including discount
  const calculateTotal = () => {
    const total = orderItems.reduce((sum, item) => sum + item.price, 0);
    return total - (total * discount) / 100;
  };

  return (
    <div className="billing-screen">
      <h1>Waiter Billing Screen</h1>

      <div className="add-item">
        <h3>Add Item</h3>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Item Price"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {orderItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}{" "}
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="discount">
        <h3>Apply Discount</h3>
        <input
          type="number"
          placeholder="Discount %"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
      </div>

      <div className="total">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
      </div>

      <div className="generate-bill">
        <button onClick={() => alert("Bill Generated! Thank you.")}>Generate Bill</button>
      </div>
    </div>
  );
};

export default WaiterBilling;
