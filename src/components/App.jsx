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
      <div className="list-container">
        <div className="list-title">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3208/3208676.png"
            alt=""
          />
          <h1>To-Do</h1>
        </div>
        <Input onAdd={addItem} />
        <ul>
          {itemList.length === 0 && <p>all done! :)</p>}
          {itemList.map((item, index) => {
            let newKey = uuidv4();
            return (
              <Item key={newKey} id={index} text={item} onDelete={deleteItem} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
