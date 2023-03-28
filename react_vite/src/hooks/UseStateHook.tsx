import React, { useState } from "react";
import "./styles.scss";

function UseStateHook() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrap">
      <div className="button" onClick={() => setCount(count - 1)}>
        -
      </div>
      <div className="counter">{count}</div>
      <div className="button" onClick={() => setCount(count + 1)}>
        +
      </div>
    </div>
  );
}

export default UseStateHook;
