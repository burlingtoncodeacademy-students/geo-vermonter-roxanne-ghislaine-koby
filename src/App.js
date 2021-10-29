import React, { useState } from "react";
import Map from "./components/Map";
import "./styles/App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MoveButtons from "./components/MoveButtons";
import Info from "./components/Info";
import Buttons from "./components/Buttons"
import Score from "./components/Score"

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
  const [moveNorth, setMoveNorth] = useState(0);
  // const [moveEast, setMoveEast] = useState(false);
  // const [moveSouth, setMoveSouth] = useState(false);
  // const [moveWest, setMoveWest] = useState(false);
  // OR should it be like: 
  // const [move, setMove] = useState({north}) // and then we'll have a handleMove function

  function handleMoveNorth(evt) {
    evt.preventDefault()
  //setMoveNorth(moveNorth+.002)
  console.log("hi from handleMoveNorth")
  setScore(score-1)
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
          <Score score={score}/>
          </div>
          <div className="body-grid-item">
          <Buttons/>
          </div>
          <div className="body-grid-item">
          <MoveButtons handleMoveNorth={handleMoveNorth}/>
          </div>
          <div className="body-grid-item">
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


// fxn GoNorth () {
// setGoNorth(goNorthCount +1);
// setRandomLat(randomLat + 0.002);
// setCenter([randomLat + 0.002, randomLong]);
// setScore(score-1);
// }
