import React, { useState } from "react";

export default function Time() {
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(getTime, 1000);

  return <h1>{time}</h1>;
}
