const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;

  const noMovesLeft = squares.every((squareValue) => squareValue !== null);
  const nextPlayer = isXNext ? "X" : "O";

  const RenderStatusMessage = () => {
    if (winner) {
      return (
        <>
          winner is
          <span className={winner === "X" ? "text-green" : "text-red"}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <>
          {" "}
          <span className="text-red">O</span>and{" "}
          <span className="text-green">X</span> Tied
        </>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <>
          Next player is{" "}
          <span className={isXNext ? "text-green" : "text-red"}>
            {nextPlayer}
          </span>
        </>
      );
    }
    return null;
  };

  return <h2 className="status-message">{RenderStatusMessage()}</h2>;
};

export default StatusMessage;
