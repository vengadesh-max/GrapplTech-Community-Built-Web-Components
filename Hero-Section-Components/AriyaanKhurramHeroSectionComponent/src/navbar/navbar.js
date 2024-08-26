import React from 'react'
import "./navbar.css"
import Logo from "../assets/logo3tf.png"

const navbar = () => {
    return (
        <>
            <div className='container'>
                <img src={Logo} alt="imgs" />
                <input type="checkbox" id="check" />
                <label for="check" className='checkbtn'>
                    <i>✈️</i>
                </label>
                <ul>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Services</a>
                    <a href="/">Contact Us</a>
                </ul>
            </div>
        </>
    )
}

export default navbar