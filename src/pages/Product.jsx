import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import {
  Button,
  Footer,
  MobileNavbar,
  Navbar,
  Products,
  SearchModal,
} from "../components";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import agent from "../assets/agent-7.jpg";
import { CgInstagram } from "react-icons/cg";
import { useGlobalContext } from "../context/context";

const Product = () => {
  const { properties } = useGlobalContext();
  const { id } = useParams();
  const property = properties.filter((property) => property._id === id);

  const { pathname } = useLocation();

  return (
    <div className="product-con">
      <div className="product-navbar">
        <Navbar pathname={pathname} />
        <MobileNavbar pathname={pathname} />
      </div>
      <SearchModal />
      <div className="contact-map-flex">
        <p>Product</p>
        <div className="map-nav-con">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>Product</li>
          </Link>
        </div>
      </div>
      <div className="product-view-con">
        <div className="product-view-image-con">
          {property[0].image.map((item, idx) => (
            <img key={idx} src={item.url} />
          ))}
        </div>
        <div className="product-view-text-con">
          <div className="product-feature-sect">
            <Button title="Featured" />
            <button className="btn">
              {property[0].available ? "available" : "not available"}
            </button>
          </div>
          <h1 className="product-title">{property[0].location}</h1>
          <p>{property[0].city}</p>
          <div>
            <h2>N{property[0].marketValue}</h2>
          </div>
          <div className="noseason-contact-sect">
            <div>
              <div className="noseason-contact-sect-item-one">
                <h2>Noseaon</h2>
                <img src={agent} alt="" />
              </div>
              <div>
                <div className="product-contact-flex">
                  <AiOutlinePhone />
                  <p>(+234) 9166308482</p>
                </div>
                <div className="product-contact-flex">
                  <AiOutlinePhone />
                  <p>(+234) 9166308482</p>
                </div>
                <div className="product-contact-flex">
                  <AiOutlinePhone />
                  <p>(+234) 9166308482</p>
                </div>
                <div className="product-contact-flex">
                  <AiOutlineMail />
                  <p>noseason@gmail.com</p>
                </div>
                <div className="product-contact-flex product-icons-con">
                  <div>
                    <FaTwitter />
                  </div>
                  <div>
                    <MdFacebook />
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/noseason.ng"
                      target="_blank"
                    >
                      <CgInstagram />
                    </a>
                  </div>
                  <div>
                    <FaLinkedinIn />
                  </div>
                  <div>
                    <FaYoutube />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-form-con">
              <p>Request more Information</p>
              <form className="product-form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <Button title="Login" />
              </form>
            </div>
            <div className="product-products-con">
              <Products slug={id} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
