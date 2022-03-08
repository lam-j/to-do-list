import React from "react";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>To Do List</h1>
      </div>
      <div className="input">
        <input placeholder="thing to do!"></input>
        <button>+</button>
      </div>
      <ul>
        <div className="item">
          <li>add something!</li>
        </div>
      </ul>
    </div>
  );
}
