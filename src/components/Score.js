import '../styles/Score.css'
import {useState} from 'react'

function Score(props) {

    

    return(
        <div id="score-wrapper">
            Score: {props.score}
        </div>
    )
}

export default Score