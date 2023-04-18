import { useEffect, useState } from "react";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";
import { winCombo } from "./config";

import "./styles.scss";

function TicTacToe() {
  const [player, setPlayer] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isGameOver, setGameOver] = useState(false);
  const [winSquares, setWinSquares] = useState([]);
  const [score, setScore] = useState({ player_x: 0, player_o: 0 });

  //TODO - config for X to start first

  const handleSquareClick = (squareIndex: number) => {
    const updatedSquares = squares.map((value, index) => {
      // return is must as we use map
      if (index === squareIndex && value === null) {
        player == "X" ? setPlayer("O") : setPlayer("X");
        return player;
      } else {
        return value;
      }
    });

    setSquares(updatedSquares);

    const winning_squares = checkWinning(updatedSquares);

    const updateScore = (player) => {
      const { player_x, player_o } = score;
      if (player === "X") {
        setScore({ ...score, player_x: player_x + 1 });
      }
      if (player === "O") {
        setScore({ ...score, player_o: player_o + 1 });
      }
    };

    if (winning_squares !== null) {
      updateScore(player);
      setGameOver(true);
      setPlayer(""); // to remove the highlight color
      setWinSquares(winning_squares);
    }
  };

  const checkWinning = (squares) => {
    for (let i = 0; i < winCombo.length; i++) {
      const [a, b, c] = winCombo[i];

      console.log("a,b,c", a, b, c);
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return winCombo[i];
      }
    }
    return null;
  };

  const resetBoard = () => {
    console.log("Reset Board");
    setGameOver(false);
    setSquares(Array(9).fill(null));
    setWinSquares([]);
    setPlayer("X");
  };

  return (
    <>
      <ScoreBoard
        isGameOver={isGameOver}
        player={player}
        score={score}
      ></ScoreBoard>
      <div className="game">
        <div className="game-board">
          <Board
            isGameOver={isGameOver}
            winSquares={winSquares}
            squares={squares}
            player={player}
            onSquareClick={!isGameOver ? handleSquareClick : null}
          ></Board>
        </div>
        <div className="reset">
          <button onClick={() => resetBoard()}>Reset</button>
        </div>
        <div className="game-info">
          <h4>Steps</h4>
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
