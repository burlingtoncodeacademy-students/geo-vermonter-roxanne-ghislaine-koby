import '../styles/Info.css'

// these will show as question marks until the player guesses correctly or gives up; then they'll show all the correct info the point.

function Info() {
    return(
        <div id="info-box">
            <div id="info-box-title">Location Information</div>
            <div className="info-box-item">Latitude: </div>
            <div className="info-box-item">Longitude: </div>
            <div className="info-box-item">Town/City: </div>
            <div className="info-box-item">County: </div>
        </div>
    )
}

export default Info