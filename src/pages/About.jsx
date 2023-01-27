import React from "react";
import { useLocation } from "react-router-dom";
import { Footer, MobileNavbar, Navbar, SearchModal } from "../components";
import { comments } from "../datas/comment";

const About = ({ fade_up, fade_right }) => {
  const slicComment = comments.slice(1, 4);
  const { pathname } = useLocation();
  return (
    <section>
      <div className="about-hero-sect">
        <Navbar pathname={pathname} />
        <MobileNavbar pathname={pathname} />
        <SearchModal />
      </div>
      <div className="about-us-con">
        <div className="property-landing-dark-bg"></div>
        <div className="about-us-text-con">
          <h3 data-aos={fade_up}>No Season Real Estate</h3>
          <h2 data-aos={fade_up}>About Noseason</h2>
          <p data-aos={fade_right}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ipsum
            dicta qui nulla ullam molestiae odit laboriosam, dolorum eius
            voluptatibus dolorem sed repellendus, eaque quia explicabo sint
            laborum delectus quae accusamus cum quas? Beatae consequatur
            deleniti, ipsa quidem porro provident excepturi sit, ad officiis
            blanditiis, minima libero sequi nisi ea nesciunt perferendis eaque?
            Aliquam iste pariatur et cum voluptates eaque esse, officia
            voluptatum rem! Quam, assumenda.
          </p>
          <p data-aos={fade_up}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            praesentium, sed doloremque in possimus nam aut cumque velit a
            libero quibusdam, aliquam nemo deleniti optio maxime temporibus
            assumenda quidem, harum itaque! Sed cupiditate, aliquid accusantium
            aperiam rem delectus praesentium dolorum aut sapiente, labore
            reprehenderit!
          </p>
        </div>
        <div className="about-us-logo-con"></div>
      </div>
      <div className="about-comment-section">
        <div className="about-comment-sect">
          {slicComment.map((comment) => (
            <div data-aos={fade_up}>
              <p>"{comment.message}"</p>
              <div className="comment-agent-profile">
                <img src={comment.icon} alt={comment.name} />
                <h3>{comment.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="about-score-sect">
          <div>
            <h1>500+</h1>
            <h3>HAPPY CLIENTS</h3>
          </div>
          <div>
            <h1>500+</h1>
            <h3>HAPPY CLIENTS</h3>
          </div>
          <div>
            <h1>500+</h1>
            <h3>HAPPY CLIENTS</h3>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
