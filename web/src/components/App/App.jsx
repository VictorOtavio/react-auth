import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "../../assets/scss/styles.scss";

const App = function () {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
