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
        <input type="checkbox" onClick={strike} />
        <button
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          x
        </button>
      </div>
    </div>
  );
}
