import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
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
            <div>Login</div>
            <Link to="/register">Não tenho login</Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
