import React, { useState } from "react";

const Karine = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [showResult, setShowResult] = useState(false);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 11);
    setRandomNumber(randomNum);
    setMessage("");
    setShowResult(false);
  };

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const checkGuess = () => {
    setShowResult(true);
    if (parseInt(guess) === randomNumber) {
      setMessage("Match!");
    } else {
      setMessage("No match, try again.");
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={generateRandomNumber}>
        Randomize
      </button>
      <input
        type="number"
        value={guess}
        onChange={handleGuessChange}
        placeholder="Enter your guess"
        style={{ marginLeft: "10px", marginRight: "10px" }}
      />
      <button className="btn btn-warning" onClick={checkGuess}>
        Check Guess
      </button>
      {showResult && (
        <div style={{ marginTop: "10px" }}>
          {message && <p>{message}</p>}
          {randomNumber !== null && (
            <p>The random number was: {randomNumber}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Karine;
