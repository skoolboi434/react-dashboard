import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  return (
    <div className='center'>
      <h1>Login</h1>
      <Form className='login-form'>
        <Form.Group className='mb-3 input-field' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='text' placeholder='Enter Email' required />
        </Form.Group>
        <Form.Group className='mb-3 input-field' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter Password' required />
        </Form.Group>
        <Button type='submit'>Login</Button>
        <div className='signup-link mt-3'>
          Not a member? <Link to='/register'>Register</Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginScreen;
