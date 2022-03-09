import React, { useState, useEffect } from "react";
import Input from "./Input";
import Item from "./Item";
import ItemList from "./ItemList";
import Time from "./Time";

export default function App() {
  return (
    <div className="container">
      <div className="time-container">
        <Time />
      </div>
      <div className="list-container">
        <div className="list-title">
          <h1>To-Do</h1>
        </div>
        <Input />
        <ItemList />
      </div>
    </div>
  );
}
