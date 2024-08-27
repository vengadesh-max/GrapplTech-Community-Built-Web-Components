import "./style.scss";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
    const List = ["Find a Store", "Help ", "Join Us ", "Sign In"];
    const newlist = ["New & Featured ", " Men", " Women", " Kids", " Sale", " Customise", " SNKRS"];
    const newcomponentList = newlist.map((item, index) => (
        <li key={index}>{item}</li>
        
    ));
    const myComponentList = List.map((item, index) => (
      <li className="item-list" key={index}>{item}</li>
    ));
    return (
      <div className="nav-container">
        <div className="prim-nav">
          <div className="left">
            <img className="logo-image" src="./myLogo.png"></img>
          </div>

          <div className="right">
            <ul className="nav-list">{myComponentList}</ul>
          </div>
        </div>
        <div className="sec-nav">
          <div className="kicks">
            <h1>KICKS.COM</h1>
          </div>
          <ul className="new-list">{newcomponentList}</ul>
          <div className="right-input">
            <form className="search-input">
              <img className="magnifying" src="./magnifying-glass.png"></img>
              <input
                className="input-bar"
                type="text"
                placeholder="Search"
              ></input>
            </form>
            <button className="cart-cta"><IoCartOutline style={{fontSize:"30px"}}/></button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
