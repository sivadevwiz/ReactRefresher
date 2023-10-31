import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import UseStateHook from "./hooks/UseStateHook";
import TicTacToe from "./tic-tac-toe/TicTacToe";
import ReactFetch from "./fetch/React_Fetch";
import ReactFetchClass from "./fetch/React_Fetch_Class";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="App"></div>
      <UseStateHook></UseStateHook>
      {/* <TicTacToe></TicTacToe> */}
      <ReactFetch></ReactFetch>
      <ReactFetchClass></ReactFetchClass>
    </>
  );
}

export default App;
