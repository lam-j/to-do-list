import React, { useState } from "react";
import Input from "./Input";
import ItemList from "./ItemList";
import Time from "./Time";
import ColorBar from "./ColorBar";
import Nav from "./Nav";

export default function App() {
  const [itemList, setItemList] = useState([]);

  // const [progress, setProgress] = useState(0);

  // function ProgressBar() {
  //   return (
  //     <div className="progress-container">
  //       <div className="progress-bar" style={{ width: progress }}>
  //         {progress + "%"}
  //       </div>
  //     </div>
  //   );
  // }

  // function updateBar() {}

  function addItem(item) {
    if (item !== "") {
      setItemList((previousItems) => {
        return [...previousItems, item];
      });
    }
    updateBar(itemList);
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
        <div className="progress-total">
          <div className="progress-bar"></div>
        </div>
        0%
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
