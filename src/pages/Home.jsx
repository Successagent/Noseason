import React from "react";
import { useLocation } from "react-router-dom";

import { Button, Footer, MobileNavbar, Navbar } from "../components";

import shareVideo from "../assets/share.mp4";
import teamLogo from "../assets/real-estate-team-2 (1).jpg";
import { comm, pressLogo } from "../datas/products";

const Home = ({ fade_down, fade_up, fade_left, fade_right }) => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="video-con">
        <video
          src={shareVideo}
          typ="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="video"
          width="100%"
        />
      </div>
      <Navbar pathname={pathname} />
      <MobileNavbar />
      <section className="home-landing-section">
        <p data-aos={fade_down}>SAN DIEGO #1 REAL ESTATE</p>
        <h1>NO SEASON </h1>
        <h3>
          Whether you’re looking to buy or sell in San Diego, you’ve come to the
          right place.
        </h3>
        <div className="home-flex">
          <Button title="View Our Listing" />
          <Button title="Search the MLS" />
        </div>
      </section>
      <section className="team-section">
        <div>
          <p data-aos={fade_up}>NO SEASON</p>
          <h2 data-aos={fade_up}>
            Let me help you find the home of your dreams.
          </h2>
          <h5 data-aos={fade_up}>
            Whether its an apartment in the historic Gaslamp District, a
            sprawling estate in Rancho Santa Fe or a beautiful beach front home
            in La Jolla, we at Blair Owens Realty have you and your family
            covered.
          </h5>
        </div>
        <div>
          <img src={teamLogo} alt="team logo" />
        </div>
      </section>
      <section className="community-section" data-aos={fade_up}>
        <div className="community-header-sect">
          <h2 className="h2" data-aos={fade_up}>
            Communities
          </h2>
          <Button data-aos={fade_up} title="View All" />
        </div>
        <div className="community-grid-section">
          {comm.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`community-items community-item-${item.id}`}
              >
                <div className="community-image-con">
                  <img src={item.src} alt="" />
                  <div></div>
                </div>
                <div className="community-item-text">
                  <h3>{item.city}</h3>
                  <p>{item.place}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="home-press-section">
        <h2 className="h2">In The Press</h2>
        <div className="home-flex-press-section">
          {pressLogo.map((img, idx) => {
            return <img src={img.logo} alt="logo" key={idx} />;
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
