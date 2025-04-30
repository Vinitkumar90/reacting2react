import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((prev) => (prev < 20 ? prev+1 : 20))  //not more than 20
  };

  const decreaseValue = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : 0) ) // no less than zero
  };

  return (
    <div>
      <h1>chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>add VALUE </button> <br />
      <button onClick={decreaseValue}>decrease VALUE </button>
    </div>
  );
}

export default App;
