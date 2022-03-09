import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";
import Input from "./Input";

export default function ItemList(props) {
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
    <>
      <ul>
        {/* {itemList.length === 0 && <p>all done! :)</p>} */}
        {itemList.map((item, index) => {
          let newKey = uuidv4();
          return (
            <Item key={newKey} id={index} text={item} onDelete={deleteItem} />
          );
        })}
      </ul>
    </>
  );
}
