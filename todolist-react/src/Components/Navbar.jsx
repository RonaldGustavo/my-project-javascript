import React from "react";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">Ronald Gustavo To Do List</div>
      <div className="navbar-menu">
        <ul className="navbar-item">
          <li className="navbar-link">
            <a href="../App.js">Home</a>
          </li>
          <li className="navbar-link">
            <a href="Adddata.js">Add</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
