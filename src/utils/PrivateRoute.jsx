import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const admin = JSON.parse(sessionStorage.getItem("token"));
  return admin ? <Outlet /> : <Navigate to={"/admin-login"} />;
};

export default PrivateRoute;
