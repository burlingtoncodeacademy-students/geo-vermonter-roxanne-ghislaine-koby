import '../styles/GuessModal.css'
import VtCounties from './VtCounties'

function GuessModal(props) {

    function closeGuessModal(evt) {
        evt.preventDefault()
        props.setIsGuessModalOpen(false)
    }

    return (
        <>
        {props.isGuessModalOpen ? <div
            id="guess-modal"><div id="guess-modal-content">
                <VtCounties />
                <button id="close-guess-modal-button" onClick={closeGuessModal}>Close</button>
            </div>
        </div> : null}

        </>
    )
}

export default GuessModal