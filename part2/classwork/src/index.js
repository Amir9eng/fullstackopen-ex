import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

axios.get("http://localhost:3002/notes").then((response) => {
  const notes = response.data;
});

ReactDOM.render(<App />, document.getElementById("root"));
