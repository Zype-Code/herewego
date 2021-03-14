import React from "react";
import { Map, GoogleApiWrapper, HeatMap, } from "google-maps-react";
import "./index.css";
var mapStyles = {
  width: '100%',
  height: '100%'

};

export class MapContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };


  }


  handleClick = () => {

    alert(' ')
    
    console.log(this.state);
    

    
  }
/* handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }*/

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

       {/**  <form onSubmit={this.handleSubmit}>
          <label>
            Pick a selected radius:
          <select value={this.state.value} onChange={this.handleChange}>
              <option value="100 meters">100 meters</option>
              <option value="1'000 meters">1'000 meters</option>
              <option value="10'000 meters">10'000 meters</option>
              <option value="100'000 meters">100'000 meters</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
    </form>*/}
        <div>
          <input type="text" name="lat" onChange={ e => this.setState({ inputLat: e.target.value})} />
          <input type="text" name="lat" onChange={ e => this.setState({ inputLat: e.target.value})} />
          <input type="text" name="lat" onChange={ e => this.setState({ inputLat: e.target.value})} />
          <button type="submit" onClick={this.handleClick} />
        </div>

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
            opacity={1}
            style={mapStyles}
            radius={10}




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
