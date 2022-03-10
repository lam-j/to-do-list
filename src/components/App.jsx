import React, { useState } from "react";
import Input from "./Input";
import ItemList from "./ItemList";
import Time from "./Time";
import ColorBar from "./ColorBar";
import Nav from "./Nav";

export default function App() {
  const [itemList, setItemList] = useState([]);

  function addItem(item) {
    if (item !== "") {
      setItemList((previousItems) => {
        return [...previousItems, item];
      });
    }
  }

  function deleteItem(id) {
    setItemList((previousItems) => {
      return previousItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="color-container">
        <ColorBar />
      </div>
      <div className="list-container">
        <div
          className="highlight"
          style={{ backgroundColor: document.body.style.backgroundColor }}
        ></div>
        <h1>To-Do</h1>
        <Input onAdd={addItem} />
        <ItemList onDelete={deleteItem} itemList={itemList} />
      </div>
      <div className="progress-container">
        <div className="progress-bar">
          <span></span>
        </div>
        %
      </div>
      <div className="nav-container">
        <Nav />
      </div>
      <div className="time-container">
        <Time />
      </div>
    </div>
  );
}
