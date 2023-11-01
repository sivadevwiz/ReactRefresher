import { useEffect, useState } from "react";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";
import { winCombo } from "./config";

import "./styles.scss";

function TicTacToe() {
  const [player, setPlayer] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory]: any[] = useState([Array(9).fill(null)]);
  const [isGameOver, setGameOver] = useState(false);
  const [winSquares, setWinSquares] = useState([]);
  const [score, setScore] = useState({ player_x: 0, player_o: 0 });
  const [currentMove, setCurrentMove] = useState(0);
  // const [steps, setSteps] = useState(Array(9).fill(null));

  //TODO - config for X to start first

  useEffect(() => {
    if (currentMove > 8) {
      setGameOver(true);
      setPlayer("");
      // setCurrentMove(0);
      // setHistory([Array(9).fill(null)]);
    }
  }, [currentMove]);

  useEffect(() => {
    if (isGameOver) {
      setHistory([Array(9).fill(null)]);
    }
  }, [isGameOver]);

  const countItems = (array) => {
    let count = 0;
    array.forEach((element) => {
      if (element !== null) count++;
    });
    console.log("Count.............", count);
    return count;
  };

  // function updateCurrentMove(updatedSquares) {
  //   setCurrentMove(countItems(updatedSquares));
  // }

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
    setCurrentMove(countItems(updatedSquares));
    // console.log("updatedSquares...........", updatedSquares);

    // console.log("Count.............", countItems(updatedSquares));

    // console.log("currentMove..............", currentMove);
    // console.log("updatedSquares...........", updatedSquares);
    setSquares(updatedSquares);
    setHistory([...history, updatedSquares]);

    const winning_squares: any = checkWinning(updatedSquares);

    // console.log("winning_squares...........", winning_squares);
    // console.log("currentMove...........", currentMove);

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

      // console.log("a,b,c", a, b, c);
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
    setCurrentMove(0);
    setHistory([Array(9).fill(null)]);
  };

  // console.log("squares..............", squares);
  // console.log("history..............", history);

  const gotoMove = (move) => {
    console.log("array to show........", history[move]);
    const updatedSquares = [...history.slice(0, move + 1)];
    // console.log("updatedSquares...........", updatedSquares);
    // console.log("squares...........", squares);
    setSquares(history[move]);
    setHistory(updatedSquares);
    setCurrentMove(move);
    // console.log("history...........", history);
  };

  const steps = history.map((square, move) => {
    // console.log("history.........", history);
    if (square !== null) {
      // console.log("square..............", square);
      // console.log("move..............", move);
      let description = move > 0 ? `Go to move ${move}` : "Go to start";

      if (currentMove !== 0) {
        return (
          <li>
            <button onClick={() => gotoMove(move)} className="button">
              {description}
            </button>
          </li>
        );
      }
    }
  });

  // console.log("winSquares..............", winSquares);

  return (
    <>
      <ScoreBoard
        isGameOver={isGameOver}
        player={player}
        score={score}
        isTie={
          isGameOver && winSquares.length === 0 && currentMove > 8
            ? true
            : false
        }
      ></ScoreBoard>
      <div className="game">
        <div className="game-board">
          <Board
            isGameOver={isGameOver}
            winSquares={winSquares}
            squares={squares}
            player={player}
            onSquareClick={!isGameOver ? handleSquareClick : null}
            isTie={
              isGameOver && winSquares.length === 0 && currentMove > 8
                ? true
                : false
            }
          ></Board>
        </div>
        <div className="reset">
          <button onClick={() => resetBoard()}>Reset</button>
        </div>
        <div className="game-info">
          <h4>{currentMove}</h4>
          <h4>{steps}</h4>
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
