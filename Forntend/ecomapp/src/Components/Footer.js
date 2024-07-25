import React from 'react'
import './Footer.css'

function HomeFooter() {
  return (
    <div className="container col div">
  <footer className="py-3 my-4">
  <ul className="nav float-end ms-auto">
      <h1><li className="ms-3"><a className="text-dark" href="#"><i className="bi bi-twitter-x col tw"></i></a></li></h1>
      <h1><li className="ms-3"><a className="text-dark" href="#"><i className="bi bi-instagram col in"></i></a></li></h1>
      <h1><li className="ms-3"><a className="text-dark" href="#"><i className="bi bi-facebook col fb"></i></a></li></h1>
    </ul>
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
    
      <h5><li className="nav-item"><a href="#" className="nav-link px-3 text-black fw-bold">E-commerce.com</a></li></h5>
      <h6><li className="nav-item"><a href="#" className="nav-link px-2 text-black fw-bold">Contact No:8080554566 </a></li></h6>
      <h6><li className="nav-item"><a href="#" className="nav-link px-2 text-black fw-bold">Email id:-ecommerce@info.com</a></li></h6>
      <br></br><br></br>
      <p><a href="#" className="nav-link px-2 text-black fw-bold">Address:-Vaishnavi Summit, Ground Floor, 7th Main, 80 Feet Road, 3rd Block, Koramangala Industrial Layout, Bangalore KA IN 560034</a></p>
    </ul>
    
    <p className="text-center text-black fw-bold">&copy; 2024 Company, Inc</p>
  </footer>
</div>

  )
}

export default HomeFooter