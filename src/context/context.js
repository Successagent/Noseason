import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const hostUrl = "https://noseason-api.onrender.com";
  const [properties, setProperties] = useState(() => {
    const sessionStorageProduct = sessionStorage.getItem("createdProperties");
    return sessionStorageProduct
      ? JSON.parse(sessionStorage.getItem("createdProperties"))
      : [];
  });
  const getProperties = async () => {
    try {
      const res = await axios.get(`${hostUrl}/api/product`);
      sessionStorage.setItem("createdProperties", JSON.stringify(res.data));
      setProperties(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);
  return (
    <AppContext.Provider
      value={{
        hostUrl,
        properties,
        setProperties,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
