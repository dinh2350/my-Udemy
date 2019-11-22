import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Sthree = props => {
  return (
    <Switch>
      <Route exact path="/">
        <h2>1</h2>
      </Route>
      <Route path="/about">
        <h2>2</h2>
      </Route>
      <Route path="/dashboard">
        <h2>3</h2>
      </Route>
    </Switch>
  );
};

export default Sthree;
