import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Programs from "./Components/Programs";

function App() {
  return (
    <div className="App">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <Programs />
    </div>
  );
}

export default App;
