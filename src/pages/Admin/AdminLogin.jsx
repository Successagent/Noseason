import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "../../components";
import { useGlobalContext } from "../../context/context";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { hostUrl } = useGlobalContext();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const getLoginDetails = async (data) => {
    console.log(data.email, data.password);
    if (data.email && data.password.length > 5) {
      try {
        const adminUser = await axios.post(`${hostUrl}/api/auth/admin`, {
          email: data.email,
          password: data.password,
        });
        console.log(adminUser);
        if (adminUser.status === 200) {
          sessionStorage.setItem(
            "token",
            JSON.stringify(adminUser.data.accessToken)
          );
          navigate("/admin");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="parent-con">
        <div className="login-con">
          <Link className="link" to="/admin">
            <FaTimes />
          </Link>
          <h3>Login in</h3>
          <p>
            Don't have an account?
            <Link to="/admin-register" className="link">
              Create your account
            </Link>
            , it takes less than a minute.
          </p>

          {/* Login Form */}

          <form
            className="login-form"
            onSubmit={handleSubmit((data) => getLoginDetails(data))}
          >
            <div>
              <p>Email</p>
              <input type="email" {...register("email")} />
            </div>
            <div>
              <p>Password</p>
              <input type="password" {...register("password")} />
            </div>
            <Button title="Login" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
