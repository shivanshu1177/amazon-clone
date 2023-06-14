import React from "react";
import "./Header.css";
import amazonLogo from "./PngItem_12080.png";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./Stateprovider";
import { auth } from "./firebase";



function Header() {

  const [{ basket, user }, dispatch ] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      {/*amazon logo */}
      <Link to="/">
        <img className="header_logo" src={amazonLogo} alt="logo" />
      </Link>
      {/** search */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        {/* search Logo */}
        <SearchSharpIcon className="header_searchIcon" />
      </div>
      {/** nav options */}
      <div className="header_nav">
        <Link to={ !user && '/login'}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hello, { !user ? 'Guest' : user.email }</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingCartOutlinedIcon />
            <span className="header_optionLineTwo header_cartCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
