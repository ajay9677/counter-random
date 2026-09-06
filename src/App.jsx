import { useState } from "react";
import "./App.css";

function App() {
  // Counter state
  const [count, setCount] = useState(0);

  // Random number state
  const [randomNumber, setRandomNumber] = useState(null);

  // Counter event handlers
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  // Generate random number between 1 and 100
  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  return (
    <div className="app">
      <h1>Counter & Random Number Generator</h1>

      <div className="container">
        {/* Counter Section */}
        <section className="card">
          <h2>Counter App</h2>

          <div className="count">{count}</div>

          {count === 0 && (
            <p className="message">Minimum limit reached</p>
          )}

          <div className="buttons">
            <button onClick={increment} className="increment">
              Increment
            </button>

            <button
              onClick={decrement}
              className="decrement"
              disabled={count === 0}
            >
              Decrement
            </button>

            <button onClick={reset} className="reset">
              Reset
            </button>
          </div>
        </section>

        {/* Random Number Section */}
        <section className="card">
          <h2>Random Number Generator</h2>

          <div className="random-number">
            {randomNumber === null
              ? "No number generated yet"
              : randomNumber}
          </div>

          <button
            onClick={generateRandomNumber}
            className="generate"
          >
            Generate Random Number
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
