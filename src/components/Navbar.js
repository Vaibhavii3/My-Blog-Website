import React, { useState } from 'react';
import "../style/Navbar.css";
import About from "./About";
// import Collection from "./Collection";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
      <nav className="navbar">
        <div className="navbar-brand">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <About />
          {/* <Collection /> */}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  