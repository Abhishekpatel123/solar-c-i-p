import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// -- scss
import "./assets/scss/_global.scss";
import "./assets/scss/_typography.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);