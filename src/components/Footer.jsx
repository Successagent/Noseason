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
            <li>Home</li>
          </Link>
          <Link className="link">
            <li>Home</li>
          </Link>
          <Link to="/contact" className="link">
            <li>Contact</li>
          </Link>
        </ul>
        <p>
          © 2023 WP Pro Real Estate 7 Premium WordPress Theme, All Rights
          Reserved. Back to top
        </p>
      </section>
      <p>
        San Diego Multiple Listing Service Inc. - Powered by RealtyWatch
        Solutions
      </p>
    </footer>
  );
};

export default Footer;
