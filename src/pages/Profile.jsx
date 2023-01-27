import React from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import {
  Button,
  Footer,
  MobileNavbar,
  Navbar,
  SearchModal,
} from "../components";

const Profile = () => {
  const { pathname } = useLocation();

  return (
    <div className="profile">
      <div className="property-hero">
        <Navbar pathname={pathname} />
        <MobileNavbar pathname={pathname} />
        <SearchModal />
        <div className="profile-main">
          <div className="profile-navigation">
            <div>
              <AiOutlineHeart className="svg" />
            </div>
            <div>
              <AiOutlineHeart className="svg" />
            </div>
            <div>
              <AiOutlineHeart className="svg" />
            </div>
            <div>
              <AiOutlineHeart className="svg" />
            </div>
            <div>
              <AiOutlineHeart className="svg" />
            </div>
          </div>
          <div className="profile-data">
            <form className="profile-setting-form">
              <div className="profile-name-sect">
                <h3>Name</h3>
                <div>
                  <p>Username</p>
                  <input type="text" defaultValue={"test"} />
                </div>
                <div>
                  <p>First Name</p>
                  <input type="text" defaultValue={"tests"} />
                </div>
                <div>
                  <p> Nickname</p>
                  <input type="text" defaultValue={"tested"} />
                </div>
                <div>
                  <p>Display to Public as</p>
                  <input type="text" defaultValue={"tested"} />
                </div>
              </div>
              <div className="profile-contact-sect">
                <h3>Contact Info</h3>
                <div>
                  <p>E-mail *</p>
                  <input type="text" defaultValue={"tested@gmail.com"} />
                </div>
                <div>
                  <p>Website</p>
                  <input type="text" defaultValue={""} />
                </div>
              </div>
              <div className="profile-social-sect">
                <h3>Social profile information</h3>
                <div>
                  <p>Twitter Username</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Facebook URL</p>
                  <input type="text" />
                </div>
                <div>
                  <p>LinkedIn URL</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Instagram URL</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Youtube URL</p>
                  <input type="text" />
                </div>
              </div>
              <div className="submit-con">
                <Button />
              </div>
            </form>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
