import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components";

const AdminRegistration = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getData = async (data) => {
    try {
      const registerAdmin = await axios.post(
        "http://localhost:5000/api/auth/adminRegister",
        {
          fname: data.firstName,
          lname: data.lastName,
          email: data.email,
          password: data.password,
          cpassword: data.confirmPassword,
        }
      );
      if (registerAdmin.status === 201) {
        navigate("/admin-login");
      }
      console.log(registerAdmin);
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };

  return (
    <section className="parent-con">
      <div className="register-con">
        <div>
          <Link className="link" to="/admin">
            <FaTimes />
          </Link>
        </div>
        <h3>Create an Account</h3>
        <p>
          It takes less than a minute. If you already have an account.
          <Link to="/admin-login" className="link">
            login
          </Link>
        </p>

        {/* Registration Form */}
        <form
          className="login-form"
          onSubmit={handleSubmit((data) => getData(data))}
        >
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
              {...register("fname", {
                required: "First Name is required",
              })}
            />
            <p className="login-error-message">{errors.firstName?.message}</p>
          </div>
          <div>
            <p>Last Name*</p>
            <input
              type="text"
              {...register("lname", {
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
          <div>
            <p>Confirm Password*</p>
            <input
              type="password"
              {...register("cpassword", {
                required: "Confirm Password must be number",
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

export default AdminRegistration;
