import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <NavLink to="/"><span>S</span>kyshot</NavLink>
          </h2>
        </div>
        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
            <NavLink to="/Stocks">Stocks</NavLink>
            </li>
            <li>
              <NavLink to="/MututalFund">Mutual Fund</NavLink>
            </li>
            <li>
              <NavLink to="/IPO">IPO</NavLink>
            </li>
            <li>
              <NavLink to="/News">News</NavLink>
            </li>
            <li>
            <NavLink  to ="/Demat"><button >Open Demant Account</button></NavLink>
            </li>
            <li>
            <NavLink  to ="/Login"><button >LOGIN</button></NavLink>
            </li>
          </ul>\
        </div>

        
        <div className="social-media">
           {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;