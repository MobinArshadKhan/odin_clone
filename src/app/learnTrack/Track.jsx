import React from "react";

import "../learnTrack/learn.css";

const Track = () => {
  return (
    <div className="learnContainer">
      <h2 className="subheading">Learning Tracks</h2>
      <p className="p1">Select from our available learning tracks below</p>
      <p className="p2">
        Tracks are our way of offering multiple paths through our curriculum.
      </p>
      <p className="p3">
        You can change your track at any time, and your progress will not be
        lost. Many of our tracks share the same fundamental lessons, so any
        progress you've made on any shared courses or lessons will transfer
        between tracks.
      </p>
    </div>
  );
};

export default Track;
