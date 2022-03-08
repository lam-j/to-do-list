import React, { useState } from "react";

export default function Item(props) {
  const [isComplete, setIsComplete] = useState(false);

  function strike() {
    setIsComplete(!isComplete);
  }

  return (
    <div classList="container">
      <div className="list-item">
        <li style={{ textDecorationLine: isComplete && "line-through" }}>
          {props.text}
        </li>
      </div>
      <div>
        <input type="checkbox" onClick={strike} />
        <button
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          deleteicon
        </button>
      </div>
    </div>
  );
}
