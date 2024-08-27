import React from 'react'
import "./style.scss";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <p className='text-one'>Move, Shop, Customise & Celebrate With Us.</p>
        <p>
          No matter what you feel like doing today, It's better as a Member.
        </p>

        <p>
          <a href="http://localhost:3000/?"> Join Us</a>
        </p>
      </div>
    </div>
  );
}

export default Banner;