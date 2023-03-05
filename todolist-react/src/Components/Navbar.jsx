import React from "react";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <a href="/">Ronald Gustavo To Do List</a>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-item">
          <li className="navbar-link">
            <a href="/">Home</a>
          </li>
          <li className="navbar-link">
            <a href="#addData">Add</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
