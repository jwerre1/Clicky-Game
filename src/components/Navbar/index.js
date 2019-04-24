import React from "react";
import "./style.css";


function Navbar(props) {
    return (
        <nav className="navbar sticky-top navbar-light bg-primary">
            <span className="nav-text brand text-center">
                Clicky Game
                </span>
            <span className={props.message === ("You guessed correctly!" || "You won! Click an image to play again!") ? "nav-text text-center text-success" : "nav-text text-center"}>
            
                {props.message}
            </span>
            <span className="nav-text text-center">
                Score: {props.counter} | High Score: {props.topscore}
            </span>
        </nav>

    );
}

export default Navbar;