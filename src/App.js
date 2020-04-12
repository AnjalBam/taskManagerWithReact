import React from "react";
import Main from "./Components/Main";
import "./Stylesheets/App.css";

function App() {
  return (
    <div className="app">
      <h1>
        A simple <br /> Task Manager
      </h1>
      <Main />

      <small className="footer-text">
        Made by: Anjal Bam <br /> 2020
      </small>
    </div>
  );
}

export default App;
