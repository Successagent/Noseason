import React, { useState } from "react";
import { Link } from "react-router-dom";
import titleLogo2 from "../assets/blair-owens-logo@2x.png";

import { FaAngleUp, FaArrowDown } from "react-icons/fa";

import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

import navLogo from "../assets/mobile.png";

const MobileNavbar = ({ pathname }) => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleNav = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <div className="mobile-navbar">
      <div>
        <img
          src={
            pathname == "/properties" ||
            pathname == "/search" ||
            pathname == "/communities" ||
            pathname == "/contact" ||
            pathname == "/about"
              ? titleLogo2
              : navLogo
          }
          alt=""
        />
      </div>
      <div className="navigation-con">
        <CgProfile />
        <div>
          <RxHamburgerMenu onClick={handleNav} />
        </div>
      </div>
      <ul className="mobile-navigation" data-visible={toggleNav}>
        <div className="mobile-nav-flex">
          <Link className="link">Our Properties</Link>
          <FaAngleUp />
        </div>
        <div className="mobile-nav-flex">
          <Link className="link">Search For Properties</Link>
          <FaAngleUp />
        </div>
        <div className="mobile-nav-flex">
          <Link className="link">Communities</Link>
          <FaAngleUp />
        </div>
        <div className="mobile-nav-flex">
          <Link className="link">About Noseason</Link>
          <FaAngleUp />
        </div>
        <div className="mobile-nav-flex">
          <Link className="link">Contact Us</Link>
          <FaAngleUp />
        </div>
      </ul>
    </div>
  );
};

export default MobileNavbar;