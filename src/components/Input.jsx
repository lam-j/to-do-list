import React, { useState } from "react";

export default function Input(props) {
  /* two things to do:
      1. capture user input
      2. add it to an array 
          - the array will be in List.jsx
          - need to send user input to List.jsx 
  */
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newText = event.target.value;
    setInputText(newText);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      props.onAdd(inputText);
    }
  }

  return (
    <div className="list-input">
      <input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        id="itemInput"
        type="text"
        value={inputText}
      />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
        style={{ borderColor: document.body.style.backgroundColor }}
      >
        +
      </button>
    </div>
  );
}
