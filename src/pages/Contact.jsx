import React from "react";
import {
  Button,
  Footer,
  MobileNavbar,
  Navbar,
  SearchModal,
} from "../components";
import { useLocation, Link } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { useForm } from "react-hook-form";

import Map from "../assets/image 219.svg";

const Contact = () => {
  const { pathname } = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleContactForm = (data) => {};
  return (
    <>
      <section className="contact-page">
        <Navbar pathname={pathname} />
        <MobileNavbar pathname={pathname} />
        <SearchModal />
        <div className="contact-map-sect">
          <div className="contact-map-flex">
            <p>Contact</p>
            <div className="map-nav-con">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/">
                <li>Contact</li>
              </Link>
            </div>
          </div>
          <img src={Map} alt="map" />
        </div>
        <div className="contact-form-con">
          <form
            className=""
            onSubmit={handleSubmit((data) => handleContactForm(data))}
          >
            <div className="contact-form-item">
              <div className="input-1">
                <input
                  className="input-con"
                  placeholder="Name*"
                  type="text"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                <p>{errors.name?.message}</p>
              </div>
              <div className="input-2">
                <input
                  className="input-con"
                  placeholder="Email*"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                <p>{errors.email?.message}</p>
              </div>
              <div className="input-3">
                <input
                  className="input-con"
                  placeholder="Phone*"
                  type="phone"
                  {...register("phone", {
                    required: "Phone Number is required",
                  })}
                />
                <p>{errors.phone?.message}</p>
              </div>
              <div className="input-4">
                <input
                  className="input-con"
                  placeholder="Subject*"
                  type="text"
                  {...register("subject", {
                    required: "Text input is required",
                  })}
                />
                <p>{errors.subject?.message}</p>
              </div>
              <div className="input-5">
                <textarea
                  type="textarea"
                  placeholder="message"
                  {...register("message", { required: "Input must be filled" })}
                ></textarea>
                <p>{errors.message?.message}</p>
              </div>
            </div>
            <Button title="Submit" />
          </form>
          <div className="contact-details">
            <h3>Contact Details</h3>
            <p>
              Based out of San Diego, CA, Contempo is a small web design studio
              headed up by designer Chris Robinson.
            </p>
            <div className="contact-flex">
              <GrLocation />
              <p>555 Somewhere st. San Diego, CA 92101</p>
            </div>
            <div className="contact-flex">
              <GrLocation />
              <p>555 Somewhere st. San Diego, CA 92101</p>
            </div>
            <div className="contact-flex">
              <GrLocation />
              <p>555 Somewhere st. San Diego, CA 92101</p>
            </div>
            <div className="contact-flex">
              <div>
                <FaFacebook />
              </div>
              <div>
                <FaFacebook />
              </div>
              <div>
                <FaFacebook />
              </div>
              <div>
                <FaFacebook />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Contact;
