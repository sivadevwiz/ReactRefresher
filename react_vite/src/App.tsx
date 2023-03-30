import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import UseStateHook from "./hooks/UseStateHook";
import TicTacToe from "./tic-tac-toe/TicTacToe";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="App"></div>
      {/* <UseStateHook></UseStateHook> */}
      <TicTacToe></TicTacToe>
    </>
  );
}

export default App;
