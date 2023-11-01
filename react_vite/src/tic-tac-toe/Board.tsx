import "./styles.scss";
import Square from "./Square";

function Board({
  isGameOver,
  winSquares,
  squares,
  player,
  onSquareClick,
  isTie,
}) {
  // console.log("isTie..............", isTie);
  return (
    <>
      <div className={`board ${isTie ? "tied" : null}`}>
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

      {isTie && <div className="tie_msg">Match tied!</div>}
    </>
  );
}

export default Board;
