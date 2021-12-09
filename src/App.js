import React, { useState } from "react";
import leafletPip from "leaflet-pip";
import L from "leaflet";
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
import VtCounties from "./components/VtCounties";
import checkCounty from "./components/Vtoutline";
import { useEffect } from "react/cjs/react.development";

function App() {
  //variables for generation of random lat & long; starting at center of VT, then will change to a random point
  const [randomLat, setRandomLat] = useState(43.88);
  const [randomLong, setRandomLong] = useState(-72.7317);

  //variables for position of center map drop point (starting at center of VT)
  let centerLat = 43.88;
  let centerLong = -72.7317;
  let zoom = 8;
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

  // variables for county check
  const [vtCounties, setVtCounties] = useState(false);
  const [countyData, setCountyData] = useState(false);


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
    zoom = 18;
    // calling the randomDrop function to drop a pin in a random place in VT
    randomDrop(); 
  }

  // function randomDrop places a drop point somewhere in VT within the borders
  function randomDrop() {
    let layerLength = 0;
    const maxLat = 45.005419;
    const minLat = 42.730315;
    const maxLong = -71.510225;
    const minLong = -73.35218;

    // function for random lat and long between min and max coordinates
    let vtBorderData = L.geoJSON(borderData);

    //while loop below ensures drop point is confined to inside VT
    while (layerLength !== 1) {
      setRandomLat(Math.random() * (maxLat - minLat) + minLat);
      setRandomLong(Math.random() * (maxLong - minLong) + minLong);
      
      //it checks if the random lat/long coords are within vt border
      layerLength = leafletPip.pointInLayer(
        [randomLong, randomLat],
        vtBorderData
      ).length;
    }

    console.log("[randomLat, randomLong] in randomDrop fxn: ", [
      randomLat,
      randomLong,
    ]);

    // map centered around the random lat and long
    setCenter([randomLat, randomLong]); 
    centerLat = randomLat;
    centerLong = randomLong;
    setRandomLat(randomLat);
    setRandomLong(randomLong);
    setCenter([randomLat, randomLong]);
  }
 
  // variables for user moving their point on the map
  const [moveNorthCount, setMoveNorthCount] = useState(0);
  const [moveEastCount, setMoveEastCount] = useState(0);
  const [moveSouthCount, setMoveSouthCount] = useState(0);
  const [moveWestCount, setMoveWestCount] = useState(0);

  // function for when 'I Give Up' button is clicked:
  function handleGiveUpClick(evt) {
    evt.preventDefault();
    setLatDisplay({});
    setLongDisplay(randomLong);
    setTownDisplay("fetch stuff");
    setCountyDisplay("fetch stuff");
    setButtonDisabled(true); // Disables buttons
    setPlayButtonDisabled(false); // Enables Play button
  }

  // map center should move back to the original place (at randomLat, randomLong)
  function handleBackToStartClick(evt) {
    evt.preventDefault();
    // this accounts for all of the moves made since each move (in every direction) was 0.002
    setScore(100);
    setRandomLat(randomLat + moveNorthCount * 0.05 - moveSouthCount * 0.05);
    setRandomLong(randomLong + moveEastCount * 0.05 - moveWestCount * 0.05);
   
    setCenter([
      randomLat + moveNorthCount * 0.05 - moveSouthCount * 0.05,
      randomLong + moveEastCount * 0.05 - moveWestCount * 0.05,
    ]);
    
    // since the user wants to go back to start, after each move, the 'count' variables will start keeping track again
    setMoveNorthCount(0);
    setMoveEastCount(0);
    setMoveWestCount(0);
    setMoveSouthCount(0);
  }

  //variables for moving the player's marker
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
              setRandomLong={setRandomLong}
              setMoveNorthCount={setMoveNorthCount}
              randomLat={randomLat}
              randomLong={randomLong}
              moveNorthCount={moveNorthCount}
              moveSouthCount={moveSouthCount}
              moveEastCount={moveEastCount}
              moveWestCount={moveWestCount}
              setMoveSouthCount={setMoveSouthCount}
              setMoveEastCount={setMoveEastCount}
              setMoveWestCount={setMoveWestCount}
            />
          </div>
          <div className="body-grid-item">
            <Info
              Latitude={countyData && countyData.lat}
              Longitude={countyData && countyData.lon}
              Town={
                (countyData && countyData.address.city) ||
                (countyData && countyData.address.town)
              }
              County={countyData && countyData.address.county}
            />
          </div>
          <div className="body-grid-item">
            <BackToStart
              buttonDisabled={buttonDisabled}
              handleBackToStartClick={handleBackToStartClick}
              setScore={setScore}
              setRandomLat={setRandomLat}
              setRandomLong={setRandomLong}
              setCenter={setCenter}
              setMoveEastCount={setMoveEastCount}
              setMoveNorthCount={setMoveNorthCount}
              setMoveSouthCount={setMoveSouthCount}
              setMoveWestCount={setMoveWestCount}
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