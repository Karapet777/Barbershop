import React from "react";

import "./AboutUs.css";

const AboutUs = ({ title, info }) => {
  return (
    <div className="app_about_block">
      <p>{title}</p>
      <div className="app_block_rotet"></div>
      <p>{info}</p>
    </div>
  );
};

export default AboutUs;
