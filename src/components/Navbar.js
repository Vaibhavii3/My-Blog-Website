import "../style/Navbar.css";
import About from "./About";
// import Collection from "./Collection";

const Navbar = () => {
    return (
      <nav className="navbar">
        <ul>
          <About />
          {/* <Collection /> */}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  