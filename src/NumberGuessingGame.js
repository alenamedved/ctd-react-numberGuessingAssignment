import React, { useEffect, useReducer } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";
import gameReducer from "./gameReducer";
/**
 * Returns a random integer number from 1-100 inclusive
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;

function NumberGuessingGame() {
  const [gameState, dispatcher] = useReducer(gameReducer, {
    numberToGuess: getRandomNumber(),
    numberOfGuesses: 0,
    latestGuess: null,
  });

  useEffect(() => {
    console.log('inside useEffect')
    dispatcher({
      type: "INIT",
      payload: getRandomNumber(),
    });
  }, []);

  function handleGuess(guess) {
    dispatcher({
      type: "HANDLE_GUESS",
      payload: guess,
    });
  }

  function handleReset() {
    dispatcher({
      type: "RESET",
      payload: getRandomNumber(),
    });
  }

  const isCorrectGuess = gameState.latestGuess === gameState.numberToGuess;
  const isGameOver =
    isCorrectGuess || gameState.numberOfGuesses === MAX_ATTEMPTS;
  const submitButtonDisabled = isGameOver;
  console.log(gameState.numberToGuess)
  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={handleGuess} disabled={submitButtonDisabled} />
      {isGameOver && (
        <GameOver
          hasWon={isCorrectGuess}
          onReset={handleReset}
          disabled={submitButtonDisabled}
        />
      )}
      {!isGameOver && (
        <GuessMessage
          guess={gameState.latestGuess}
          numberToGuess={gameState.numberToGuess}
          numberOfGuesses={gameState.numberOfGuesses}
        />
      )}
    </div>
  );
}

export default NumberGuessingGame;
