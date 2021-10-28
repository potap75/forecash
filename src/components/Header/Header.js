import React from "react";
import Name from "./Name/Name"
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Name 
        name = "FORECASH"/>
      </div>
    </div>
  );
};

export default Header;
