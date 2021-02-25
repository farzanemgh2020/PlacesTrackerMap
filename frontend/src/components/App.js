import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import CustomMarker from './marker/CustomMarker';
import MarkerHolder from './marker/MarkerHolder';

export default class App extends React.Component {
  render() {
    return (
        <MapContainer center={[51.505, -0.09]}  zoom={13} id="map"  style={{width:'700px', height:'500px'}}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'  /> 
         <MarkerHolder /> 
         <CustomMarker  />
        </MapContainer>
      
    );
  }
}
