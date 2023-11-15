const Square = ({ value, onClick, isWinnig }) => {
  const colorclassname = value === "X" ? "text-green" : "text-red";
  const winningclass = isWinnig ? "winning" : "";
  return (
    <button
      type="button"
      className={`square ${colorclassname} ${winningclass}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Square;
