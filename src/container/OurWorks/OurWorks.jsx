import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import React from "react";
import Booking from "../../assets/images/booking.png";
import JuiceProduct from "../../assets/images/juice-product.png";
import Onboard from "../../assets/images/onboard.png";
import Smarthome from "../../assets/images/smarthome.jpg";
import "./OurWorks.scss";

const OurWorks = () => {
  return (
    <section className="edie__ourworks" id="OurWorks">
      <div className="edie__ourworks--container">
        <h2 className="edie__ourworks--title">
          Good design means good business
        </h2>
        <div className="edie__ourworks--works__container">
          <div className="edie__ourworks--works__container--image">
            <img src={Smarthome} alt="Smart home dashboard" />
            <p>Full stack application</p>
            <h3>Smart home dashboard</h3>
          </div>
          <div className="edie__ourworks--works__container--image">
            <img src={Onboard} alt="Onboard application" />
            <p>UX/UI design</p>
            <h3>Onboard application</h3>
          </div>
          <div className="edie__ourworks--works__container--image">
            <img src={Booking} alt="Booking system" />
            <p>Mobile application</p>
            <h3>Booking system</h3>
          </div>
          <div className="edie__ourworks--works__container--image">
            <img src={JuiceProduct} alt="Juice product homepage" />
            <p>Front End application</p>
            <h3>Juice product homepage</h3>
          </div>
          <div className="edie__ourworks--works__container--link">
            <a href="#Home">see more</a>
            <TrendingFlatIcon className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
