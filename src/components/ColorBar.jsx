import React from "react";

export default function ColorBar() {
  function changeColor(color) {
    document.body.style.background = color;
  }

  return (
    <div className="color-container">
      <button
        className="color-button"
        style={{ backgroundColor: "#F0DEFD" }}
        onClick={() => {
          changeColor("#F0DEFD");
        }}
      ></button>
      <button
        className="color-button"
        style={{ backgroundColor: "#FDDFDF" }}
        onClick={() => {
          changeColor("#FDDFDF");
        }}
      ></button>
      <button
        className="color-button"
        style={{ backgroundColor: "#DEFDE0" }}
        onClick={() => {
          changeColor("#DEFDE0");
        }}
      ></button>
      <button
        className="color-button"
        style={{ backgroundColor: "#D6EEFE" }}
        onClick={() => {
          changeColor("#D6EEFE");
        }}
      ></button>
    </div>
  );
}
