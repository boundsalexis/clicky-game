import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Clicky Game
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-brand">
    Click Image to Begin!
          </li>
          <li className="nav-brand">
           {/* Score: State*/}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
