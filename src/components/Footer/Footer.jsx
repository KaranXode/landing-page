import React from "react";
import InstagramIcon from "../../assets/images/instagram.svg";
import LinkedInIcon from "../../assets/images/linkedin.svg";
import TwitterIcon from "../../assets/images/twitter.svg";
import Input from "../Input/Input";
import { NavLinks } from "../Navbar/Navbar";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="karan__footer" id="Contact">
      <div className="karan__footer--container">
        <ul className="karan__footer--navlinks">
          <NavLinks />
        </ul>
        <div className="karan__footer--title">
          <h3>Karan</h3>
          <div className="karan__footer--title__icons">
            <img src={InstagramIcon} alt="Instagram Icon" />
            <img src={LinkedInIcon} alt="LinkedIn Icon" />
            <img src={TwitterIcon} alt="Twitter Icon" />
          </div>
        </div>
        <div className="karan__footer--form">
          <Input />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
