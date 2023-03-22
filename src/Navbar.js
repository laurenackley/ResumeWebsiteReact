import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
<h1>Lauren Ackley</h1><br />
    <nav id="navLinks">
        <span id="test">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
      </div>
        </span>
    </nav>
    </div>
  );
};
export default Navbar;
