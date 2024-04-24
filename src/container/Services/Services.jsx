import CodeIcon from "@mui/icons-material/Code";
import EditIcon from "@mui/icons-material/Edit";
import StorageIcon from "@mui/icons-material/Storage";
import React from "react";
import Card from "../../components/Card/Cards";
import "./Services.scss";

const Services = () => {
  //color for icon components
  const colors = ["#2D9CDB", "#27AE60", "#EB5757"];

  return (
    <section className="karan__services" id="Services">
      <h2 className="karan__services--text">We offer high demand services</h2>
      <div className="karan__services--container">
        <Card
          image={<EditIcon />}
          iconColor={colors[0]}
          title="UI/UX Design"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
        />
        <Card
          image={<CodeIcon />}
          iconColor={colors[1]}
          title="Front End"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
        />
        <Card
          image={<StorageIcon />}
          iconColor={colors[2]}
          title="Back End"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
        />
      </div>
    </section>
  );
};

export default Services;
