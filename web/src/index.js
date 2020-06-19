import React from "react";
import ReactDOM from "react-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "./components/App/App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate}>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
