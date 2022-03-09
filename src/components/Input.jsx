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

  return (
    <div className="list-input">
      <input
        onChange={handleChange}
        placeholder="thing to do!"
        type="text"
        value={inputText}
      />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}
