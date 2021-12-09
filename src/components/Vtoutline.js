import { useState } from "react";
import { useEffect } from "react";
import Info from './src/components/Info';

// function checks county + city/town based on where the user's marker currently is located
function checkCounty(props) {
    const [countyData, setCountyData] = useState();

    useEffect (() => {
        if(countyData) {
            return false;
        } else {
            if(props.checkClose) {
                fetch(
                    'https://nominatim.openstreetmap.org/reverse?lat=${props.randomLat}&lon=${props.randomLong}&format=geoJSON&zoom[0-10'
                )
                .then((res) => res.json)
                .then((countycheckObj) => {
                    setCountyData(countycheckObj);
                });
            } else {
                return false;
            }
        }
    });

    //info-box should be updated after fetch 
    return (
    
        <div id="info-box">
        <div id="info-box-title">Location Information</div>

        <div className="info-box-item">
            Latitude: {countyData && countyData.lat}</div>

        <div className="info-box-item">
            Longitude: {countyData && countyData.lon}</div>

        <div className="info-box-item">
            Town/City: {
                (countyData && countyData.address.city) ||
                (countyData && countyData.address.town)}</div>

        <div className="info-box-item">
            County: {countyData && countyData.address.county}</div>
    </div>

    );

}
export default checkCounty