import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
 getAuth,
 createUserWithEmailAndPassword,
 updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { MdVisibility } from 'react-icons/md';

const RegisterScreen = () => {
 const [showPassword, setShowPassword] = useState(false);
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: '',
 });
 const { name, email, password } = formData;

 const navigate = useNavigate();

 const onChange = (e) => {
  setFormData((prevState) => ({
   ...prevState,
   [e.target.id]: e.target.value,
  }));
 };

 const submitHandler = async (e) => {
  e.preventDefault();

  try {
   const auth = getAuth();

   const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
   );

   const user = userCredential.user;

   updateProfile(auth.currentUser, {
    displayName: name,
   });

   const formDataCopy = { ...formData };
   delete formDataCopy.password;
   formDataCopy.timestamp = serverTimestamp();

   await setDoc(doc(db, 'users', user.uid), formDataCopy);

   navigate('/');
  } catch (error) {
   console.log(error);
  }
 };

 return (
  <FormContainer>
   <h1>Sign Up</h1>
   <Form onSubmit={submitHandler}>
    <Form.Group controlId='name'>
     <Form.Label>Name</Form.Label>
     <Form.Control
      type='text'
      placeholder='Enter name'
      id='name'
      value={name}
      onChange={onChange}></Form.Control>
    </Form.Group>

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

    {/* <Form.Group controlId='confirmPassword'>
     <Form.Label>Confirm Password</Form.Label>
     <Form.Control
      type='password'
      placeholder='Confirm password'
      value={confirmPassword}
      onChange={(e) => setPassword(e.target.value)}></Form.Control>
    </Form.Group> */}

    <Button type='submit' variant='primary'>
     Register
    </Button>
   </Form>

   <Link to='/login' className='forgotPasswordLink'>
    Sign In Instead
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

export default RegisterScreen;
