import React from "react";
import { useLocation } from "react-router-dom";
import {
  Footer,
  MobileNavbar,
  Navbar,
  Products,
  SearchModal,
} from "../components";

const Search = () => {
  const { pathname } = useLocation();
  return (
    <section>
      <div className="search-hero-sec">
        <Navbar pathname={pathname} />
        <MobileNavbar pathname={pathname} />
        <SearchModal />
      </div>
      <Products pathname={pathname} />
      <div className="search-filter"></div>
      <Footer />
    </section>
  );
};

export default Search;
