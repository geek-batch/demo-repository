import React, { useState } from 'react';

const Random = () => {
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [userInput, setUserInput] = useState('');
    const [message, setMessage] = useState('');

    function generateRandomNumber() {
        return Math.floor(Math.random() * 10) + 1; 
    }

    function handleInputChange(event) {
        setUserInput(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const userNumber = parseInt(userInput);
        
        if (!isNaN(userNumber) && userNumber >= 1 && userNumber <= 10) {
            if (userNumber === randomNumber) {
                setMessage('Match!');
            } else {
                setMessage(`No match. The random number was: ${randomNumber}`);
            }
            setRandomNumber(generateRandomNumber());
            setUserInput('');
        } else {
            setMessage('Please enter a valid number between 1 and 10.');
        }
    }

    return (
        <div>
            <h2>Number Guessing Game</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter a number between 1 and 10:
                    <input
                        type="number"
                        value={userInput}
                        onChange={handleInputChange}
                        min="1"
                        max="10"
                        required
                    />
                </label>
                <button type="submit">Guess</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Random