import React from "react";
import "./App.css";
import HeaderTemplate from "./templates/Header";
import FeedTemplate from "./templates/Feed";
import api from "./config/api";

function App() {
  return (
    <div className="App">
      <HeaderTemplate></HeaderTemplate>
      <FeedTemplate></FeedTemplate>
    </div>
  );
}
console.log(api);
export default App;
