import '../styles/Score.css'

// I guess once the score hits zero then the game would be over is the only thing that might be added here that I can think of

function Score(props) {

    return(
        <div id="score-wrapper">
            Score: {props.score}
        </div>
    )
}

export default Score