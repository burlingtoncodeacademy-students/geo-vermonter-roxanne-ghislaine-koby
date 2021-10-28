
import React, { useState } from 'react'

import Map from './components/Map'
import './App.css';

function App() {

  const [center, setCenter] = useState([43.88, -72.7317])

  return (
    <div>
      <Map center={center} />
    </div>
  );
}

export default App;


/// class-based components right now bc it makes more sense to me//
//will most likely change to function based//



// Defining what the starting state IS //
//might need to add more if I missed something//

useState = {
  gameStart: false,
  lat: null,
  long: null,
  startLat: null,
  startLong: null,
  playerGuess: false,
  playerQuit: false,
  countyInfo: null,
  townInfo: null,
  zoom: 8,
  gameZoom: 18,
  score: 100,
  modal: false,
  info: null,
  };
//}






