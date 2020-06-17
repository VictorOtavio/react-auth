import React from "react";
import ReactDOM from "react-dom";

import "./assets/scss/styles.scss";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Header />
      <Main />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
