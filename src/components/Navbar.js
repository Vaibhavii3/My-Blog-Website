import "../style/Navbar.css";
import About from "./About";

const Navbar = () => {
    return (
      <nav className="navbar">
        <ul>
          <About />
          <li><a href="#collection">Collection</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  