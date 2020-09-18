import React from "react";

const Footer = () => {
  return (
    <footer style={{ width: "100%", backgroundColor: "#f6f6f6" }}>
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO CONTAINER */}
        <div style={{ display: "flex" }}>
          <img
            style={{ width: 40, height: 40 }}
            src="https://www.theodinproject.com/assets/odin-logo-2d729f16279e9fc3b58ce847eacf07f883bdfc95eb23bb5064ed59d36ef551d6.svg"
            alt="logo"
          />
          <h4 style={{ color: "#cc9543", fontSize: "12px" }}>
            THE ODIN PROJECT
          </h4>
        </div>
        {/* SOCIAL MEDIA CONTAINER */}
        <div
          style={{
            fontSize: "10px",
            color: "#cc9543",
            display: "flex",
            margin: "0px 10px",

            alignItems: "center",
          }}
        >
          <p style={{ margin: " 0px 3px" }}>FB</p>
          <p style={{ margin: " 0px 3px" }}>TWITTER</p>
          <p style={{ margin: " 0px 3px" }}>INSTA</p>
        </div>
        {/* ABOUT FAQ BLOG CONTAINER */}
        <div style={{ color: "#797a7e", margin: "0px 5px", fontSize: "13px" }}>
          <p>About</p>
          <p>FAQ</p>
          <p>Blog</p>
        </div>
        {/* SUCCESS STORIES  CONTRIBUTE TERMS OF USE CONTAINER*/}
        <div
          style={{
            color: "#797a7e",
            margin: "0px 5px",
            fontSize: "13px",
            margin: "0px 5px",
          }}
        >
          <p>Success Stories</p>
          <p>Contribute</p>
          <p>Terms of use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
