import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  About,
  Communities,
  Contact,
  Home,
  Product,
  Properties,
  Search,
} from "./pages";

import { AdminDashboard, Login, Registration } from "./pages/Admin";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              fade_up="fade-up"
              fade_down="fade-down"
              fade_left="fade-left"
              fade_right="fade-right"
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties" element={<Properties fade_up="fade-up" />} />
        <Route
          path="/about"
          element={<About fade_up="fade-up" fade_right="fade-right" />}
        />
        <Route
          path="/communities"
          element={<Communities fade_up="fade-up" />}
        />
        <Route path="/search" element={<Search />} />
        <Route path="/products/:slug" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
