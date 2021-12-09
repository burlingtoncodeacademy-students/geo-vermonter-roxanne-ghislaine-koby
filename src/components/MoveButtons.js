import "../styles/MoveButtons.css";
import { useState } from "react";

function MoveButtons(props) {
  function handleMoveNorth(evt) {
    evt.preventDefault();
    // props.centerLat += 0.002
    // props.setScore(props.score - 1);
    props.setMoveNorthCount(props.moveNorthCount + 1);
    props.setRandomLat(props.randomLat + 0.050);
    props.setCenter([props.randomLat + 0.050, props.randomLong]);
    props.setScore(props.score - 1);
  }

  function handleMoveSouth(evt) {
    evt.preventDefault();
    // props.centerLat -= 0.002;
    // props.setScore(props.score - 1);
    props.setMoveSouthCount(props.moveSouthCount + 1);
    props.setRandomLat(props.randomLat - 0.050);
    props.setCenter([props.randomLat - 0.050, props.randomLong]);
    props.setScore(props.score - 1);
  }

  function handleMoveEast(evt) {
    evt.preventDefault();
    // props.centerLong += 0.002;
    // props.setScore(props.score - 1);
    props.setMoveEastCount(props.moveEastCount + 1);
    props.setRandomLong(props.randomLong + 0.050);
    props.setCenter([props.randomLat, props.randomLong + 0.050]);
    props.setScore(props.score - 1);
  }

  function handleMoveWest(evt) {
    evt.preventDefault();
    // props.centerLong -= 0.002;
    // props.setScore(props.score - 1);
    props.setMoveWestCount(props.moveWestCount + 1);
    props.setRandomLong(props.randomLong - 0.050);
    props.setCenter([props.randomLat, props.randomLong - 0.050]);
    props.setScore(props.score - 1);
  }

  return (
    <div id="move-buttons-container">
      <div className="move-buttons-item"></div>
      <div className="move-buttons-item">
        <button
          className="direction"
          direction="north"
          onClick={handleMoveNorth}
          disabled={props.buttonDisabled}
        >
          Go North
        </button>
      </div>
      <div className="move-buttons-item"></div>
      <div className="move-buttons-item">
        <button
          className="direction"
          direction="west"
          onClick={handleMoveWest}
          disabled={props.buttonDisabled}
        >
          Go West
        </button>
      </div>
      <div className="move-buttons-item">
        <img
          src="https://media.istockphoto.com/vectors/compass-vector-id503891738?k=20&m=503891738&s=612x612&w=0&h=6cMzdwd0uf4l52G279_4eaM3IojFw2IeMjsgpCGVGnc="
          width="60px"
        />
      </div>
      <div className="move-buttons-item">
        <button
          className="direction"
          direction="east"
          onClick={handleMoveEast}
          disabled={props.buttonDisabled}
        >
          Go East
        </button>
      </div>
      <div className="move-buttons-item"></div>
      <div className="move-buttons-item">
        <button
          className="direction"
          direction="south"
          onClick={handleMoveSouth}
          disabled={props.buttonDisabled}
        >
          Go South
        </button>
      </div>
    </div>
  );
}

export default MoveButtons;
