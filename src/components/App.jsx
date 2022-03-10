import React, { useState } from "react";
import Input from "./Input";
import ItemList from "./ItemList";
import Time from "./Time";
import ColorBar from "./ColorBar";
import Nav from "./Nav";
import ProgressBar from "./ProgressBar";
import ListContainer from "./ListContainer";

export default function App() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="container">
        <ColorBar />
        <ListContainer />
        <ProgressBar />
        <Nav />
        <Time />
      </div>
      <footer>
        <p>{year} © lam-j on github </p>
      </footer>
    </>
  );
}
