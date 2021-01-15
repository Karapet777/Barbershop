import React from "react";

import "./AboutUs.scss";

const AboutUs = ({ title, info, className, classInfo }) => {
  return (
    <div className={`app-about-block ${className}`}>
      <p>{title}</p>
      <div className={`app-block-rotet ${classInfo}`}></div>
      <p className="app-info">{info}</p>
    </div>
  );
};

export default AboutUs;
