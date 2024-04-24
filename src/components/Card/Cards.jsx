import React from "react";
import "./Card.scss";

const Cards = ({ image, title, content, iconColor }) => {
  return (
    <div className="edie__card">
      <div className="edie__card--container">
        <div
          className="edie__card--icon"
          style={{ backgroundColor: iconColor }}
        >
          <div className="icon">{image}</div>
        </div>
        <h3 className="edie__card--title">{title}</h3>
        <p className="edie__card--text">{content}</p>
        <button className="edie__card--btn">Get started</button>
      </div>
    </div>
  );
};

export default Cards;
