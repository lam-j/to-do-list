import React, { useState } from "react";
import Input from "./Input";
import Item from "./Item";

export default function App() {
  const [itemList, setItemList] = useState([]);

  function addItem(item) {
    setItemList((previous) => {
      return [...previous, item];
    });
  }

  return (
    <div className="container">
      <div className="header">
        <h1>To Do List</h1>
      </div>
      <Input onAdd={addItem} />
      <ul>
        {itemList.length === 0 && <Item text="add something!" />}
        {itemList.map((item) => {
          return <Item text={item} />;
        })}
      </ul>
    </div>
  );
}
