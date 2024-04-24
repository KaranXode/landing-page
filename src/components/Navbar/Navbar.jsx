import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import InstagramIcon from "../../assets/images/instagram.svg";
import LinkedInIcon from "../../assets/images/linkedin.svg";
import TwitterIcon from "../../assets/images/twitter.svg";
import "./Navbar.scss";

export const NavLinks = () => {
  return (
    <>
      <li>
        <a href="#Home">Home</a>
      </li>
      <li>
        <a href="#Services">Services</a>
      </li>
      <li>
        <a href="#OurWorks">Our Works</a>
      </li>
      <li>
        <a href="#Client">Clients</a>
      </li>
      <li>
        <a href="#Contact">Contact</a>
      </li>
    </>
  );
};

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav className="edie__nav">
      <div className="edie__nav--container">
        <div className="edie__nav--container-logo">
          <h2>Edie</h2>
        </div>
        <ul className="edie__nav--navlinks">
          <NavLinks />
        </ul>
        <ul
          className={
            showMobileNav
              ? "edie__nav--mobile__navlinks showMobileNav"
              : "edie__nav--mobile__navlinks "
          }
        >
          <NavLinks />
          <div className="edie__nav--mobile__navlinks--icons">
            <div className="icons-container">
              <img src={InstagramIcon} alt="Instagram Icon" />
              <img src={LinkedInIcon} alt="LinkedIn Icon" />
              <img src={TwitterIcon} alt="Twitter Icon" />
            </div>
          </div>
        </ul>
        <div className="edie__nav--hamburger">
          {showMobileNav ? (
            <CloseIcon
              className="hamburger-icons"
              onClick={() => setShowMobileNav((prevState) => !prevState)}
            />
          ) : (
            <MenuIcon
              className="hamburger-icons"
              onClick={() => setShowMobileNav((prevState) => !prevState)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
