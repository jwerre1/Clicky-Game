import React from "react";
import "./style.css";



function Navbar(props) {
    return (
        <nav className="navbar sticky-top navbar-light py-3">
            <span className="nav-text brand">
                Clicky Game
                </span>
            <span className={props.message === "You guessed correctly!" ? "nav-text font-italic text-success nav-message" : (props.message === "Game over. Click an image to start again." ? "nav-text redText nav-message" : (props.message === "You won! Click an image to play again!" ? "nav-text font-weight-bolder text-warning nav-message" : "nav-text nav-message"))}>
                {props.message}
            </span>
            <span className="nav-text">
                Score: {props.counter} | High Score: {props.topscore}
            </span>
        </nav>

    );
}

export default Navbar;