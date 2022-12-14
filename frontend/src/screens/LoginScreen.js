import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { MdVisibility } from 'react-icons/md';

const LoginScreen = () => {
 const [showPassword, setShowPassword] = useState(false);
 const [formData, setFormData] = useState({
  email: '',
  password: '',
 });
 const { email, password } = formData;

 const setEmail = () => {};
 const setPassword = () => {};

 const navigate = useNavigate();

 const onChange = (e) => {
  setFormData((prevState) => ({
   ...prevState,
   [e.target.id]: e.target.value,
  }));
 };

 const submitHandler = (e) => {
  e.preventDefault();
  // Dispatch Login
 };

 return (
  <FormContainer>
   <header>
    <h1>Welcome Back!</h1>
   </header>
   <h2>Sign In</h2>
   <Form onSubmit={submitHandler}>
    <Form.Group controlId='email'>
     <Form.Label>Email Address</Form.Label>
     <Form.Control
      type='email'
      placeholder='Enter email'
      id='email'
      value={email}
      onChange={onChange}></Form.Control>
    </Form.Group>

    <Form.Group controlId='password'>
     <Form.Label>Password</Form.Label>
     <Form.Control
      type={showPassword ? 'text' : 'password'}
      placeholder='Enter Password'
      id='password'
      value={password}
      onChange={onChange}></Form.Control>
     <a
      alt='show password'
      onClick={() => setShowPassword((prevState) => !prevState)}>
      <MdVisibility />
     </a>
    </Form.Group>

    <Button type='submit' variant='primary'>
     Sign In
    </Button>
   </Form>

   <Link to='/forgot-password' className='forgotPasswordLink'>
    Forgot Password
   </Link>

   <Link to='/register' className='forgotPasswordLink'>
    New Customer Register
   </Link>

   {/* <Row className='py-3'>
    <Col>
    New Customer?{' '}
    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
    Register
    </Link>
    </Col>
   </Row> */}
  </FormContainer>
 );
};

export default LoginScreen;
