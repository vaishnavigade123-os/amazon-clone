import React from "react";

import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";


import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import 'firebase/auth'
import 'firebase/firestore'
import { auth } from "./firebase";



function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
  
    }
  }


  
  return (
    <nav nav className="header">
      {/* Logo */}
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* Search  */}
      
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon" />
      </div>

<div className="header-nav">
<Link to={!user && '/login'} className="header-link">
  <div onClick={handleAuthenticaton}  className="header-option">
    <span className="header-optionLineOne">Hello {!user ? 'Guest' : user.email} </span>
    <span className="header-optionLineTwo">
    {!user ? 'Guest' : user.email}
    </span>
  </div>
</Link>

<Link to="/orders" className="header-link">
  <div className="header-option">
    <span className="header-optionLineOne">Returns</span>
    <span className="header-optionLineTwo">& Orders</span>
  </div>
</Link>

<Link to="/header-options" className="header-link">
  <div className="header-option">
    <span className="header-optionLineOne">Your</span>
    <span className="header-optionLineTwo">Prime</span>
  </div>
</Link>

<Link to="/checkout" className="header-link">
  <div className="header-optionBasket">
    <ShoppingBasket />
    <span className="header-optionLineTwo header-basketCount">
    {basket?.length}

    </span>
  </div>
</Link>
</div>
</nav>
  )

}

export default Header;
  


