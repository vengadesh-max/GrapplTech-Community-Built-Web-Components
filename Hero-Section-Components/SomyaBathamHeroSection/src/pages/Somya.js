import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Homestyle.css"
import Ban from "../Images/images.jpeg"
const Somya = () => {
  return (
    <div >
    <div className='home' style={{backgroundImage:`url(${Ban})` }}> 
    <p style={{color:"white", fontSize:"24px"}}>helo</p>
    <Link to={"/menu"} >
    <button style={{color:"black", fontSize:"44px", borderRadius:"20px"}}>click</button>
    </Link></div>
   
       </div>
  )
}

export default Somya;