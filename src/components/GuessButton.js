function GuessButton(props) {

    return(

        <div>
            <button id="guess-button" disabled={props.buttonDisabled}>Guess!</button>
        </div>
    )
}

export default GuessButton