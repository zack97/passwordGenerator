import React from "react";
import PasswordGenerator from "./PasswordGenerator";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <h2>Pass Generator</h2>
      <PasswordGenerator />
    </div>
  );
};

export default App;
