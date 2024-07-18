import React, { useState } from "react";

export const Ilkhom = () => {
    const [randomNumber, setRandomNumber] = useState(null)
    const [userInput, setUserInput] = useState('')
    const [result, setResult] = useState('')

    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * 11);
        setRandomNumber(randomNum);
        console.log(randomNum);
    }

    const handleInputChange = (event) => {
        setUserInput(event.target.value)
    }

    const checkForMatch = () => {
        if (parseInt(userInput) === randomNumber) {
            setResult('It is a match')
        } else {
            setResult('It is not a match')
        }
    }

  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="input-group mb-3 w-75">
        <input
          type="number"
          min="1"
          max="10"
          className="form-control"
          placeholder="Enter number from 1-10"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon2"
          onClick={generateRandomNumber}
        >
          Generate
        </button>
        <button onClick={checkForMatch} className="btn btn-outline-warning" type="button">
          Check
        </button>
      </div>

      <div className="card text-center w-50 mb-3">
        <div className="card-body">{randomNumber}</div>
      </div>

      <div className="card text-center w-50">
        <div className="card-body">{result}</div>
      </div>
    </div>
  );
};
