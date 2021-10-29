import React, { useState } from "react";

import Map from "./components/Map";
import "./styles/App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MoveButtons from "./components/MoveButtons";
import Info from "./components/Info";
import Buttons from "./components/Buttons"
import Score from "./components/Score"
import PlayButton from "./components/PlayButton"

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);


// add variables under (score, start, quit)
//variables for moving the player's marker
//keeping v-names consistent with Directional Buttons JS

  return (
    <div>

      <Header />
      <NavBar />


      <div id="body-wrapper">

        <div class="body-item">
          <Map center={center} />
        </div>

        <div class="body-item" id="body-grid">
        <div class="body-grid-item">
          <PlayButton />
          </div>
          <div class="body-grid-item"></div>
          <div class="body-grid-item">
          <Score />
          </div>
          <div class="body-grid-item">
          <Buttons/>
          </div>
          <div class="body-grid-item">
          <MoveButtons/>
          </div>
          <div class="body-grid-item">
          <Info/>
          </div>

          </div>

      </div>









    </div>
  );
}

export default App;

/// class-based components right now bc it makes more sense to me//
//will most likely change to function based//

// Defining what the starting state IS //
//might need to add more if I missed something//

// ROX: I'm commenting out the following for now. it caused an error the way it's currently set up and I'm working on other pieces

// useState = {
//   gameStart: false,
//   lat: null,
//   long: null,
//   startLat: null,
//   startLong: null,
//   playerGuess: false,
//   playerQuit: false,
//   countyInfo: null,
//   townInfo: null,
//   zoom: 8,
//   gameZoom: 18,
//   score: 100,
//   modal: false,
//   info: null,
//   };
