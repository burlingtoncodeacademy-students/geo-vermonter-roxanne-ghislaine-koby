import { MapContainer, TileLayer, Polygon, Marker, Polyline } from "react-leaflet";
import borderData from "../data/border";
import '../styles/Map.css'
// import App from '../App.js'

// Rox added lines 6-10 after Julie's workshop (commenting out for now):
// //necessary imports from leaflet:
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// //importing leaflet-pip:
// import leafletPip from "@mapbox/leaflet-pip";

function Map(props) {
  let vtOutline = borderData.geometry.coordinates[0].map(coords => [coords[1], coords[0]])

  console.log("hello from Map.js")
  console.log("props.zoom: ", props.zoom)
  console.log("props.center: ", props.center)
  console.log("[props.centerLat, props.centerLong]: ", [props.centerLat, props.centerLong])
  console.log("[props.randomLat, props.randomLong]: ", [props.randomLat, props.randomLong])
  

  return (
    <MapContainer
      center={[props.centerLat, props.centerLong]}
      zoom={props.zoom}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      zoomControl={false}
      touchZoom={false}
      style={{ height: "600px", width: "600px" }}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
      <Marker position={[props.randomLat, props.randomLong]} /> // calling in randomLat, randomLong from App.js. These start at the center of VT then become random within VT upon clicking Play.
      <Polygon
        positions={vtOutline}
        pathOptions={{ color: "orange", fillOpacity: 0 }}
      />
    </MapContainer>
  );
}

export default Map;
