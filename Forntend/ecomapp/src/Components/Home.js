import React from 'react';
import ProductList from './ProductList';
import './Image/home.jpg'
import { NavLink } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-dark text-white" >
  <div className="container-fluid">
    <a className="navbar-brand fw-bold text-white" href="#">E-Commerce.com</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
       <NavLink className="nav-link active text-warning" aria-current="page" href="#">Home</NavLink>
       <NavLink className="nav-link active text-warning" to="/products">Product Category</NavLink>
       <NavLink className="nav-link active text-warning" href="/contact">Contact us</NavLink>
       
      </div>
      <div className='container ms-auto'>
        <form className='d-flex'>
            <input className='form-control ms-auto w-25' type='search' placeholder='Search' aria-label='Search'/>
            <button className='btn btn-outline-warning' type='submit'>Search</button>
        </form>
    </div>
    </div>
  </div>
</nav>
<img src={require("./Image/home1.webp")} alt='no image' style={{width:'100%', height:'50%'}}/>
<ProductList/>
</div>
  );
}

export default Home;
