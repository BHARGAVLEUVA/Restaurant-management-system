

import React, { useState } from 'react';
import MenuItem from './MenuItem';
import './WaiterMenu.css';

const WaiterMenu = () => {
  // Sample data for menu items
  const menuItems = [
    {
      id: 1,
      name: 'Pizza Margherita',
      description: 'Classic pizza with tomatoes, mozzarella, and basil.',
      price: 799,
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4yCKs19KwUgme1M6_H0VjzbgL2xOAbZx3wtXFLbgQAO3mpgLFPMQ5gLewqF_rDuf_CV0jsX9pReE7VByZBrh6AhiYAzPE9Nj1fWql-Q'
    },
    {
      id: 2,
      name: 'Cheeseburger',
      description: 'A juicy beef patty with cheese, lettuce, and tomato.',
      price: 99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWL-Dj_xYdWOIVuJkI8HA6I3RG3t0recxz8q5eTYwYxPcRmfQZfelElOyUk3GJtD19oYolhmAfx5ZdKOCmTxx6rbEhqiaok9pler8g'
    },
    {
      id: 3,
      name: 'Caesar Salad',
      description: 'Crispy romaine lettuce with Caesar dressing and croutons.',
      price: 47,
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTevKiStYDmR8nTRIbsagNmQXjjtj9VhGRn5ZplaPdlJnR7jpX982PR8hblvMWyIKey5j1seb7LWk1TuDlqpYLH7EtYS1fjbpN9bwDq3w'
    },
    {
      id: 4,
      name: 'Mumbai VadaPav',
      description: 'This vegetarian fast food,call vadapav',
      price: 40,
      image: 'https://t3.ftcdn.net/jpg/03/09/11/80/240_F_309118063_q3Ptz7MzhogtTBWiwuHjpY8ZdaLmqauW.jpg'
    },
    {
      id: 4,
      name: 'Paneer Tikka',
      description: 'Paneer Tikka is popular Indian appetizer made with cubes of paneer & veggies marinated with yogurt and spices',
      price: 440,
      image: 'https://t4.ftcdn.net/jpg/04/75/65/21/240_F_475652107_Sx73qgHWljGylX5KRyDFeE46ftX0A4EE.jpg'
    },
    {
      id: 4,
      name: 'Paneer Toofani',
      description: 'This is quite a simple and easy recipe and best enjoyed with plan rice, naan bread, or Tandoori Roti.',
      price: 400,
      image: 'https://t3.ftcdn.net/jpg/02/87/71/68/240_F_287716806_4CxILn57ANaGb3lgWSjVS4vD0P6dG5yA.jpg'
    },
    {
      id: 4,
      name: 'Aloo Paratha',
      description: 'Indian Aloo Paratha  – whole  wheat  pan-fried  flatbread  stuffed with  a spicy potato filling.',
      price: 340,
      image: 'https://t4.ftcdn.net/jpg/08/67/07/21/240_F_867072170_94wUvTwvjZAkSr3eKAVetLmWHuVAXzjW.jpg'
    },
    {
      id: 4,
      name: 'Dabeli',
      description: 'When one mentions about the vibrant state of Gujarat, one has to also mention about its most famed street food, the sweet and tangy Dabeli.',
      price: 40,
      image: 'https://t4.ftcdn.net/jpg/08/18/69/03/240_F_818690343_0TFn2wy91aqR4Gfz2cWRRSU1yzrD3vHR.jpg'
    },

    // Add more menu items as needed
  ];

  // State to store the current order
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  const handleSubmitOrder = () => {
    // Logic for submitting the order (e.g., API call)
    console.log('Order Submitted:', order);
    alert('Order Submitted');
    setOrder([]); // Clear the order after submission
  };

  return (
    <div className="menu">
      <h1>Waiter Menu Item</h1>
      <div className="menu-items">
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} addToOrder={addToOrder} />
        ))}
      </div>

      <div className="order-summary">
        <h2>Your Order</h2>
        {order.length > 0 ? (
          <ul>
            {order.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in order.</p>
        )}
        <button onClick={handleSubmitOrder} className="submit-order-button">
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default WaiterMenu;

