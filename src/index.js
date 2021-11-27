import React from "react";
import ReactDOM from "react-dom";

let count = 0;

ReactDOM.render(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={()=> console.log("I got clicked.")}>+</button>
  </div>,
  document.getElementById("root")
);
