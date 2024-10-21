import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import logo1 from "../assets/logo1.png"; // Import the logo
import "./Header.css"; // Import CSS specific to header

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open state
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo1} alt="Logo" />
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776; {/* Hamburger Icon */}
        </div>
        <ul className={menuOpen ? "menu show" : "menu"}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Events" onClick={toggleMenu}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/Project" onClick={toggleMenu}>
              Project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
