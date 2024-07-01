import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg"; // Replace these with appropriate icons
import IRCTCLogo from "../pictures/IRCTC-Logo.png"; // Adjust the path to your logo
//import "./Header.css"; // Assuming you have a separate CSS file for styles
import "../styles/page.css";
import "../styles/DarkMode.css";

const Header = ({ formattedTime }) => {
  
  
  return (
    <header className="main_header fixed_header">
      <div className="container">
        <div className="logo_head">
          <img src={IRCTCLogo} alt="IRCTC Logo" className="logo-img" />
          <p className="display-4"> IRCTC Portal</p>
          <div className="dark_mode">
            <input
              className="dark_mode_input"
              type="checkbox"
              id="darkmode-toggle"
            />
            <label className="dark_mode_label" htmlFor="darkmode-toggle">
              <Sun />
              <Moon />
            </label>
          </div>
          <div>
            <p>Current Time: {formattedTime}</p>
          </div>
        </div>
        <div className="menu_box">
          <nav className="top_nav_links navbar navbar-expand-lg">
            <div className="collapse navbar-collapse" id="topNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/history" className="nav-link">
                    History
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contacts" className="nav-link">
                    Contacts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contacts" className="nav-link">
                    Trust
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
