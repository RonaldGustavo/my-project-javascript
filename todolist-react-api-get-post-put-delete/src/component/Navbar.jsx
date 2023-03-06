import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <a href="/">Ronald Gustavo To Do List</a>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-item">
          <li className="navbar-link">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-link">
            <Link to="/adddata">Add data</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
