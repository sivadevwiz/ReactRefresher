import "./styles.scss";
import Square from "./Square";

function Board({ isGameOver, winSquares, squares, player, onSquareClick }) {
  return (
    <div className="board">
      {squares.map((value, index) => {
        return (
          <Square
            isDisabled={isGameOver}
            value={value}
            onSquareClick={() => onSquareClick(index)}
            highlight={winSquares.includes(index)}
          ></Square>
        );
      })}
    </div>
  );
}

export default Board;
