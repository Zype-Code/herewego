import React from "react";
import { Map, GoogleApiWrapper, HeatMap } from "google-maps-react";
import "./index.css";
import { Bar } from "react-chartjs-2";

var mapStyles = {
  width: "75%",
  height: "100%",
};

const state = {
  labels: ["60-80", "60-40", "40-20", "20-10", "10-0"],
  datasets: [
    {
      label: "Age Group",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [100, 50, 75, 25, 0],
    },
  ],
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
      "rgba(255, 0, 0, 1)",
    ];
    return (
      <div className="map-container">
        <div id="chart">
          <Bar
            data={state}
            options={{
              maintainAspectRatio: true,

              scales: {
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "Number of Cases",
                    },
                  },
                ],
                xAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "Age Group",
                    },
                  },
                ],
              },

              title: {
                display: true,
                text: "Average covid per semester",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
          <Bar
            data={state}
            options={{
              responsive: true,
              maintainAspectRatio: true,

              scales: {
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "Number of Cases",
                    },
                  },
                ],
                xAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "Age Group",
                    },
                  },
                ],
              },

              title: {
                display: true,
                text: "Average covid per semester",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
            />
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
            opacity={0.4}
            style={mapStyles}
            radius={5}
            dissapation={false}
          />
        </Map>{" "}
        */
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDpG-NeL-XGYAduQul2JenVr86HIPITEso",
  libraries: ["visualization"],
})(MapContainer);
