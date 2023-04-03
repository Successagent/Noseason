import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-item-one">
        <ul className="footer-links-con">
          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link className="link">
            <li>Properties</li>
          </Link>
          <Link className="link">
            <li>About</li>
          </Link>
          <Link to="/contact" className="link">
            <li>Contact</li>
          </Link>
        </ul>
        <p>© 2023 NoSeason, All Rights Reserved. Back to top</p>
      </section>
      <p>Nigeria Real Eastate Service Inc. - Powered by Noseason</p>
    </footer>
  );
};

export default Footer;
