// src/BillingScreen.js
import React, { useState } from 'react';
import { Container, Table, Button, Form, Col, Row } from 'react-bootstrap';

const UserBill = () => {
  const [orderItems, setOrderItems] = useState([
    { id: 1, name: 'Margherita Pizza', quantity: 0, price: 8.99 },
    { id: 2, name: 'Caesar Salad', quantity: 0, price: 6.99 },
    { id: 3, name: 'Grilled Chicken', quantity: 0, price: 12.99 },
    { id: 4, name: 'Mumbai Vadapav', price: 40, quantity: 0 },
    { id: 5, name: 'Paneer Tikka', price: 440, quantity: 0 },
    { id: 6, name: 'Paneer Toofani', price: 400, quantity: 0 },
    { id: 7, name: 'Aloo Paratha', price: 340, quantity: 0 },
    { id: 8, name: 'Dabeli', price: 40, quantity: 0 }
  ]);
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (id, newQuantity) => {
    setOrderItems(orderItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
  };

  const calculateTotal = () => {
    const subtotal = orderItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const discountAmount = (subtotal * discount) / 100;
    const total = subtotal - discountAmount;
    return { subtotal, discountAmount, total };
  };
   const [Bill, setGenrateInvoice] = useState([]);
  const handleGenrateInvoice = () => {
    // Logic for submitting the order (e.g., API call)
    console.log('Generate Invoice:', Bill);
    alert('Succesfull Generate Invoice');
    setGenrateInvoice([]); // Clear the order after submission
  };


  const { subtotal, discountAmount, total } = calculateTotal();

  return (
    <Container>
      <h1 className="my-4">Billing Screen</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <Form.Control
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  min="1"
                />
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.quantity * item.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Discount (%)</Form.Label>
            <Form.Control
              type="number"
              value={discount}
              onChange={handleDiscountChange}
              min="0"
              max="100"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
          <h4>Discount: -${discountAmount.toFixed(2)}</h4>
          <h3>Total: ${total.toFixed(2)}</h3>
        </Col>
      </Row>
      <Button onClick={handleGenrateInvoice}variant="primary" className="mt-4">Generate Invoice</Button>
    </Container>
  );
};

export default UserBill;
