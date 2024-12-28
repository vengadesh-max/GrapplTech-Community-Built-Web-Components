import React from 'react'
import { useState } from 'react'
import './navbar.css'
import closebtn from '../assets/closebtn.svg'
import hamburger from '../assets/hamburger.svg'


const Navbar = () => {
const [click, setclick] = useState(false)
    
function menu(){
  setclick(true)
}
function close(){
  setclick(false)
}
      

     
  return (
    <div className='navdiv'>
      <nav className='navbar'>
        <h1>Your Logo</h1>
        <ul className='navlist'>
            <li className='nav-link nav-link-ltr'>Home</li>
            <li className='nav-link nav-link-ltr'>Products</li>
            <li className='nav-link nav-link-ltr'>Services</li>
            <li className='nav-link nav-link-ltr'>Contact</li>
            <li className='nav-link nav-link-ltr'>FAQ</li>
        </ul>
        <ul className='btnlist'>
            <li><button className='login'>Log in</button></li>
            <li><button className='signin'>Get Started</button></li>
        </ul>
        <img className='hamburger' onClick={menu} src={hamburger} alt="" />
      </nav>
      {click?<div className="dropdown" >
         <img src={closebtn} onClick={close} />
        <ul className='droplist'>
            <li>Home</li>
             <li>Products</li>
            <li>Services</li>
            <li>Contact</li>
          <li>FAQ</li>
         </ul>
         <ul className='dropbtn'>
             <li><button className='login'>Log in</button></li>
            <li><button className='signin'>Get Started</button></li>
       </ul>
     </div>:null}
    </div>
    )
 
}

export default Navbar
