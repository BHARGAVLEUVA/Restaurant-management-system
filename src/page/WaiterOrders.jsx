// src/OrderScreen.js
import React, { useState } from 'react';
import OrderItem from './OrderItem';
import './WaiterOrders.css'

const WaiterOrders = () => {
  // Sample data for items in the order (id, name, price, and quantity)
  const [order, setOrder] = useState([
    { id: 1, name: 'Pizza Margherita', price: 799, quantity: 0 },
    { id: 2, name: 'Cheeseburger', price: 99, quantity: 0 },
    { id: 3, name: 'Caesar Salad', price: 47, quantity: 0 },
    { id: 4, name: 'Mumbai Vadapav', price: 40, quantity: 0 },
    { id: 5, name: 'Paneer Tikka', price: 440, quantity: 0 },
    { id: 6, name: 'Paneer Toofani', price: 400, quantity: 0 },
    { id: 7, name: 'Aloo Paratha', price: 340, quantity: 0 },
    { id: 8, name: 'Dabeli', price: 40, quantity: 0 },
  ]);

  // Function to remove an item from the order
  const removeFromOrder = (id) => {
    const updatedOrder = order.filter(item => item.id !== id);
    setOrder(updatedOrder);
  };

  // Function to update the quantity of an item
  const updateQuantity = (item, newQuantity) => {
    if (newQuantity > 0) {
      const updatedOrder = order.map((orderItem) => 
        orderItem.id === item.id ? { ...orderItem, quantity: newQuantity } : orderItem
      );
      setOrder(updatedOrder);
    }
  };

  // Calculate the total price of the order
  const calculateTotal = () => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Submit the order (you could integrate this with an API call to submit the order to the backend)
  const submitOrder = () => {
    console.log('Order submitted:', order);
    alert('Order submitted successfully!');
    setOrder([]);  // Clear the order after submission
  };

  return (
    <div className="order-screen">
      <h1>Order Screen</h1>
      
      <div className="order-items">
        {order.length === 0 ? (
          <p>Your order submited</p>
        ) : (
          order.map(item => (
            <OrderItem
              key={item.id}
              item={item}
              removeFromOrder={removeFromOrder}
              updateQuantity={updateQuantity}
            />
          ))
        )}
      </div>

      {order.length > 0 && (
        <div className="order-summary">
          <h2>Order Summary</h2>
          <p>Total: {calculateTotal()}</p>
          <button onClick={submitOrder}>Submit Order</button>
        </div>
      )}
    </div>
  );
};

export default  WaiterOrders;

