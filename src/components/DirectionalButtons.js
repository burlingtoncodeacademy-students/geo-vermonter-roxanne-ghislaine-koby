// The purpose of directional Buttons JS is to hold the buttons that allow
// the player to move on the map.

function DirectionalButtons ({
    travelNorth,
    travelEast,
    travelSouth,
    travelWest,
    backToDropPoint,
    buttonState,
})

// when the player 'clicks' one of the directional buttons (N,E,S,W),
// the marker will move in the direction that was chosen by player
{
return(
    <div>

        <button
        id="north-button"
        onClick= {travelNorth}
        disabled={!buttonState}>
            Go North
        </button>

        <button
        id="east-button"
        onClick={travelEast}
        disabled={!buttonState}>
            Go East
        </button>

        <button
        id="south-button"
        onClick= {travelSouth}
        disabled={!buttonState}>
            Go South
        </button>

        <button
        id="west-button"
        onClick= {travelWest}
        disabled={!buttonState}>
            Go West
        </button>

        <button
        id="back-to-drop-point"
        onClick= {backToDropPoint}
        disabled={!buttonState}>
            Back To Start
        </button>

    </div>

);
}

export default DirectionalButtons;

//in App.js, import DirectionalButtons from
// './src/components/DirectionalButtons.js'