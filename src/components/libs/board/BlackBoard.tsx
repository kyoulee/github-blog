import React from "react";

type BlackBoardProps = {
  className?: string;
};

function BlackBoard(props: BlackBoardProps) {
  return <div className={`absolute w-full h-full bg-black opacity-30 -z-10 ${props.className}`}></div>;
}

export default BlackBoard;
