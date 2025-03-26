// src/AdminUserRegister.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const AdminUserRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submissionStatus, setSubmissionStatus] = React.useState(null);

  const onSubmit = async (data) => {
    try {
      // Replace with your API endpoint
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmissionStatus({ success: true, message: 'User registered successfully!' });
      } else {
        setSubmissionStatus({ success: false, message: 'Registration failed. Please try again.' });
      }
    } catch (error) {
      setSubmissionStatus({ success: false, message: 'An error occurred. Please try again.' });
    }
  };

  return (
    <Container>
      <h1 className="my-4">Register New User</h1>
      {submissionStatus && (
        <Alert variant={submissionStatus.success ? 'success' : 'danger'}>
          {submissionStatus.message}
        </Alert>
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
        </Form.Group>
        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
        </Form.Group>
        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Creat New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-4">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default AdminUserRegister;

