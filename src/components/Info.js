import '../styles/Info.css'

// these will show as question marks until the player guesses correctly or gives up; then they'll show all the correct info the point.

function Info(props) {
    return(
        <div id="info-box">
            <div id="info-box-title">Location Information</div>
            <div className="info-box-item">Latitude: {props.latDisplay}</div>
            <div className="info-box-item">Longitude: {props.longDisplay}</div>
            <div className="info-box-item">Town/City: {props.townDisplay}</div>
            <div className="info-box-item">County: {props.countyDisplay}</div>
        </div>
    )
}

export default Info