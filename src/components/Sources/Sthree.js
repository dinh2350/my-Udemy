import React from "react";
import NavBar from "./NavBar";
import ListSources from "./ListSources";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Sthree = props => {
  return (
    <Router>
      <div className="sources__sthree">
        <div className="sources__sthreeContent">
          <NavBar />
          <ListSources />
        </div>
      </div>
    </Router>
  );
};

export default Sthree;
