// stuff needed to be imported into the header file //
import React from "react";
import '../styles/Header.css'

// At the top of the page , the nav selector and placeholders for
// "about" and "high scores"... maybe make "about a modal from the navbar"
// ROX: see NavBar.js

function Header() {
    return(
        <div
        className = "geo-game-info" >
            <h1> Geo-Vermonter Project </h1>

            {/* <h4 placeholder = "???"> 
                ${Latitude} </h4>

            <h4 placeholder = "???"> 
                ${Longitude} </h4>
                
            <h4 placeholder = "???"> 
                ${County} </h4>
                
            <h4 placeholder = "???"> 
                ${Town} </h4>

            <h4 placeholder = "???" >
                ${highScore} </h4> */}

        </div>
    );
}

export default Header;