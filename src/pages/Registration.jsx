import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../components";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getData = async (data) => {
    const res = await axios.post(
      "http://localhost/astrosoft/noseason/api/astro-noseason-apis.php",
      {
        query_method: "signup",
        email_add: data.email,
        user_pass: data.password,
        user_name: data.username,
        l_name: data.lastName,
        f_name: data.firstName,
      }
    );
  };

  const handleFormSubmit = (data) => {
    getData(data);
  };

  return (
    <section className="parent-con">
      <div className="register-con">
        <div>
          <Link className="link" to="/">
            <FaTimes />
          </Link>
        </div>
        <h3>Create an Account</h3>
        <p>
          It takes less than a minute. If you already have an account.
          <Link to="/login" className="link">
            login
          </Link>
        </p>

        {/* Registration Form */}
        <form
          className="login-form"
          onSubmit={handleSubmit((data) => handleFormSubmit(data))}
        >
          <div>
            <p>Username*</p>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
            />
            <p className="login-error-message">{errors.username?.message}</p>
          </div>
          <div>
            <p>Email*</p>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
            />
            <p className="login-error-message">{errors.email?.message}</p>
          </div>
          <div>
            <p>First Name*</p>
            <input
              type="text"
              {...register("firstName", {
                required: "First Name is required",
              })}
            />
            <p className="login-error-message">{errors.firstName?.message}</p>
          </div>
          <div>
            <p>Last Name*</p>
            <input
              type="text"
              {...register("lastName", {
                required: "Last Name is required",
              })}
            />
            <p className="login-error-message">{errors.lastName?.message}</p>
          </div>
          <div>
            <p>Password*</p>
            <input
              type="password"
              {...register("password", {
                required: "Password must be number",
              })}
            />
            <p className="login-error-message">{errors.password?.message}</p>
          </div>
          <div className="terms-and-condition">
            <input type="checkbox" />
            <h4>Accept the terms and condition's</h4>
          </div>
          <Button title="Register" />
        </form>
      </div>
    </section>
  );
};

export default Registration;
