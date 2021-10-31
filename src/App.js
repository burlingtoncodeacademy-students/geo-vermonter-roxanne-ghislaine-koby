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
import AboutModal from "./components/AboutModal"
//import VtCounties from "./components/VtCounties"
//LOL make sure we change 83 & 84 "fetch shit "



function App() {
  //variables for position of center map drop point
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [zoom, setZoom] = useState(8);

  //variables for generation of random lat & long (starting at the center of VT before Play is clicked)
  const [randomLat, setRandomLat] = useState(43.88);
  const [randomLong, setRandomLong] = useState(-72.7317);

  // game variables (start, quit, score)
  const [score, setScore] = useState(100);
  const [startGame, setStartGame] = useState(true);
  const [quitGame, setQuitGame] = useState(false);

  // A variable to enable buttons:
  const [buttonDisabled, setButtonDisabled] = useState(true); // Applied to all buttons, starting them out disabled. Then hitting Play changes true to false (making them not disabled). It works!
  const [playButtonDisabled, setPlayButtonDisabled] = useState(false);

  // variable and functions to show/hide About Modal:
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false); // starts out NOT showing modal

  // Variables for Info box
  const [latDisplay, setLatDisplay] = useState("?");
  const [longDisplay, setLongDisplay] = useState("?");
  const [townDisplay, setTownDisplay] = useState("?");
  const [countyDisplay, setCountyDisplay] = useState("?");

  function openAboutModal(evt) {
    evt.preventDefault();
    setIsAboutModalOpen(true);
  }

  function closeAboutModal(evt) {
    evt.preventDefault();
    setIsAboutModalOpen(false);
  }

  // Function for when user clicks Play button
  function handlePlayClick(evt) {
    evt.preventDefault();
    setButtonDisabled(false); // Enables buttons
    setPlayButtonDisabled(true); // Disables the play button
    // This is also where a pin should be dropped in a random location
    randomDrop(); // calling the randomDrop function to drop a pin in a random place in VT
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

  // function for when 'I Give Up' button is clicked:
  function handleGiveUpClick(evt) {
    evt.preventDefault();
    setLatDisplay(randomLat)
    setLongDisplay(randomLong)
    setTownDisplay("fetch shit")
    setCountyDisplay("fetch shit")
  }

  // function for when 'Back to Start' button is clicked:
  // map center should move back to the original place (at randomLat, randomLong)
  function handleBackToStartClick(evt) {
    evt.preventDefault()
    setCenter([randomLat, randomLong])
  }

  // add variables under (score, start, quit)
  //variables for moving the player's marker
  //keeping v-names consistent with Directional Buttons JS

  return (
    <div>
      <Header />
      <AboutModal
        isAboutModalOpen={isAboutModalOpen}
        closeAboutModal={closeAboutModal}
      />
      <NavBar openAboutModal={openAboutModal} />

      <div id="body-wrapper">
        <div className="body-item">
          <Map center={center} />
        </div>

        <div className="body-item" id="body-grid">
          <div className="body-grid-item">
            <PlayButton
              playButtonDisabled={playButtonDisabled}
              handlePlayClick={handlePlayClick}
            />
          </div>
          <div className="body-grid-item">
            <Score score={score} />
          </div>
          <div className="body-grid-item">
            <MoveButtons
              buttonDisabled={buttonDisabled}
              center={center}
              setCenter={setCenter}
              score={score}
              setScore={setScore}
            />
          </div>
          <div className="body-grid-item">
            <Info
              latDisplay={latDisplay}
              longDisplay={longDisplay}
              townDisplay={townDisplay}
              countyDisplay={countyDisplay}
            />
          </div>
          <div className="body-grid-item">
            <BackToStart buttonDisabled={buttonDisabled} handleBackToStartClick={handleBackToStartClick}/>
          </div>
          <div className="body-grid-item">
            <GiveUpButton buttonDisabled={buttonDisabled} handleGiveUpClick={handleGiveUpClick}/>
          </div>
          <div className="body-grid-item">
            <GuessButton buttonDisabled={buttonDisabled} />
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
