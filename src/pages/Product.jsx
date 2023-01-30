import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { client, urlFor } from "../lib/client";
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

const Product = () => {
  const [house, setHouse] = useState([]);
  const { slug } = useParams();

  const { pathname } = useLocation();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
      city,
      details,
      image,
      name,
      price,
       slug,
      street,
      logo,
      id
    }`
      )
      .then((data) => {
        setHouse(data);
      })
      .catch((err) => console.log(err));
  }, [slug]);

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
          {house[0]?.image?.map((item, idx) => (
            <img key={idx} src={urlFor(item)} />
          ))}
        </div>
        <div className="product-view-text-con">
          <div className="product-feature-sect">
            <Button title="Featured" />
          </div>
          <h1 className="product-title">{house[0]?.street}</h1>
          <p>{house[0]?.city}</p>
          <div>
            <h2>${house[0]?.price}</h2>
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
                  <p>(+234) 7088613251</p>
                </div>
                <div className="product-contact-flex">
                  <AiOutlinePhone />
                  <p>(+234) 7088613251</p>
                </div>
                <div className="product-contact-flex">
                  <AiOutlinePhone />
                  <p>(+234) 7088613251</p>
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
                    <CgInstagram />
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
              <Products slug={slug} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
