import React from 'react';  
import { Link } from 'react-router-dom';
import image from '../Images/image.png';  
import './Navbar.css';

function Navbar() {
    return (

 <nav className="navbar navbar-expand-lg navbar-light bg-light">
 <div className="container-fluid">
   <Link className="navbar-brand d-flex align-items-center" to="/">
     <img src={image} alt="Logo" className="navbar-logo" />
     <span className="navbar-brand-name ms-2">Cura Health</span>
   </Link>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarNav">
     <ul className="navbar-nav ms-auto">
       <li className="nav-item">
         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/service">Services</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/about">About Us</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/contact">Contact Us</Link>
       </li>
     </ul>
   </div>
 </div>
</nav>
    );
}

export default Navbar;