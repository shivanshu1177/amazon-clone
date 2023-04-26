import React from "react";
import "./Header.css";
import amazonLogo from "./PngItem_12080.png";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./Stateprovider";



function Header() {

  const [{ basket} ] = useStateValue();

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
        <div className="header_option">
          <span className="header_optionLineOne">Hello, Guest</span>
          <span className="header_optionLineTwo">Sign in</span>
        </div>

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
            <span className="header_optionLineTwo header_cartCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
