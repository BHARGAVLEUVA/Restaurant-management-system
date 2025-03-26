// src/AdminMenu.js
import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';

const AdminMenu = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Margherita Pizza', description: 'Classic pizza with tomatoes and mozzarella', price: 8.99 },
    { id: 2, name: 'Caesar Salad', description: 'Fresh romaine lettuce with Caesar dressing', price: 6.99 },
    // Add more items as needed
  ]);
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleShowModal = (item = null) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentItem(null);
  };

  const handleSaveItem = () => {
    if (currentItem.id) {
      setMenuItems(menuItems.map(item => (item.id === currentItem.id ? currentItem : item)));
    } else {
      setMenuItems([...menuItems, { ...currentItem, id: menuItems.length + 1 }]);
    }
    handleCloseModal();
  };

  const handleDeleteItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <Container>
      <h1 className="my-4">Admin Menu</h1>
      <Button variant="primary" className="mb-4" onClick={() => handleShowModal()}>Add New Item</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <Button variant="warning" onClick={() => handleShowModal(item)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDeleteItem(item.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{currentItem?.id ? 'Edit Item' : 'Add New Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item name"
                value={currentItem?.name || ''}
                onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formDescription" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item description"
                value={currentItem?.description || ''}
                onChange={(e) => setCurrentItem({ ...currentItem, description: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formPrice" className="mt-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter item price"
                value={currentItem?.price || ''}
                onChange={(e) => setCurrentItem({ ...currentItem, price: parseFloat(e.target.value) })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary" onClick={handleSaveItem}>Save</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminMenu;
