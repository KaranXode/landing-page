import React from "react";
import HeroImage from "../../assets/images/heroImage.jpg";
import Input from "../../components/Input/Input";
import "./Home.scss";

const Home = () => {
  return (
    <section className="edie__hero" id="Home">
      <div className="edie__hero--container">
        <p className="edie__hero--linktext">Unhappy with your website?</p>
        <div className="edie__hero--main--text">
          <h1>We create beautiful and fast web services</h1>
        </div>
      </div>
      <div className="edie__hero--image--container">
        <img src={HeroImage} alt="Hero image" />
      </div>
      <div className="edie__hero--container">
        <div className="edie__hero--main--text">
          <h1>Story, emotion and purpose</h1>
        </div>
        <div className="edie__hero--text">
          <p>
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
          </p>
        </div>
        <div className="edie__hero--contact">
          <Input />
        </div>
      </div>
    </section>
  );
};

export default Home;
