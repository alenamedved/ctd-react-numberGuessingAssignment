import React, { useState } from "react";
import Button from "./Button";

function GuessControl({ onGuess, disabled }) {
  const [currentGuess, setCurrentGuess] = useState("");

  function handleInputChange(event) {
    setCurrentGuess(event.target.value);
  }

  function onSubmitGuess(e) {
    e.preventDefault();
    // Since the values from an HTML input are strings by default,
    //  convert to a number for the returned guess value
    //  by passing in the string to the Number function.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    if (currentGuess <= 100 && currentGuess >= 1) {
      onGuess(Number(currentGuess));
    } else {
      alert("Number better to be between 1 and 100");
    }
    setCurrentGuess("");
  }

  return (
    <form onSubmit={onSubmitGuess}>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <Button type="submit" disabled={disabled}>
        Submit Guess
      </Button>
    </form>
  );
}

export default GuessControl;
