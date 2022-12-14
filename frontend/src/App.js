import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

const App = () => {
 return (
  <>
   <Router>
    <Header />
    <main className='py-3'>
     <Container>
      <Routes>
       <Route path='/login' element={<LoginScreen />} />
       <Route path='/register' element={<RegisterScreen />} />
       <Route path='/' element={<HomeScreen />} />
       <Route path='/product/:id' element={<ProductScreen />} />
       <Route path='/profile' element={<ProfileScreen />} />
      </Routes>
     </Container>
    </main>
    <Footer />
   </Router>
  </>
 );
};

export default App;
