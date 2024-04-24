import React from "react";
import "./Input.scss";

const Input = () => {
  return (
    <>
      <p className="contact-text">Want us to contact you?</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email"></label>
        <input type="email" name="email" id="email" placeholder="Email" />
        <button type="submit" className="edie__btn">
          Join
        </button>
      </form>
    </>
  );
};

export default Input;
