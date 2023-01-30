import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import { FaAngleUp } from "react-icons/fa";

import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNavbar = ({ pathname }) => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleNav = () => {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mobile-navbar">
      <div>
        <h2>NOSEASON</h2>
      </div>
      <div className="navigation-con">
        <CgProfile />
        <div>
          <RxHamburgerMenu onClick={handleNav} />
        </div>
      </div>
      <ul
        className="mobile-navigation"
        data-aos="fade-left"
        data-visible={toggleNav}
      >
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
