import React, { useState } from "react";
import Input from "./Input";
import ItemList from "./ItemList";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ListContainer() {
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

  function deleteAll() {
    setItemList([]);
  }
  return (
    <>
      <button className="delete-button" title="delete all" onClick={deleteAll}>
        <DeleteIcon style={{ fontSize: "2.5rem" }} />
      </button>
      <div className="list-container">
        <div
          className="highlight"
          style={{ backgroundColor: document.body.style.backgroundColor }}
        ></div>
        <h1>To-Do</h1>
        <Input onAdd={addItem} />
        <ItemList onDelete={deleteItem} itemList={itemList} />
      </div>
    </>
  );
}
