import React from "react";
import ReactDOM from "react-dom";

import "./assets/scss/styles.scss";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
