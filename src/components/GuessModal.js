import '../styles/GuessModal.css'

function GuessModal(props) {

    function closeGuessModal(evt) {
        evt.preventDefault()
        props.setIsGuessModalOpen(false)
    }

    return (
        <>
        {props.isGuessModalOpen ? <div
            id="guess-modal"><div id="guess-modal-content">
                This modal should have a dropdown list of VT counties (and know which is the correct one). The user will pick one. If correct, they are alerted that they win, the modal closes, and the info box populates with the correct info. If incorrect, they are alerted that they're wrong, the modal closes, and 10 points are subtracted from their score. 
                <button id="close-guess-modal-button" onClick={closeGuessModal}>Close</button>
            </div>
        </div> : null}

        </>
    )
}

export default GuessModal