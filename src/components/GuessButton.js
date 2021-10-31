function GuessButton(props) {

    return(

        <div>
            <button id="guess-button" disabled={props.buttonDisabled} onClick={props.openGuessModal}>Guess!</button>
        </div>
    )
}

export default GuessButton;
