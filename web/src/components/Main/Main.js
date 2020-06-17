import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Main = function () {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <div>Register</div>
        </Route>
        <Route path="/">
          <div>Login</div>
          <Link to="/register">Não tenho login</Link>
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
