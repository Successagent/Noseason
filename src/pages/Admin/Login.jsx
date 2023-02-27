import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Button, MobileNavbar, Navbar, SearchModal } from "../../components";
import Home from "../Home";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState(null);
  const [loginPassword, setLoginPassword] = useState(null);
  const [logins, setLogins] = useState(null);
  const navigate = useNavigate();

  const getLoginDetails = async (e) => {
    e.preventDefault();
    const logins = await axios.post(
      "http://localhost/astrosoft/noseason/api/astro-noseason-apis.php",
      {
        query_method: "login",
        email_add: loginEmail,
        password: loginPassword,
      }
    );

    if (logins.data !== "ERROR: 1") {
      localStorage.setItem("userDetails", logins.data);
      navigate("/profile-settings");
    }
  };
  return (
    <>
      <div className="parent-con">
        <div className="login-con">
          <Link className="link" to="/">
            <FaTimes />
          </Link>
          <h3>Login in</h3>
          <p>
            Don't have an account?
            <Link to="/register" className="link">
              Create your account
            </Link>
            , it takes less than a minute.
          </p>

          {/* Login Form */}

          <form className="login-form" onSubmit={getLoginDetails}>
            <div>
              <p>Email</p>
              <input
                type="email"
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div>
              <p>Password</p>
              <input
                type="password"
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <Button title="Login" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
