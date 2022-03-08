import React from "react";

export default function Item(props) {
  return (
    <div className="item">
      <li>{props.text}</li>
    </div>
  );
}
