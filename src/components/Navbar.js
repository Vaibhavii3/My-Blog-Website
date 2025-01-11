import React, { useState } from 'react';
import "../style/Navbar.css";
import About from "./About";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <About />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
