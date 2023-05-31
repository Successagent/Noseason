import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaAngleUp } from "react-icons/fa";
import headerLogo from "../assets/NO SEASON I (1).png";

import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNavbar = ({}) => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <div className="mobile-navbar">
      <div>
        <Link to="/">
          <img src={headerLogo} alt="" />
        </Link>
      </div>
      <div className="navigation-con">
        <CgProfile />
        <div>
          <RxHamburgerMenu onClick={handleNav} />
        </div>
      </div>
      <ul className="mobile-navigation" data-visible={toggleNav}>
        <div className="mobile-nav-flex">
          <Link to="/properties" className="link">
            Our Properties
          </Link>
          <FaAngleUp />
        </div>
        <div className="mobile-nav-flex">
          <Link to="/search" className="link">
            Search For Properties
          </Link>
          <FaAngleUp />
        </div>
        <div className="mobile-nav-flex">
          <Link to="/communities" className="link">
            Communities
          </Link>
          <FaAngleUp />
        </div>
        <div className="mobile-nav-flex">
          <Link to="/about" className="link">
            About Noseason
          </Link>
          <FaAngleUp />
        </div>
        <div className="mobile-nav-flex">
          <Link to="/contact" className="link">
            Contact Us
          </Link>
          <FaAngleUp />
        </div>
      </ul>
    </div>
  );
};

export default MobileNavbar;
