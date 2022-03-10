import React, { useState } from "react";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import MusicOffOutlinedIcon from "@mui/icons-material/MusicOffOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";

export default function Nav() {
  const [playMusic, setPlayMusic] = useState(true);
  const [lightMode, setLightMode] = useState(true);

  function changeMode() {
    setLightMode(!lightMode);
    if (!lightMode) {
      document.body.style.background = "#3f3e3e";
    } else {
      document.body.style.background = "#d6eefe";
    }
  }

  return (
    <div className="nav-container">
      <div className="dropdown-container">
        <button className="nav-button">
          {<ArrowDropDownCircleOutlinedIcon style={{ fontSize: "3rem" }} />}
        </button>
        <div className="dropdown-content">
          <button
            className="drop-button"
            onClick={() => {
              changeMode();
            }}
          >
            {!lightMode && (
              <LightModeOutlinedIcon style={{ fontSize: "1.5rem" }} />
            )}
            {lightMode && (
              <BedtimeOutlinedIcon style={{ fontSize: "1.5rem" }} />
            )}
          </button>
          <button
            className="drop-button"
            onClick={() => {
              setPlayMusic(!playMusic);
            }}
          >
            {playMusic && (
              <MusicNoteOutlinedIcon style={{ fontSize: "1.5rem" }} />
            )}
            {!playMusic && (
              <MusicOffOutlinedIcon style={{ fontSize: "1.5rem" }} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
