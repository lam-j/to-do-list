import React, { useState } from "react";

export default function Item(props) {
  const [isComplete, setIsComplete] = useState(false);

  function strike() {
    setIsComplete(!isComplete);
  }

  return (
    <div className="list-item">
      <div className="item-text">
        <li style={{ textDecorationLine: isComplete && "line-through" }}>
          {props.text}
        </li>
      </div>
      <div className="item-buttons">
        <button
          onClick={strike}
          style={{ borderColor: document.body.style.backgroundColor }}
        >
          ✓
        </button>
        <button
          onClick={() => {
            props.onDelete(props.id);
          }}
          style={{ borderColor: document.body.style.backgroundColor }}
        >
          x
        </button>
      </div>
    </div>
  );
}
