import React from "react";
import { useLocation } from "react-router-dom";
import {
  Footer,
  Hero,
  MobileNavbar,
  Navbar,
  Products,
  SearchModal,
} from "../components";

import laJola from "../assets/la-jolla (1).jpg";
import shopping from "../assets/lj-shopping-1.jpg";
import shores from "../assets/lj-shores-2-1.jpg";

const Communities = ({ fade_up }) => {
  const { pathname } = useLocation();

  return (
    <section>
      <div className="communities-hero-sect">
        <Navbar pathname={pathname} />
        <MobileNavbar pathname={pathname} />
        <SearchModal />
        <Hero title="Communities" />
      </div>
      <div className="community-score-sect">
        <div>
          <h1>$1.6M</h1>
          <h3>MEDIAN LIST PRICE</h3>
        </div>
        <div>
          <h1>$1.6M</h1>
          <h3>MEDIAN LIST PRICE</h3>
        </div>
        <div>
          <h1>$1.6M</h1>
          <h3>MEDIAN LIST PRICE</h3>
        </div>
      </div>
      <div className="seaside-con">
        <div>
          <h1>A Hilly Seaside Community</h1>
          <div data-aos={fade_up}>
            <img src={laJola} alt="" />
          </div>
        </div>
        <div>
          <div data-aos={fade_up}>
            <img src={shopping} alt="" />
          </div>
          <p data-aos={fade_up}>
            La Jolla is an affluent neighborhood in San Diego, California. It
            occupies 7 miles of curving coastline along the Pacific Ocean within
            the northern city limits.
          </p>
        </div>
        <div>
          <div data-aos={fade_up}>
            <img src={shores} alt="" />
          </div>
        </div>
      </div>
      <Products data_aos={fade_up} />
      <Footer />
    </section>
  );
};

export default Communities;
