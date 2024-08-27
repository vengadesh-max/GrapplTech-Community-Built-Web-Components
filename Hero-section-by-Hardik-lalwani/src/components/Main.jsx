import './Main.css';
import { IoFlashOutline } from "react-icons/io5";
import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoGiftOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiAddCircleLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuSearch } from "react-icons/lu";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { MdOutlineMan3 } from "react-icons/md";
import { GrRestroomWomen } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiLocationArrow1 } from "react-icons/ci";
import { motion } from "framer-motion";
const container = (delay)=>({
  hidden: { y: 100, opacity: 0},
  visible:{
    y:0,
    opacity:1,
    transition:{duration:0.5,delay:delay },
  },
});

const side = (delay)=>({
  hidden: { x: -100, opacity: 0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay },
  },
});
const Nav = (delay)=>({
  hidden: { y: -100, opacity: 0},
  visible:{
    y:0,
    opacity:1,
    transition:{duration:0.5,delay:delay },
  },
});
const Main = () => {
  return (
    <>
    <div className="webpage">
    <div className="SIDEBAR">
      {/* {SIDEBAR} */}
      <div className="sidebar">
        <motion.div 
       variants={side(0.1)}
       initial="hidden"
       animate="visible" className="first-box">
        <h2 className="logo">Buy<u>M</u>ore</h2>
        <ul className="">
        <motion.div 
        variants={side(0.2)}
        initial="hidden"
        animate="visible"
         className="popular-text">{<IoFlashOutline  className="popular-text-icon" />}
        <li
         className="menu-item active">Popular Products</li> </motion.div>
        <motion.div
        variants={side(0.4)}
        initial="hidden"
        animate="visible" className="popular-text">{<IoEllipsisHorizontalCircleOutline  className="popular-text-icon" />}
          <li className="menu-item active">Explore New</li></motion.div>
          <motion.div 
          variants={side(0.6)}
          initial="hidden"
          animate="visible" className="popular-text">{<PiShoppingCartSimple  className="popular-text-icon" />}
          <li className="menu-item active">Clothing and Shoes</li></motion.div>
          <motion.div
          variants={side(0.8)}
          initial="hidden"
          animate="visible" className="popular-text">{<IoGiftOutline  className="popular-text-icon" />}
          <li className="menu-item active">Gifts and Living</li></motion.div>
          <motion.div
          variants={side(1)}
          initial="hidden"
          animate="visible" className="popular-text">{< HiOutlineLightBulb className="popular-text-icon" />}
          <li className="menu-item active">Inspiration</li></motion.div>
        </ul>
        </motion.div>
        <div 
         className="quick-actions">
          <motion.div
          variants={side(1.2)}
          initial="hidden"
          animate="visible" className="quick-action">
      <div
       className="quick-action-icon">  {< RiAddCircleLine />} </div><h3 className="quick-action">Request for product</h3> </motion.div>
      <motion.div
      variants={side(1.4)}
      initial="hidden"
      animate="visible" className=" quick-action ">
       <div className="quick-action-icon">{< RiAddCircleLine />}</div> <h3 className="">Add member</h3> </motion.div>
        </div>
        <motion.div
        variants={side(1.7)}
        initial="hidden"
        animate="visible" className="orders">
          <p>Last orders: 37</p>
          <ul>
            <li className="">DXC Nike... <span >view order</span></li>
            <li>Outerwear... <span>view order</span></li>
          </ul>
          <p>See all</p>
        </motion.div> 
        <motion.button
        variants={side(2)}
        initial="hidden"
        animate="visible" className="logout">{<AiOutlineLogout className="logout-logo"/>}Log out</motion.button>
      </div>
    </div>

    {/* {MAIN_BAR} */}
    <div className="Main">
      {/* {NAVBAR} */}
      <motion.div
      variants={Nav(0.5)}
      initial="hidden"
      animate="visible" className="Navbar">
        <div
         className=" first-section">
        <div className="NavOrders">
          <h1 className="headingone">37</h1>
          <h3>Orders <br />Last 7 days</h3>
        </div>
        <div className="Explore">
          <h1 className='explore'>Explore</h1>
        </div>
        </div>
        <div className="sections second-section">
        <div className="Navbuttons">
          <button className="button-one ">Dashboard</button>
          <button className="button-two ">Website</button>
        </div>
        <div className="categories">
              <button className="button-all">{<HiOutlineAdjustmentsHorizontal/>}All</button>
              <button className="button-men">{<MdOutlineMan3 />}Men</button>
              <button className="button-women">{<GrRestroomWomen />}Women</button>
        </div>
        </div>
        <div className="third-section">
        <div className="account">
          <div className="cart"><LiaShoppingBagSolid />Cart</div>
          <div className="profilepic">
            <img src="https://plus.unsplash.com/premium_photo-1682096630303-83ea15caadca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZmZXNpb25hbCUyMGd1eSUyMHdpdGglMjBnbGFzc2VzfGVufDB8fDB8fHww" alt="" />
          </div>
          <h2 className='account-name'>Hardik</h2>
        </div>
        <div className="search">
        <div className="filter">Filters</div>
          <div className="search-logo ">{<LuSearch />}</div>
        </div>
        </div>
      </motion.div>
      {/* {CONTENT} */}
      <div className="content">
      <div className="first-card">
          {/* First Card - Large Offer Card */}
      <motion.div
      variants={container(0.2)}
      initial="hidden"
      animate="visible" className="card offer-card">
        <img 
         src="https://media.istockphoto.com/id/1300663490/photo/portrait-of-a-sad-serene-young-woman-sitting-alone-and-thinking-with-a-blank-expression.webp?s=1024x1024&w=is&k=20&c=eb702mIqIVKkVasT32yOH2C-8EtfDlDmDuIQzpl84ow=" alt="Get Up to 50% Off" className="card-image" />
        <div
          className="card-content">
          <h2>GET UP TO 50% OFF</h2>
          <button>Get Discount</button>
        </div>
      </motion.div>

      {/* Second Card - Winter's Weekend */}
      <motion.div
      variants={container(0.4)}
      initial="hidden"
      animate="visible" className="card weekend-card">
        <img src="https://images.unsplash.com/photo-1509583401324-1ad8e3dff429?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Winter's Weekend" className="card-image" />
        <div className="card-content">
          <h3>Winter`s weekend</h3>
          <p>keep it casual</p>
        </div>
      </motion.div>

      {/* Third Card - Avail Offers */}
    <motion.div 
    variants={container(0.6)}
    initial="hidden"
    animate="visible" className="">  <div className="third-cart">
      <div
      
       className="card offer-button-card">
        <img src="https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avail Offers" className="card-image" />
        <button>Avail Offers</button>
      </div>

      {/* Fourth Card - Favourites Section */}
      
     <div className="card favourites-card">
      <div className="heading"> <h3 
        className=' favourites-heading '>Favourites{<IoIosArrowBack/>}{<IoIosArrowForward />}</h3></div> 
        <div
          className="favourites-list">
          <div className="favourite-item">
            <motion.img src="https://images.unsplash.com/photo-1639156773581-0e1fc12cc094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGElMjBtYW4lMjBpbiUyMHN3ZWF0ZXJ8ZW58MHx8MHx8fDA%3D" alt="Favourite 1" />
          </div>
          <div className="favourite-item-second">
            <img src="https://plus.unsplash.com/premium_photo-1708274144449-02d6fc8bf234?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3w4fHx8ZW58MHx8fHx8" alt="Favourite 2" />
            <button>See All</button>
          </div>
        </div>
        
      </div>
      </div>
      </motion.div>
      </div>
      {/* {SECOND-CARD} */}
      <div className="second-card">
      <div className="app">
      {/* Product Cards Section */}
      <motion.div
      variants={container(0.4)}
      initial="hidden"
      animate="visible" className="product-cards">
        <div className="product-card" style={{ backgroundColor: '#fbe9e7' }}>
          <img
            src="https://images.unsplash.com/photo-1472417583565-62e7bdeda490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fG1lbiUyMHBvc3NpbmclMjBpbiUyMGpvZ2dlcnN8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="product-image-watch"
          />
          <div className="product-info-first">
          <div className="product-info">
            <h4 className="subtitle">Our Picks</h4>
            <h3 className="title">WMX Classic analog watch</h3></div>
            <p className="price">$36</p>
          </div>
        </div>
        <div className="product-card" style={{ backgroundColor: '#ffecb3' }}>
          <img
            src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbmdpbmclMjBmZWV0JTIwd2VhcmluZyUyMHNob2VzfGVufDB8fDB8fHww"
            alt=""
            className="product-image"
          />
          <div className="product-info-second">
         <div className="product-info">  <h4 className="subtitle">Your Choice</h4>
            <h2 className="title">Supper comfy white sneakers</h2></div> 
            <p className="price">$89</p>
          </div>
        </div>
      </motion.div>

      {/* Banner Section */}
      <motion.div
      variants={container(0.6)}
      initial="hidden"
      animate="visible" className="banner">
        <div>

          <h2 className="banner-title">Bring Bold Fashion</h2>
          <p className="banner-subtitle">Layers on Layers</p>
        </div>
        <button className="banner-button">{<CiLocationArrow1 />}</button>
      </motion.div>
      </div>
    </div>
      </div>
      </div>
    </div>
   
      </>
  )
}

export default Main
