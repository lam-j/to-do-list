import React, { useState, useEffect } from "react";

export default function Time() {
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);
  const [displayFull, setDisplayFull] = useState(true);

  function getFullTime() {
    const fullTime = new Date().toLocaleTimeString();
    setTime(fullTime);
  }

  function getShortTime() {
    const shortTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
    setTime(shortTime);
  }

  function handleClick() {
    setDisplayFull(!displayFull);
    console.log(displayFull);
  }

  setInterval(displayFull ? getFullTime : getShortTime, 1000);

  return (
    <div className="time-container" onClick={handleClick}>
      <h1>{time}</h1>
    </div>
  );
}
