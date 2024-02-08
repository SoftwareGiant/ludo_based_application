import React from "react";
import GameHistoryPc from "./GameHistoryPc";
import GameHistoryMob from "./GameHistoryMob";

const GameHistoryComponent = () => {
  const screenWidth = window.innerWidth;

  const mobBreakpoint = 390;
  const pcBreakpoint = 1085;

  if (screenWidth <= mobBreakpoint) {
    return <GameHistoryMob />;
  }
 else {
    return <GameHistoryPc />;
  }
  
};

export default GameHistoryComponent;
