import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import Consumer from "../../configContext";
import Navbar from "../../components/Navbar";
<Navbar/>
const Game = props => {
    // let handleClick= (event) => {
    //     console.log(event.target);
    //     cotext.icons.setState();

    
    return (
        <Consumer>
            {context => {
                return (
                    <div className="container" >
                            {context.icons.map(element => (
                                <div onClick={ ()=> context.handleClick(`${element}`)} className="icons click-item shake" key={element} role="img" aria-label="click item" height="50px" width="50px" style={{ backgroundImage: `url(${element})` }}>
                                </div>
                            ))}
                    </div>
                )
            }}


        </Consumer>

    )

}


export default Game;
{/* <div class="icons click-item shake" role="img" aria-label="click item" width="50px" style="background-image: url(&quot;./images/doberman2.jpg&quot;);"></div>
<div role="img" aria-label="click item" class="click-item shake" style="background-image: url(&quot;/assets/images/mr.png&quot;);"></div> */}