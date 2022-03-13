import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route,Routes} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import ProfilePage from './components/ProfilePage';
import Products from './components/Products';
import CalculateBmi from './components/CalculateBmi';
import Contact from './components/Contact';
import BeforeAndAfter from './BeforeAndAfter';
import Main from './components/Main';
import Fahmi from './components/Fahmi';
import Navbar from './components/Navbar';
import Header from './Header';
import NotFound from './NotFound';
import Datee from './Datee'; 
import Scroll from './components/Scroll';
import ScrollToTop from 'react-scroll-to-top';
import OnlineCoaching from './OnlineCoaching';
import Card from './components/Card';
import Contacte from './components/Contacte';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
    <Routes>
    <Route path='/card' element={<Contacte/>}/>
      <Route path='/online-coaching' element={<OnlineCoaching/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      {/* <Route path='/' element={<Products/>}/> */}
      <Route path='/' element={<Header/>}/>
      <Route path='/bmi' element={<CalculateBmi/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/bfr' element={<BeforeAndAfter/>}/>
      <Route path='/fahmi' element={<Fahmi/>}/>
      <Route path='*' element={<NotFound/>}/>
      {/* <Route path='/date' element={<Datee/>}/> */}
 
    </Routes>     <ScrollToTop smooth component={<Scroll/>}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
