import React from "react";
import { Map, GoogleApiWrapper, HeatMap, } from "google-maps-react";
import "./index.css";
var mapStyles = {
  width: '60%',
  height: '100%'
};

export class MapContainer extends React.Component {
  render() {



    const gradient = [
      "rgba(0, 255, 255, 0)",
      "rgba(0, 255, 255, 1)",
      "rgba(0, 191, 255, 1)",
      "rgba(0, 127, 255, 1)",
      "rgba(0, 63, 255, 1)",
      "rgba(0, 0, 255, 1)",
      "rgba(0, 0, 223, 1)",
      "rgba(0, 0, 191, 1)",
      "rgba(0, 0, 159, 1)",
      "rgba(0, 0, 127, 1)",
      "rgba(63, 0, 91, 1)",
      "rgba(127, 0, 63, 1)",
      "rgba(191, 0, 31, 1)",
      "rgba(255, 0, 0, 1)"
    ];
    return (

      <div className="map-container">
        <div id="chartone">

        </div>
        <div id="charttwo">

        </div>
        <Map
          google={this.props.google}
          className={"map"}
          zoom={4}
          initialCenter={this.props.center}
          onReady={this.handleMapReady}
          style={mapStyles}
        >
          <HeatMap
            gradient={gradient}
            positions={this.props.data}
            opacity={.4}
            style={mapStyles}
            radius={2}




          />

        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDpG-NeL-XGYAduQul2JenVr86HIPITEso",
  libraries: ["visualization"]
})(MapContainer);
