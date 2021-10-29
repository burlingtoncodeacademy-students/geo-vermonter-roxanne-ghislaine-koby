function GiveUpButton(props) {

    return(

        <div>
            <button id="give-up-button" disabled={props.buttonDisabled}>I Give Up!</button>
        </div>
    )
}

export default GiveUpButton