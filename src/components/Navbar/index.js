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
          <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
            <Link className="navbar-brand" to="/">
              Clicky Game
          </Link>
          <div className="navbar-brand">
            Click Image To Begin!
          </div>
          <div className="navbar-brand">
          {context.highscore} | {context.currentscore}
          </div>
            {/* <a className="navbar-brand">Click Image to Begin!</a>
            <a className="navbar-brand"> {context.highscore} | {context.currentscore}</a> */}
           
        
          </nav>
        )
      }}


    </Consumer>
  )
}

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/">
//         Clicky Game
//       </Link>
//       <div>
//         <ul className="navbar-nav">
//           <li className="nav-brand">
//             Click Image to Begin!
//           </li>
//           <li className="nav-brand">
//             {/* Score: State*/}
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

export default Navbar;
