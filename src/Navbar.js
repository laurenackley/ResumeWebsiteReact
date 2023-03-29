import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import { Fragment } from "react";
import './headerStyles.css'
import ReactGA from 'react-ga';
const TRACKING_ID = 'G-2WZBD4FGV9';
ReactGA.initialize(TRACKING_ID);

const HeaderLink = (props) => {
  let {text, to} = props;

  return (
    <Fragment>
      <a className='headerLink' href={to}> <h3>{text}</h3> </a>
    </Fragment>
  )
}

const Navbar = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="navbar">
        <nav id="navLinks">

            <HeaderLink to="/" text="Home"/>
            <HeaderLink to="#resume" text="Resume"/>
            <HeaderLink to="#portfolio" text="Portfolio" />
            <HeaderLink to="#contactInformation" text="Contact Me"/>

        </nav>
    </div>
  );
};

export default Navbar;
