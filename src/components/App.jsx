import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import Input from "./Input";
// import Item from "./Item";
import ItemList from "./ItemList";
import Time from "./Time";

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
      <div className="time-container">
        <Time />
      </div>
      <div className="list-container">
        <div className="list-title">
          <h1>To-Do</h1>
        </div>
        <Input onAdd={addItem} />
        <ItemList onDelete={deleteItem} itemList={itemList} />
      </div>
    </div>
  );
}
