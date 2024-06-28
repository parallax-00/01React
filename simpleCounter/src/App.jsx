import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  function addValue() {
    setCount(count + 1);
  }
  function subValue() {
    setCount(count - 1);
  }
  function setZero() {
    setCount(count = 0);
  }

  return (
    <>
      <div id="container1">
        <h1 id="head">
          Simple Counter targetting towards UI update functionality of React
        </h1>
      </div>
      <div id="buttons">
        <button onClick={addValue} class="butt" id="adder">
          Add
        </button>
        <button onClick={subValue} class="butt" id="subtractor">
          Subtract
        </button>
        <button onClick={setZero} class="butt" id="subtractor">
          Reset
        </button>
      </div>
      <div class="displays">
      <div id="display1">
        <button class="count">Count:{count}</button>
        <button class="count">Count:{count}</button>
        <button class="count">Count:{count}</button>
        <button class="count">Count:{count}</button>
        <button class="count">Count:{count}</button>
        <button class="count">Count:{count}</button>
        <button class="count">Count:{count}</button>
      </div>
      <div id="display2">
        <button class="button-30" role="button">Count:{count}</button>
        <button class="button-30" role="button">Count:{count}</button>
        <button class="button-30" role="button">Count:{count}</button>
        <button class="button-30" role="button">Count:{count}</button>
        <button class="button-30" role="button">Count:{count}</button>
        <button class="button-30" role="button">Count:{count}</button>
        <button class="button-30" role="button">Count:{count}</button>
        </div>
        </div>
    </>
  );
}

export default App;
