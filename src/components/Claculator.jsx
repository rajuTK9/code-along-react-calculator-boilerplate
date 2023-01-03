import React, { useState } from "react";
import "./calculator.css";

export default function Claculator() {
  const [result, setResult] = useState("");

  function clickHandler(e) {
    setResult(result.concat(e.target.value));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    setResult(eval(result).toString());
  }

  return (
    <div>
      <div id="wrapper">
        <div id="app">
          <div data-reactroot="" className="calculator">
            <div className="calculator-display">
              <div className="auto-scaling-text">{result ? result : "0"}</div>
            </div>
            <div className="calculator-keypad">
              <div className="input-keys">
                <div className="function-keys">
                  <button className="calculator-key key-clear" onClick={clear}>
                    C
                  </button>
                  <button className="calculator-key key-sign">±</button>
                  <button
                    className="calculator-key key-percent"
                    onClick={clickHandler}
                  >
                    %
                  </button>
                </div>
                <div className="digit-keys">
                  <button
                    className="calculator-key key-0"
                    value={"0"}
                    onClick={clickHandler}
                  >
                    0
                  </button>
                  <button
                    className="calculator-key key-dot"
                    value={"."}
                    onClick={clickHandler}
                  >
                    ●
                  </button>
                  <button
                    className="calculator-key key-1"
                    value={"1"}
                    onClick={clickHandler}
                  >
                    1
                  </button>
                  <button
                    className="calculator-key key-2"
                    value={"2"}
                    onClick={clickHandler}
                  >
                    2
                  </button>
                  <button
                    className="calculator-key key-3"
                    value={"3"}
                    onClick={clickHandler}
                  >
                    3
                  </button>
                  <button
                    className="calculator-key key-4"
                    value={"4"}
                    onClick={clickHandler}
                  >
                    4
                  </button>
                  <button
                    className="calculator-key key-5"
                    value={"5"}
                    onClick={clickHandler}
                  >
                    5
                  </button>
                  <button
                    className="calculator-key key-6"
                    value={"6"}
                    onClick={clickHandler}
                  >
                    6
                  </button>
                  <button
                    className="calculator-key key-7"
                    value={"7"}
                    onClick={clickHandler}
                  >
                    7
                  </button>
                  <button
                    className="calculator-key key-8"
                    value={"8"}
                    onClick={clickHandler}
                  >
                    8
                  </button>
                  <button
                    className="calculator-key key-9"
                    value={"9"}
                    onClick={clickHandler}
                  >
                    9
                  </button>
                </div>
              </div>
              <div className="operator-keys">
                <button
                  className="calculator-key key-divide"
                  value={"/"}
                  onClick={clickHandler}
                >
                  ÷
                </button>
                <button
                  className="calculator-key key-multiply"
                  value={"*"}
                  onClick={clickHandler}
                >
                  ×
                </button>
                <button
                  className="calculator-key key-subtract"
                  value={"-"}
                  onClick={clickHandler}
                >
                  −
                </button>
                <button
                  className="calculator-key key-add"
                  value={"+"}
                  onClick={clickHandler}
                >
                  +
                </button>
                <button
                  className="calculator-key key-equals"
                  value={"="}
                  onClick={calculate}
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
