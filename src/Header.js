import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider"


function Header() {
  
  const [{basket}, dispatch] = useStateValue(); 

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
          className="HeaderLogo"
        />
      </Link>

      <div className="headerSearch">
        <input type="text" className="headerSearchInput" />
        <FaSearch className="headerSearchIcon" />
      </div>

      <div className="headerNav">
        <Link to="/login">
          <div className="headerOption">
            <span className="headerOptionLineOne">hello Guest</span>
            <span className="headerOptionLineTwo"> Sign In</span>
          </div>
        </Link>
        <Link to="/Orders">
          <div className="headerOption">
            <span className="headerOptionLineOne">Returns </span>
            <span className="headerOptionLineTwo"> & Orders </span>
          </div>
        </Link>
        <Link to="/prime">
          <div className="headerOption">
            <span className="headerOptionLineOne">Your</span>
            <span className="headerOptionLineTwo"> Prime </span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="headerOptionBasket">
            <FaShoppingBasket size="2rem" />
            <span className="headerOptionLineTwo headerBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
