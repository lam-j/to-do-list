import React, { useState, useMemo, useEffect } from "react";

export default function Item(props) {
  const [isComplete, setIsComplete] = useState(false);
  // const [strikeCount, setStrikeCount] = useState(0);

  // var strikeCount = useMemo(() => return )

  function strike() {
    setIsComplete(!isComplete);
    if (isComplete) {
      // setStrikeCount(strikeCount + 1);
      setIsComplete(!isComplete);
    }
    console.log(strikeCount);
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
          onClick={() => {
            strike();
          }}
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
