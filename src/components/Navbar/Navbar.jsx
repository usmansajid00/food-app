import { useState } from "react";
import { assets } from "../../assets/assets";
import "./navbar.scss";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const menuItems = ["Home", "Menu", "Mobile App", "Contact Us"];

  return (
    <div className="navbar">
      {/* <img src={assets.logo} className="logo" alt="logo" /> */}
      <h1 className="logo">Foodie baba</h1>
      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setActiveMenu(item)}
            className={activeMenu === item ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>
        <button className="nav-btn">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
