import React from "react";
import "./About.css";
import Story from "./Story";
import Team from "./Team";

const About = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <Story />
      <Team />
    </div>
  );
};

export default About;
