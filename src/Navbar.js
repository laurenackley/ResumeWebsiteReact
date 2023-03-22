import { Link } from "react-router-dom";
import { Fragment } from "react";
import './headerStyles.css'

const HeaderLink = (props) => {
  let {text, to} = props;

  return (
    <Fragment>
      <Link className='headerLink' to={to}> <h3>{text}</h3> </Link>
    </Fragment>
  )
}

const Navbar = () => {
  return (
    <div className="navbar">
        <nav id="navLinks">

            <HeaderLink to="/" text="Home"/>
            <HeaderLink to="/resume" text="Resume"/>
            <HeaderLink to="/contact" text="Contact Me"/>
            <HeaderLink to="/portfolio" text="Portfolio" />

        </nav>
    </div>
  );
};

export default Navbar;
