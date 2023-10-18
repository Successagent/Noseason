import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "../../components";
import { useGlobalContext } from "../../context/context";
import { toast, ToastContainer } from "react-toastify";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { hostUrl } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const notify = () => {
    toast(error.data);
  };

  const getLoginDetails = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const adminUser = await axios.post(`${hostUrl}/api/auth/admin`, {
        email: data.email,
        password: data.password,
      });
      console.log(adminUser);
      if (adminUser.status === 200) {
        setLoading(false);
        sessionStorage.setItem(
          "token",
          JSON.stringify(adminUser.data.accessToken)
        );
        navigate("/admin");
      }
    } catch (error) {
      setLoading(false);
      setError(error.response);
      notify();
      console.log(error);
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
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
              />
              <p className="login-error-message">{errors.email?.message}</p>
            </div>
            <div>
              <p>Password</p>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <p className="login-error-message">{errors.password?.message}</p>
            </div>
            <Button title={loading ? "Loading..." : "Login"} />
          </form>
        </div>
      </div>
      {error?.data === "Wrong credentials" && <ToastContainer />}
    </>
  );
};

export default AdminLogin;
