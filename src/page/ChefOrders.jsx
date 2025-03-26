import React, { useState } from 'react';

function ChefOrders() {
  // Initializing state to manage orders
  const [orders, setOrders] = useState([
    { id: 1, item: 'Cheeseburgere', status: 'Pending' },
    { id: 2, item: 'Margherita Pizza', status: 'Pending' },
    { id: 3, item: 'Caesar Salad', status: 'Pending' },
    { id: 4, item: 'Mumbai Vadapav', status: 'Pending'},
    { id: 5, item: 'Paneer Tikka',status: 'Pending'},
    { id: 6, item: 'Paneer Toofani', status: 'Pending'},
    { id: 7, item: 'Aloo Paratha', status: 'Pending'},
    { id: 8, item: 'Dabeli', status: 'Pending'}
  ]);

  // Function to update the status of an order
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div>
      <h1>Chef Order Screen</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <p>Item: {order.item}</p>
            <p>Status: {order.status}</p>
            <button onClick={() => updateOrderStatus(order.id, 'In Progress')}>Start</button>
            <button onClick={() => updateOrderStatus(order.id, 'Completed')}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChefOrders;

