import React from "react";
import "../App.css";

export const InfoRect = ({ text, top, left }) => {
  const containerStyle = {
    position: "absolute",
    left: `${left}px`,
    top: `${top}px`,
    zIndex: 999,
  };
  return (
    <div style={containerStyle}>
      <div className="rect">
        <span className="info-text">{text}</span>
      </div>
      <div className="line"></div>
      <div className="endcap"></div>
    </div>
  );
};
