import Board from "./components/Board";
import { useState } from "react";
import "./styles.scss";
import { calculateWinner } from "./winner";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNest] = useState(false);
  const nextPlayer = isXNext ? "X" : "O";

  const winner = calculateWinner(squares);
  console.log(winner);
  const statusmessage = winner
    ? `Winner is ${winner}`
    : `Next player is ${nextPlayer}`;

  const handleSquareClick = (clickedPosition) => {
    if (squares[clickedPosition] || winner) {
      return;
    }
    setSquares((currentSquares) => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? "X" : "O";
        }
        return squareValue;
      });
    });
    setIsXNest((currentIXNest) => !currentIXNest);
  };

  return (
    <div className="app">
      <h2>{statusmessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
