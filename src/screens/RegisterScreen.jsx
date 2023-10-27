import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
  return (
    <div className='center'>
      <h1>Register</h1>
      <Form className='register-form'>
        <Form.Group className='mb-3 input-field' controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' placeholder='Enter a username' required />
        </Form.Group>
        <Form.Group className='mb-3 input-field' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Enter Email' required />
        </Form.Group>
        <Form.Group className='mb-3 input-field' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Create Password' required />
        </Form.Group>
        <Button type='submit'>Register</Button>
        <div className='signup-link mt-3'>
          Already a member? <Link to='/login'>Login</Link>
        </div>
      </Form>
    </div>
  );
};

export default RegisterScreen;
