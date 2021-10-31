// imports
import { useState } from "react";
import Info from "./Info";
//import Info from "./Info";
//import NominatimSearch.tsx from '@terrestris/react-geo/dist/Field/NominatimSearch/NominatimSearch.tsx';

// Purpose of this file:
// User clicks "guess" button, then a modal pops-up & is displayed,
// The modal features a drop-down menu-list of vt counties.
// User selects the county they want to submit as their guess,
// User then 'clicks' the "guess" button to submit the selected county.

function VtCounties(props) {

    // variable assignments
    // user's current county that they are currently located in on map
    const [currentCounty, setCurrentCounty] = useState(null);
    // for county selected by user
    const [selectedCounty, setSelectedCounty] = useState('');
    // describes the county the user selected from the drop-down menu
    const [evaluateCounty, setEvaluateCounty] = useState('');
    // used to compare the fetched county & evaluate current county to selected county
    // to see if their guess was correct
    let compareCounty; 
    const [data, setData] = useState();
    //const [toggleButton, setToggleButton] = useState(true);
    let cancelButton = false;

    // Fxn for user to switch the county they selected
    // e.g. they chose the wrong one from drop-down menu
    function changeCountySelection(evt) {
        setSelectedCounty(evt.target.value);
        // fxn below will contain the actual county info (from the fetch)
        // checks user's guess against the actual county they are in
        // to see if they're the same county (correct) OR is user is wrong
        ActualCountyFetch();
    }

    // comment
    function submitCountyForm(evt) {
        //preventdef ensures page doesn't refresh
        evt.preventDefault();
        ActualCountyFetch();
        correctGuess();
    }

    // function w/ if/else statements to determine result of user's guess
    function correctGuess() {
        if (selectedCounty !== '') {
            // if user is wrong, alert message displayed and 10pts deducted from score
            if (selectedCounty !== compareCounty) {
                props.setScore(props.score - 10);
                alert("Wrong answer!");
                // else statement if user is correct
            } else {
                //(selectedCounty === compareCounty) // Rox commented this out as it was throwing an error (and as far as I can tell isn't necessary to have)
                alert("Correct answer! You WIN!");
            }
            // else statement if user tries to click guess without selecting a county
        } else {
            alert("Please select a county to guess.");
        }
    }

    // fxn to fetch the actual county data
    // used to compare user's guess to real data
    // determining if user's guess  is correct or wrong
    function ActualCountyFetch() {
        // fetch happens by pulling the county data from nominatim reverse API lookup
        // think I have to use the random generated lat+long coords &
        // pass them in as parameters to complete the reverse fetch??
        fetch(
            'https://nominatim.openstreetmap.org/reverse?lat=${props.randomLat}&lon=${props.randomLong}&format=geoJSON&zoom[0-10]'
        )
        // (fetch) ZOOM [0-10] includes county,state,county,city
        //zoom [0-18] would include additional details of suburbs, maj.& minor streets, and building
        //'format=geoJSON' might have to be 'format=json' (unsure)
        .then((res) => res.json())
        .then ((countydataobj) => {
            //countydataobj acts as merely an object placeholder
           
            setData(countydataobj);
        });

        // variable from line 23 is initialized below and
        // contains the data needed to check user's guess
        compareCounty = data && data.address.county
    }

    let info = (info)

    return (
        
        <div>
            // show ? marks as placeholder until user submits a guess 
            // 'info' = the info from info.js (the "location information")
            <Info
            County = {'?'}
            City = {'?'}
            Latitude = {'?'}
            Longitude = {'?'} />

            // if user submits a correct guesses
            <Info
            County = {compareCounty}
            City = {data && data.address.city}
            Latitude = {props.randomLat}
            Longitude = {props.randomLong} />

            <h4>
                {currentCounty
                ? 'You have chosen ${selectedCounty} as your guess'
                : 'Click the "guess" button to lock in your answer'}
                </h4>

            <form
            onSubmit={submitCountyForm}>
                <select
                name = "Select County"
                value = {selectedCounty}
                onChange = {changeCountySelection}>

                    <option value="Select County">Select a County</option>
                    <option value = "Addison"> ADDISON COUNTY </option>
                    <option value = "Bennington"> BENNINGTON COUNTY </option>
                    <option value = "Caledonia"> CALEDONIA COUNTY </option>
                    <option value = "Chittenden"> CHITTENDEN COUNTY </option>
                    <option value = "Essex"> ESSEX COUNTY </option>
                    <option value = "Franklin"> FRANKLIN COUNTY </option>
                    <option value = "Grand Isle"> GRAND ISLE COUNTY </option>
                    <option value = "Lamoille"> LAMOILLE COUNTY </option>
                    <option value = "Orange"> ORANGE COUNTY </option>
                    <option value = "Orleans"> ORLEANS COUNTY </option>
                    <option value = "Rutland"> RUTLAND COUNTY </option>
                    <option value = "Washington"> WASHINGTON COUNTY </option>
                    <option value = "Windham"> WINDHAM COUNTY </option>
                    <option value = "Windsor"> WINDSOR COUNTY </option>
                </select>
                <input
                type = "submit"
                value = "Guess" />

                <button
                onClick = {(evt) => {
                    cancelButton = true;
                    props.guessBox(false);
                }}></button>
                
            </form>
            
        </div>
    )
}

export default VtCounties;