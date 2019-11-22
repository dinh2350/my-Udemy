import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

export default function NavBar() {
  return (
    <div className="sources__navBar">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Business
          </NavLink>
        </li>
        <li>
          <NavLink to="/design">Design</NavLink>
        </li>
        <li>
          <NavLink to="/photography">Photography</NavLink>
        </li>
        <li>
          <NavLink to="/development">Development</NavLink>
        </li>
        <li>
          <NavLink to="/marketing">Marketing</NavLink>
        </li>
        <li>
          <NavLink to="/it">It&Software</NavLink>
        </li>
        <li>
          <NavLink to="/personal">Personal Development</NavLink>
        </li>
      </ul>
    </div>
  );
}
