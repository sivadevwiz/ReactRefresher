import React, { useState, useEffect } from "react";

interface LikeButtonProps {
  likesCount: number;
}

const LikeButton = ({ likesCount }: LikeButtonProps) => {
  const [count, setCount] = useState(likesCount);
  const [isClicked, setClicked] = useState(false);

  //   useEffect(() => {
  //     console.log("useEffect()");
  //     !isClicked ? setCount((prev) => prev + 1) : setCount((prev) => prev - 1);
  //   }, [count]);

  const handleCount = () => {
    !isClicked ? setCount((prev) => prev + 1) : setCount((prev) => prev - 1);

    setClicked(!isClicked);
  };

  return (
    <div>
      <button onClick={handleCount}> Like {count}</button>
    </div>
  );
};

export default LikeButton;
