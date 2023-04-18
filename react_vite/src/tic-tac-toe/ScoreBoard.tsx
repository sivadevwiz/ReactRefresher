import { useEffect, useState } from "react";

function ScoreBoard({ isGameOver, player, score }) {
  console.log("player...............", player);
  const [current_player, setPlayer] = useState("");

  const checkPlayer = () => {
    isGameOver ? null : setPlayer(player);
  };

  useEffect(() => {
    checkPlayer();
  }, [isGameOver, player]);

  return (
    <div className="score_wrap">
      <div className="scoreboard">
        <div
          className={`player_wrap ${player === "X" ? "current_player" : null}`}
        >
          <div className="player p_x">Player X</div>
          <div className="score p_x">{score.player_x}</div>
        </div>

        {/* <div>
        <h4>Restart</h4>
      </div> */}

        <div
          className={`player_wrap ${player === "O" ? "current_player" : null}`}
        >
          <div className="player p_o">Player O</div>
          <div className="score p_o">{score.player_o}</div>
        </div>
      </div>
      <div
        className={`winner ${
          isGameOver && current_player === "O" ? "player_o" : null
        }`}
      >
        <div className={`wins ${isGameOver ? "show" : null}`}>Wins!</div>
      </div>
    </div>
  );
}

export default ScoreBoard;
