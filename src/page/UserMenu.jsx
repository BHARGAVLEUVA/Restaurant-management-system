// src/Menu.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch menu items from a local file or API
    const items = [
      { id: 1, name: 'Margherita Pizza', category: 'Pizza', price: 8.99 },
      { id: 2, name: 'Pepperoni Pizza', category: 'Pizza', price: 9.99 },
      { id: 3, name: 'Caesar Salad', category: 'Salad', price: 6.99 },
      { id: 4, name: 'Grilled Chicken', category: 'Main Course', price: 12.99 },
      { id: 5, name: 'Chocolate Cake', category: 'Dessert', price: 4.99 },
      { id: 6, name: 'Mumbai Vadapav', category: 'Main Course',price: 40 },
      { id: 7, name: 'Paneer Tikka', category: 'Pizza',price: 200 },
      { id: 8, name: 'Paneer Toofani', category: 'Main Course',price: 220 },
      { id: 9, name: 'Aloo Paratha', category: 'Main Course',price: 100 }
    ];
    setMenuItems(items);
    setFilteredItems(items);
  }, []);

  const handleCategorySelect = (category) => {
    if (category === 'All') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === category));
    }
  };

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const categories = ['All', 'Pizza', 'Salad', 'Main Course', 'Dessert'];

  return (
    <Container>
      <h1 className="my-4">User Menu</h1>
      <Nav variant="pills" className="mb-4">
        {categories.map(category => (
          <Nav.Item key={category}>
            <Nav.Link onClick={() => handleCategorySelect(category)}>
              {category}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Row>
        {filteredItems.map(item => (
          <Col key={item.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: ${item.price.toFixed(2)}</Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 className="my-4">Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default UserMenu;
