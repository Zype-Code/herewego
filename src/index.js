import React from "react";
import ReactDOM from "react-dom";
import Map from "./map";

function App() {
  const data = [
  ]
  return <Map data={data} center={{ lat: -24.9923319, lng: 135.2252427 }} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
