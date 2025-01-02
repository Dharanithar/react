import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kid_banner from './assets/banner_kids.png';
import OrderSuccess from './Components/OrderSuccess/OrderSuccess';
import Placeorder from './Components/PlaceOrder/PlaceOrder';

import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Qch6KCojz8lzZuY4ZJn186IH7NK3gFilyKa5HhvxAUezo0gbIDL8FM8qRpNoKTfuGqXjmSn9Ya0v0dnIcoOi6rt00yUJFmckP');


function App() {
  return (
      <div className='App'>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />}/>
          <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/order-success' element={<OrderSuccess/>}/>

        <Route path='/order' element={<Elements stripe={stripePromise}><Placeorder/></Elements>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>

  );
}

export default App
