import React, { useState } from "react";
import leafletPip from 'leaflet-pip';
import L from 'leaflet';
import borderData from "./data/border";
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
import AboutModal from "./components/AboutModal";
import GuessModal from "./components/GuessModal";
//import VtCounties from "./components/VtCounties"
//LOL make sure we change 83 & 84 "fetch shit "

function App() {
  //variables for generation of random lat & long; starting at center of VT, then will change to a random point 
  const [randomLat, setRandomLat] = useState(43.88);
  const [randomLong, setRandomLong] = useState(-72.7317);

  //variables for position of center map drop point (starting at center of VT)
  let centerLat = 43.88
  let centerLong = -72.7317
  let zoom = 8
  const [center, setCenter] = useState([43.88, -72.7317]);
  //const [zoom, setZoom] = useState(8);

  

  // game variables (start, quit, score)
  const [score, setScore] = useState(100);
  const [startGame, setStartGame] = useState(true);
  const [quitGame, setQuitGame] = useState(false);

  // A variable to enable buttons:
  const [buttonDisabled, setButtonDisabled] = useState(true); // Applied to all buttons, starting them out disabled. Then hitting Play changes true to false (making them not disabled). It works!
  const [playButtonDisabled, setPlayButtonDisabled] = useState(false);

  // Variables for Info box
  const [latDisplay, setLatDisplay] = useState("?");
  const [longDisplay, setLongDisplay] = useState("?");
  const [townDisplay, setTownDisplay] = useState("?");
  const [countyDisplay, setCountyDisplay] = useState("?");

  // variables to show/hide modals (starting out hidden):
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isGuessModalOpen, setIsGuessModalOpen] = useState(false);

  // functions to open modals:
  function openAboutModal(evt) {
    evt.preventDefault();
    setIsAboutModalOpen(true);
  }

  function openGuessModal(evt) {
    evt.preventDefault();
    setIsGuessModalOpen(true);
  }

  // Function for when user clicks Play button
  function handlePlayClick(evt) {
    evt.preventDefault();
    setButtonDisabled(false); // Enables buttons
    setPlayButtonDisabled(true); // Disables the play button
    zoom = 18
    randomDrop(); // calling the randomDrop function to drop a pin in a random place in VT
  }

//   let randomLat=centerLat;
//  let randomLong=centerLong;

  // function randomDrop places a drop point somewhere in VT within the borders
  function randomDrop() {
    let layerLength = 0;
    const maxLat = 45.005419
    const minLat = 42.730315
    const maxLong = -71.510225
    const minLong = -73.35218

    
    
    // Here's the function for a random lat and long between min and max coordinates. doesn't yet check that it's within the polygon. G is working on that
   let vtBorderData = L.geoJSON(borderData);
   //while loop below ensures drop point is confined to inside VT
   while(layerLength !== 1){
    setRandomLat(Math.random() * (maxLat - minLat) + minLat);
    setRandomLong(Math.random() * (maxLong - minLong) + minLong);
    //  setRandomLat(Math.random() * (MaxLat - MinLat) + MinLat)
    // setRandomLong(Math.random() * (MaxLong - MinLong) + MinLong)
    //since VT is polygon shaped state & leaflet-pip = a library for checking if a point is inside a polygon,
    //it checks if the random lat/long coords are within vt border
    layerLength = leafletPip.pointInLayer(
      [randomLong, randomLat], vtBorderData).length
   }
    //un-comment lines after test to re-test w/ lines
    
    console.log("[randomLat, randomLong] in randomDrop fxn: ", [randomLat, randomLong])
    setCenter([randomLat, randomLong]); // this should make the map center around the random lat and long...doesn't yet
    centerLat = randomLat
    centerLong = randomLong
    setRandomLat(randomLat);
    setRandomLong(randomLong);
    setCenter([randomLat, randomLong]);
    // setZoom(18); // should set zoom level to 18...but not yet happening

    // will need the border data that's stored in './components/data/border.js'
    // bc we want the random drop to be within the state border coords
  }
///////////////////////////////////////////////////////////

 // variable names for user moving their point on the map
//reference comment about using "count" & why it's helpful for backtracking steps/moves
const [moveNorthCount, setMoveNorthCount] = useState(0);
const [moveEastCount, setMoveEastCount] = useState(0);
const [moveSouthCount, setMoveSouthCount] = useState(0);
const [moveWestCount, setMoveWestCount] = useState(0);

// FUNCTIONS TO MOVE ON MAP (gmbl setup)- just the way it makes sense to me

function moveNorth() {
  // setMoveNorthCount(moveNorthCount + 1);
  // setRandomLat(randomLat + 0.002);
  // setCenter([randomLat + 0.002, randomLong]);
  // setScore(score - 1);
}

function moveEast() {
  setMoveEastCount(moveEastCount + 1);
  setRandomLong(randomLong + 0.002);
  setCenter([randomLat, randomLong + 0.002]);
  setScore(score - 1);
}

function moveSouth() {
  setMoveSouthCount(moveSouthCount + 1);
  setRandomLat(randomLat - 0.002);
  setCenter([randomLat - 0.002, randomLong]);
  setScore(score - 1);
}

function moveWest() {
  setMoveWestCount(moveWestCount + 1);
  setRandomLong(randomLong - 0.002);
  setCenter([randomLat, randomLong - 0.002]);
  setScore(score - 1);
}
//by using this function set up for user movement we can target
//all of the things we need to change in 1 simple function

//to reference these functions, we would need something in "directionalButtons"
// where we can import these functions, something like this:

{/* <DirectionalButtons
goNorth={moveNorth}
goEast={moveEast}
goSouth={moveSouth}
goWest={moveWest} /> */}


//but earlier on before the move functions (or after i guess it doesnt matter)
// this is an exmaple of how i would use these 'count' variables to retrace moves
// therefore, returning the player to start

// function backToStart() {
//     satRandomLat(randomLat + moveNorthCount * 0.002 - moveSouthCount * 0.002);
//     setRandonLong(randomLong + moveEastCount * 0.002 - moveWestCount * 0.002);
// //     // this accounts for all of the moves made since each move (in every direction) was 0.002
//     setCenter([randomLat + moveNorthCount * 0.002 - moveSouthCount * 0.002,
//     randomLong + moveEastCount * 0.002 - moveWestCount * 0.002,
//     ]);
//     // then we basically 'reset' all the directional moveCounts to 0
//     // since the user wants to go back to start
//     // and after each move, the 'count' variables will 
//     // start keeping track again
//     setMoveNorthCount(0);
//     setMoveEastCount(0);
//     setMoveWestCount(0);
//     setMoveSouthCount(0);
// }



////////////////////////////////////////////////////////////////////
  // function for when 'I Give Up' button is clicked:
  function handleGiveUpClick(evt) {
    evt.preventDefault();
    setLatDisplay(randomLat);
    setLongDisplay(randomLong);
    setTownDisplay("fetch shit");
    setCountyDisplay("fetch shit");
    setButtonDisabled(true); // Disables buttons
    setPlayButtonDisabled(false); // Enables Play button
  }

  // function for when 'Back to Start' button is clicked:
  // map center should move back to the original place (at randomLat, randomLong)
  function handleBackToStartClick(evt) {
    evt.preventDefault();
  //  setCenter([randomLat, randomLong]);
  setRandomLat(randomLat + moveNorthCount * 0.002 - moveSouthCount * 0.002);
  setRandomLong(randomLong + moveEastCount * 0.002 - moveWestCount * 0.002);
//     // this accounts for all of the moves made since each move (in every direction) was 0.002
  setCenter([randomLat + moveNorthCount * 0.002 - moveSouthCount * 0.002,
  randomLong + moveEastCount * 0.002 - moveWestCount * 0.002,
  ]);
//     // then we basically 'reset' all the directional moveCounts to 0
//     // since the user wants to go back to start
//     // and after each move, the 'count' variables will 
//     // start keeping track again
  setMoveNorthCount(0);
  setMoveEastCount(0);
  setMoveWestCount(0);
  setMoveSouthCount(0);

  }

  // add variables under (score, start, quit)
  //variables for moving the player's marker
  //keeping v-names consistent with Directional Buttons JS

  return (
    <div>
      <Header />
      <AboutModal
        isAboutModalOpen={isAboutModalOpen}
        setIsAboutModalOpen={setIsAboutModalOpen}
      />
      <GuessModal
        isGuessModalOpen={isGuessModalOpen}
        setIsGuessModalOpen={setIsGuessModalOpen}
      />
      <NavBar openAboutModal={openAboutModal} />

      <div id="body-wrapper">
        <div className="body-item">
          <Map
            center={center}
            centerLat={centerLat}
            centerLong={centerLong}
            zoom={zoom}
            randomLat={randomLat}
            randomLong={randomLong}
          />
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
              centerLat={centerLat}
              centerLong={centerLong}
              score={score}
              setScore={setScore}
              setRandomLat={setRandomLat}
              setMoveNorthCount={setMoveNorthCount}
              randomLat={randomLat}
              randomLong={randomLong}
              moveNorthCount={moveNorthCount}
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
            <BackToStart
              buttonDisabled={buttonDisabled}
              handleBackToStartClick={handleBackToStartClick}
            />
          </div>
          <div className="body-grid-item">
            <GiveUpButton
              buttonDisabled={buttonDisabled}
              handleGiveUpClick={handleGiveUpClick}
            />
          </div>
          <div className="body-grid-item">
            <GuessButton
              buttonDisabled={buttonDisabled}
              openGuessModal={openGuessModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

