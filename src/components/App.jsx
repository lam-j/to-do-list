import React, { useState } from "react";
import Input from "./Input";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [itemList, setItemList] = useState([]);

  function addItem(item) {
    setItemList((previousItems) => {
      return [...previousItems, item];
    });
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
      <div className="header">
        <h1>To Do List</h1>
      </div>
      <Input onAdd={addItem} />
      <ul>
        {itemList.length === 0 && <Item text="all done! :)" />}
        {itemList.map((item, index) => {
          let newKey = uuidv4();
          return (
            <Item key={newKey} id={index} text={item} onDelete={deleteItem} />
          );
        })}
      </ul>
    </div>
  );
}
