import React, { useState } from "react";
import Map from "./components/Map";
import "./styles/App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MoveButtons from "./components/MoveButtons";
import Info from "./components/Info";
import PlayButton from "./components/PlayButton";
import Score from "./components/Score";
import BackToStart from "./components/BackToStart";
import GuessButton from "./components/GuessButton";
import GiveUpButton from "./components/GiveUpButton";

function App() {
  //variables for position of center map drop point
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [zoom, setZoom] = useState(8);

  //variables for generation of random lat & long
  const [randomLat, setRandomLat] = useState(43.88);
  const [randomLong, setRandomLong] = useState(-72.7317);

  // game variables (start, quit, score)
  const [score, setScore] = useState(100);
  const [startGame, setStartGame] = useState(true);
  const [quitGame, setQuitGame] = useState(false);

  // directional & movement variables
  // const [moveNorth, setMoveNorth] = useState(0);
  // const [moveEast, setMoveEast] = useState(false);
  // const [moveSouth, setMoveSouth] = useState(false);
  // const [moveWest, setMoveWest] = useState(false);
  // OR should it be like:
  // const [move, setMove] = useState({north}) // and then we'll have a handleMove function

  // A variable to enable buttons:
  const [buttonDisabled, setButtonDisabled] = useState(true) // Applied to all buttons, starting them out disabled. Then hitting Play changes true to false (making them not disabled). It works!
  const [playButtonDisabled, setPlayButtonDisabled] = useState(false)

  function handlePlayClick(evt) {
    evt.preventDefault()
    setButtonDisabled(false) // Enables buttons
    setPlayButtonDisabled(true) // Disables the play button

  }

  // Functions for when user clicks a directional button
  function handleMoveNorth(evt) {
    evt.preventDefault();
    // setGoNorth(goNorthCount +1); // not sure we need this since we have setCenter
    // setRandomLat(randomLat + 0.002);
    setCenter([randomLat + 0.002, randomLong]); // I wonder if we can remove the terms "randomLat" and "randomLong" and the "+ 0.002" will just be added to what's there. Cuz we don't actually want randomLat and randomLong to change
    setScore(score - 1);
  }

  function handleMoveSouth(evt) {
    evt.preventDefault();
    setScore(score - 1);
  }

  function handleMoveEast(evt) {
    evt.preventDefault();
    setScore(score - 1);
  }

  function handleMoveWest(evt) {
    evt.preventDefault();
    setScore(score - 1);
  }

  // function randomDrop places a drop point somewhere in VT within the borders
  function randomDrop() {
    // setting consts for the (min, max) for both lat & long
    const MinLat = 42.730315;
    const MaxLat = 45.005419;
    const MinLong = -73.35218;
    const MaxLong = -71.510225;

    let randomLat = null;
    let randomLong = null;

    // will need the border data that's stored in './components/data/border.js'
    // bc we want the random drop to be within the state border coords
  }

  // add variables under (score, start, quit)
  //variables for moving the player's marker
  //keeping v-names consistent with Directional Buttons JS

  return (
    <div>
      <Header />
      <NavBar />

      <div id="body-wrapper">
        <div className="body-item">
          <Map center={center} />
        </div>

        <div className="body-item" id="body-grid">
          <div className="body-grid-item">
            <PlayButton playButtonDisabled={playButtonDisabled} handlePlayClick={handlePlayClick}/>
          </div>
          <div className="body-grid-item">
            <Score score={score} />
          </div>
          <div className="body-grid-item">
            <MoveButtons
            buttonDisabled={buttonDisabled}
              handleMoveNorth={handleMoveNorth}
              handleMoveSouth={handleMoveSouth}
              handleMoveEast={handleMoveEast}
              handleMoveWest={handleMoveWest}
            />
          </div>
          <div className="body-grid-item">
            <Info />
          </div>
          <div className="body-grid-item">
            <BackToStart buttonDisabled={buttonDisabled}/>
          </div>
          <div className="body-grid-item">
            <GiveUpButton  buttonDisabled={buttonDisabled}/>
          </div>
          <div className="body-grid-item">
            <GuessButton  buttonDisabled={buttonDisabled}/>
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
