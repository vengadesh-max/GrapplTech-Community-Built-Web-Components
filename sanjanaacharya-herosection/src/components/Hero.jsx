import React,{ useState } from 'react';
import { PiInstagramLogoFill } from "react-icons/pi";
import { ImFacebook } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };
  return (
    <div className='p-5'>
      <div class="grid gap-0 column-gap-3 split">
        <div class="p-2 g-col-2 d-flex flex-column justify-content-between">
          <div className="vertical-inverted">
            <h1 className='comp-name'>Z E N I T H</h1>
            <p className='cc'>Car Company</p>
          </div>

          <div className=''>
            <h6>FOLLOW US</h6>
            <p className='follow-content'>We drive innovation and excellence in automotive engineering. Our commitment to cutting-edge technology and sleek design ensures that every vehicle delivers superior performance and unmatched style. From eco-friendly electric vehicles to powerful luxury cars, Zenith Motors redefines the future of driving.</p>

            <div className='grid mb-4'>
              <FaXTwitter />
              <PiInstagramLogoFill />
              <ImFacebook />
            </div>
            <div className='search-container'>
              <input 
                className='search-input-design'
                placeholder='Search Car Models'
                type="text" 
              />

              <i class="fas fa-search input-icon"></i>

             
            </div>
          </div>
        </div>


        <div className="g-col-10 bg-car d-flex flex-column">

          <nav className='d-flex justify-content-between'>
            <ul className='d-flex navv'>
              <li
                className={`nav-item ${selectedIndex === 0 ? 'selected' : ''}`}
                onClick={() => handleClick(0)}
              >
                Home
              </li>

              <li
                className={`nav-item ${selectedIndex === 1 ? 'selected' : ''}`}
                onClick={() => handleClick(1)}
              >
                Models
              </li>

              <li
                className={`nav-item ${selectedIndex === 2 ? 'selected' : ''}`}
                onClick={() => handleClick(2)}
              >
                About Us
              </li>
            </ul>

            <ul className='d-flex navv contact'>
            <li>Contact Us</li>
            </ul>
            
          </nav>
          <div className='d-flex flex-column my-auto headline'>
            <h1 className='headline'>DRIVE</h1>
            <h1>YOUR</h1>
            <h1 className='headline'>AMBITION</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero