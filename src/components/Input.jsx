import React, { useState } from "react";
import InputButton from "./InputButton";

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
      <input onChange={handleChange} type="text" value={inputText} />
      <InputButton onAdd={addItem} />
    </div>
  );
}
