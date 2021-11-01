function PlayButton(props) {

    return(
 
        <div>
            <button id="play-button" disabled={props.playButtonDisabled} onClick={props.handlePlayClick}>Play!</button>
        </div>
    )
}

export default PlayButton