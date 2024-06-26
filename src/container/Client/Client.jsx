import React from "react";
import Person1 from "../../assets/images/person1.png";
import Person2 from "../../assets/images/person2.png";
import Person3 from "../../assets/images/person3.png";
import Person4 from "../../assets/images/person4.png";
import "./Client.scss";

const Client = () => {
  return (
    <section className="karan__client" id="Client">
      <div className="karan__client--container">
        <div className="karan__client--flex">
          <div className="karan__client--text">
            <p className="karan__client--text__meet">Meet the team</p>
            <h3 className="karan__client--text__content">
              We are chilled and a laidback team
            </h3>
            <p className="karan__client--text__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="karan__client--images__container">
            <div className="karan__client--images__container--img">
              <img src={Person3} alt="Person 3" />
            </div>
            <div>
              <div className="karan__client--images__container--img">
                <img src={Person1} alt="Person 1" />
              </div>
              <div className="karan__client--images__container--img">
                <img src={Person2} alt="Person 2" />
              </div>
            </div>
          </div>
        </div>
        <div className="karan__client--sayings">
          <h2 className="karan__client--sayings__text">
            “Fast and outstanding resutls. karan understands their customer’s
            needs. They have a young and talented team.”
          </h2>
          <div className="karan__client--sayings__image">
            <img src={Person4} alt="Person 4" />
            <div>
              <h4>Carlos Tran</h4>
              <p>The Decorate Gatsby</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
