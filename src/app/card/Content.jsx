import React from "react";

const Content = ({ content }) => {
  return (
    <div style={{ padding: 40 }}>
      <p
        style={{
          lineHeight: 2,
          wordSpacing: 3,
          color: "#838383",
          fontSize: "19px",
        }}
      >
        {content}
      </p>
    </div>
  );
};

export default Content;
