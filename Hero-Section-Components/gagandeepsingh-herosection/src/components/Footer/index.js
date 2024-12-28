import React from 'react'
import "./style.scss";
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="footer-text">JOIN US AND GET 15 % OFF.</h1>{" "}
      <button className="footer-button">
        SIGN UP HERE
        <IoIosArrowRoundForward style={{fontSize:"20px", paddingLeft:"5px",}}/>
      </button>
    </div>
  );
}

export default Footer