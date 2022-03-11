import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderTemplate from "./templates/Header";
import FeedTemplate from "./templates/Feed";

function App() {
  return (
    <div className="App">
      <HeaderTemplate></HeaderTemplate>
      <FeedTemplate></FeedTemplate>
    </div>
  );
}

export default App;
