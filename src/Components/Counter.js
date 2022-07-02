import React from "react";
import "./Counter.css"
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC" });
  };

  const reset = () => {
    dispatch({ type: "RES" });
  };

  const decrement = () => {
    dispatch({ type: "DEC" });
  };

  let color = counter > 0 ? "#2a9d8f" : counter < 0 ? "#e63946" : "#333333"
  return (
    <div className="counter">
      <h1 className="counter__heading">Counter</h1>
      <h1 style={{color: color}} className="counter__title">{counter}</h1>
      <button className="counter_btn inc" onClick={increment}>
        Increment
      </button>
      <button className="counter_btn res" onClick={reset}>
        Reset
      </button>
      <button className="counter_btn dec" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
