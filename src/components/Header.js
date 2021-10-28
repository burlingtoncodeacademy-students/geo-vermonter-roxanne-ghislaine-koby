// stuff needed to be imported into the header file //
import React from "react";
import './header.css'

// At the top of the page , the nav selector and placeholders for
// "about" and "high scores"... maybe make "about a modal from the navbar"

function NavBar() {
    return(
        <div
        class = "geo-game-info" >
            <h1> Geo-Vermonter Project </h1>

            <p class = "about"> 
                You've been dropped into a random point,
                somewhere in Vermont. You have an initial
                score of 100, that decreases by 1 point
                each time you make a move. To guess, click
                the "Guess" button and choose a county from
                the drop-down menu.
            </p>

            <h4 placeholder = "???"> 
                ${Latitude} </h4>

            <h4 placeholder = "???"> 
                ${Longitude} </h4>
                
            <h4 placeholder = "???"> 
                ${County} </h4>
                
            <h4 placeholder = "???"> 
                ${Town} </h4>

            <h4 placeholder = "???" >
                ${highScore} </h4>

        </div>
    );
}

export default NavBar;