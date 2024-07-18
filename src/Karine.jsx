import React from "react";

const Karine = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 11);
    setRandomNumber(randomNum);
    setMessage("");
  };

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const checkGuess = () => {
    if (parseInt(guess) === randomNumber) {
      setMessage("Match!");
    } else {
      setMessage("No match, try again.");
    }
  };

  return (
    <div>
      <button onClick={generateRandomNumber}>Randomize</button>
      <input
        type="number"
        value={guess}
        onChange={handleGuessChange}
        placeholder="Enter your guess"
      />
      <button onClick={checkGuess}>Check Guess</button>
      <div>{message}</div>
    </div>
  );
};

export default Karine;
