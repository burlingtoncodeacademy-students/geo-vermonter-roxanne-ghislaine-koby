// we'll need this consts to reference when player hits a moveButton
//the consts are made up of "moveNorth" E+S+W (which is self explanitory)
// the "Count" at the end is used to count the # of collections in an element
// so if they want to go back to start, these will be handy to have
// as im pretty sure it also tracks movement

import { useState } from "react/cjs/react.development";

//variable names for user moving their point on the map
//reference comment about using "count" & why it's helpful for backtracking steps/moves
const [moveNorthCount, setMoveNorthCount] = useState(0);
const [moveEastCount, setMoveEastCount] = useState(0);
const [moveSouthCount, setMoveSouthCount] = useState(0);
const [moveWestCount, setMoveWestCount] = useState(0);

// FUNCTIONS TO MOVE ON MAP (gmbl setup)- just the way it makes sense to me

function moveNorth() {
  setMoveNorthCount(moveNorthCount + 1);
  setRandomLat(randomLat + 0.002);
  setCenter([randomLat + 0.002, randomLong]);
  setScore(score - 1);
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

function backToStart() {
    satRandomLat(randomLat + moveNorthCount * 0.002 - moveSouthCount * 0.002);
    setRandonLong(randomLong + moveEastCount * 0.002 - moveWestCount * 0.002);
    // this accounts for all of the moves made since each move (in every direction) was 0.002
    setCenter([randomLat + moveNorthCount * 0.002 - moveSouthCount * 0.002,
    randomLong + moveEastCount * 0.002 - moveWestCount * 0.002,
    ]);
    // then we basically 'reset' all the directional moveCounts to 0
    // since the user wants to go back to start
    // and after each move, the 'count' variables will 
    // start keeping track again
    setMoveNorthCount(0);
    setMoveEastCount(0);
    setMoveWestCount(0);
    setMoveSouthCount(0);
}