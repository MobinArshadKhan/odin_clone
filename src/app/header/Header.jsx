import React from "react";
import Logo from "./Logo";
import Info from "./Info";
import "../header/header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <Logo />
      <Info />
    </div>
  );
};

export default Header;
