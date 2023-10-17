import React from "react";
import "./utility-css/header-title.css";

const HeaderTitleComponent = ({ title }) => {
  return (
    <div className="header-title">
      <h1 className="header-title-head">{title}</h1>
    </div>
  );
};

export default HeaderTitleComponent;
