import React from "react";

export default function ProgressBar() {
  return (
    <div className="progress-container">
      <p>progress tracker</p>
      <div className="progress-bar">
        <span
          style={{ backgroundColor: document.body.style.backgroundColor }}
        ></span>
      </div>
      <p>80%</p>
    </div>
  );
}
