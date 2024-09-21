import React from 'react'
import "./style.scss";


const Carousel = () => {
  return (
    <div className="container">
      <img
        className="image"
        src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/20a995a6-18ae-42bf-975a-6c79dfdd8eaf/jordan.png"
      ></img>
      <div className="carousel-text">
        <p className="image-text">BUILT</p>
        <p className="image-text">FOR THE</p>
        <p className="image-text">CHASE .</p>
      </div>
    </div>
  );
}

export default Carousel;