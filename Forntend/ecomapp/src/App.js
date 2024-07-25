import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './Components/Home';
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/cart';
import Checkout from './Components/CheckOut';
import Contact from './Components/CheckOut';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route path="/products" exact component={<ProductList/>} />
        <Route path="/products/:id" component={<ProductDetails/>} />
        <Route path="/cart" component={<Cart/>} />
        <Route path="/checkout" component={<Checkout/>} />
        <Route path="/contact" component={<Contact/>} />
        <Route path="/login" component={<Login/>} />
        <Route path="/register" component={<Register/>} />
        <Route path="/profile" component={<Profile/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
