
const gameReducer = (state, action) => {
  
  switch (action.type) {
    case "INIT":
      return {
        ...state,
        numberToGuess: action.payload,
        numberOfGuesses: 0,
        latestGuess: null,
      };
    case "HANDLE_GUESS":
      return {
        ...state,
        latestGuess: action.payload,
        numberOfGuesses: state.numberOfGuesses + 1,
      };
    case "RESET":
      return {
        ...state,
        numberToGuess: action.payload,
        numberOfGuesses: 0,
        latestGuess: null,
      };
    default:
      throw new Error();
  }
};

export default gameReducer;

