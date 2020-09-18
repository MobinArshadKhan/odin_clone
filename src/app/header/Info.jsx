import React from "react";
import img from "../assets/mobin.jpeg";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const Info = () => {
  const handleSideBar = () => {
    const id = document.getElementById("side");
    id.classList.toggle("sideBar");
  };
  return (
    <div className="infoContainer">
      <h4>My Course</h4>
      <h4>Community</h4>
      <h4>|</h4>
      <img className="user" src={img} alt="user" />
      <button className="btn" onClick={handleSideBar}>
        <ArrowBackIcon style={{ color: "white" }} />
        <img className="btnImg" src={img} alt="user" />
      </button>
      <div id="side"></div>
    </div>
  );
};

export default Info;
