import React from "react";
import "./Card.scss";

const Cards = ({ image, title, content, iconColor }) => {
  return (
    <div className="karan__card">
      <div className="karan__card--container">
        <div
          className="karan__card--icon"
          style={{ backgroundColor: iconColor }}
        >
          <div className="icon">{image}</div>
        </div>
        <h3 className="karan__card--title">{title}</h3>
        <p className="karan__card--text">{content}</p>
        <button className="karan__card--btn">Get started</button>
      </div>
    </div>
  );
};

export default Cards;
