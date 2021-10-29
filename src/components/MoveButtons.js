import "../styles/MoveButtons.css";
import App from "../App.js"
import {useState} from 'react'

function MoveButtons(props) {

  

    return (
    <div id="move-buttons-container">
      <div className="move-buttons-item"></div>
      <div className="move-buttons-item">
        <button className="direction" direction="north" onClick={props.handleMoveNorth}>
          Go North
        </button>
      </div>
      <div className="move-buttons-item"></div>
      <div className="move-buttons-item">
        <button className="direction" direction="west" onClick={props.handleMoveWest}> 
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
        <button className="direction" direction="east" onClick={props.handleMoveEast}>
          Go East
        </button>
      </div>
      <div className="move-buttons-item"></div>
      <div className="move-buttons-item">
        <button className="direction" direction="south" onClick={props.handleMoveSouth}>
          Go South
        </button>
      </div>
    </div>
  );
}

export default MoveButtons;
