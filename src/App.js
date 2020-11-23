import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header.js";
import Navbar from "./Navbar/Navbar";
import request from "./request";
import Result from "./Result/Result";

function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTreanding);

  return (
    <div className="app">
      <Header />
      <Navbar setSelectedOption={setSelectedOption} />
      <Result selectedOption={selectedOption} /> <br />
      <h2 className="uche"> This mini project was done by Nwanji H Uche</h2>
    </div>
  );
}

export default App;
