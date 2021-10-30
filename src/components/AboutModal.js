import '../styles/AboutModal.css'

function AboutModal(props) {


    return(
        <>
            {props.isAboutModalOpen ? <div id="about-modal"><div id="about-modal-content">You've been dropped into a random point, somewhere in Vermont. You have an initial score of 100, that decreases by 1 point each time you make a move. To guess, click the "Guess" button and choose a county from the drop-down menu.
            <button id="close-about-modal-button" onClick={props.closeAboutModal}>Close</button>
            </div></div> : null}
        
        </>
    )
}

export default AboutModal