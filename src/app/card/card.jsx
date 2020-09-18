import React from "react";
import Cname from "./Cname";
import Button from "./Button";
import Content from "./Content";
import "./card.css";
const card = () => {
  return (
    <>
      {/* RUBBY ON RAILS */}
      <div className="cardContainer">
        <div className="cbtnWrapper">
          <Cname course={"full stack ruby on rails"} />
          <Button />
        </div>
        <hr></hr>
        <Content
          content={
            "This track takes you through our entire Ruby on Rails curriculum. You'll learn everything you need to know to create beautiful responsive websites from scratch. This is our default track. If you do not know where to start, select this track."
          }
        />
      </div>
      {/* JAVA SCRIPTS */}
      <div className="cardContainer">
        <div className="cbtnWrapper">
          <Cname course={"FULL STACK JAVASCRIPT"} />
          <Button />
        </div>
        <hr></hr>
        <Content
          content={
            "This track takes you through our entire JavaScript curriculum. You'll learn everything you need to know to create beautiful responsive websites from scratch using JavaScript and NodeJs."
          }
        />
      </div>
      {/* FRONT END DEVELOPEMNT */}
      <div className="cardContainer">
        <div className="cbtnWrapper">
          <Cname course={"front end only"} />
          <Button />
        </div>
        <hr></hr>
        <Content
          content={
            "This track takes you through all of the front-end content in our curriculum. You'll learn HTML, CSS and JavaScript, but you will not encounter any Ruby or Rails."
          }
        />
      </div>
    </>
  );
};

export default card;
