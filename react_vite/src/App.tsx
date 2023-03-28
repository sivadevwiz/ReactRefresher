import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import UseStateHook from "./hooks/UseStateHook";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="App"></div>
      <UseStateHook></UseStateHook>
    </>
  );
}

export default App;
