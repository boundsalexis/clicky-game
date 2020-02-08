import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Consumer from "../../configContext.js";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => {
  return (
    <Consumer>
      {context => {
        return (
          <nav className="navbar navbar-expand-lg navbar-light  sticky">
            <ul>
            <li className="navbar-brand left"> <Link className="navbar-brand" to="/">
              Clicky Game
          </Link></li>
        
            <li className="navbar-brand center">
            Highscore: {context.highscore} | Score: {context.currentscore}
            </li>
            </ul>

           
        
          </nav>
        )
      }}


    </Consumer>
  )
}



export default Navbar;
