import React from "react";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";

export default function Nav() {
  return (
    <div className="dropdown-container">
      <button className="nav-button">
        {<ArrowDropDownCircleOutlinedIcon style={{ fontSize: "3rem" }} />}
      </button>
      <div className="dropdown-content">
        <button className="drop-button">
          {<AccessTimeOutlinedIcon style={{ fontSize: "1.5rem" }} />}
        </button>
        <button className="drop-button">
          {<MusicNoteOutlinedIcon style={{ fontSize: "1.5rem" }} />}
        </button>
      </div>
    </div>
  );
}
