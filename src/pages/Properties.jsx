import React from "react";
import { useLocation } from "react-router-dom";
import { Footer, Hero, MobileNavbar, Navbar, SearchModal } from "../components";
import Products from "../components/Products";
import { useGlobalContext } from "../context/context";

const Properties = ({ fade_up }) => {
  const { pathname } = useLocation();
  const { hostUrl } = useGlobalContext();
  console.log(hostUrl);

  return (
    <section className="properties-page">
      <div className="property-hero">
        <Navbar pathname={pathname} />
        <MobileNavbar pathname={pathname} />
        <SearchModal />
      </div>
      <Hero title="Our Exclusive Lisiting" />
      <Products fade_up={fade_up} pathname={pathname} />
      <Footer />
    </section>
  );
};

export default Properties;
