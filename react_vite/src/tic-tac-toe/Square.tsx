import "./styles.scss";

const Square = ({ isDisabled, value, onSquareClick, highlight }) => {
  return (
    <>
      <button
        disabled={isDisabled}
        onClick={onSquareClick}
        className={`square ${highlight ? "highlight" : null}`}
      >
        {value}
      </button>
    </>
  );
};

export default Square;
