import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

import titleLogo from "../assets/blair-owens-logo-white@2x.png";
import titleLogo2 from "../assets/blair-owens-logo@2x.png";

const Navbar = ({ pathname }) => {
  const [headerStyle, setHeaderStyle] = useState("nav");

  const listenScrollEvent = () => {
    if (window.scrollY < 700) {
      return setHeaderStyle("navbar");
    } else if (window.scrollY > 700) {
      return setHeaderStyle("navbar-2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <div className={headerStyle}>
      <div className="navbar-title-con">
        <Link to="/">
          <h2 className="black">NOSEASON</h2>
        </Link>
      </div>
      <div className="navbar-links-con">
        <Link to="/properties" className="link">
          <li>Our Properties</li>
        </Link>
        <Link to="/search" className="link">
          <li>Search For Properties</li>
        </Link>
        <Link to="/communities" className="link">
          <li>Communites</li>
        </Link>
        <Link to="/about" className="link">
          <li>About Noseason</li>
        </Link>
        <Link to="/contact" className="link">
          <li>Contact</li>
        </Link>
      </div>
      <div className="navbar-profile">
        <Link to="/login">
          <CgProfile className="link" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
