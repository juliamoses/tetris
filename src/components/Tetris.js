import React, { useState } from 'react';
//styled components
import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris';
//custom hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { createStage } from "../gameHelpers";

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  //hooks for time terminons drop, game over false bcuz game begins
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  //usong custom hooks, getting player
  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log('re-render')

  const movePlayer = dir => {
    //moving left & right
    updatePlayerPos({ x: dir, y: 0 });
  }

  const startGame = () => {
    //resets everything
    setStage(createStage());
    resetPlayer();
  }

  const drop = () => {
    updatePlayerPos({ x:0, y:1, collided: false })
  }

  const dropPlayer = () => {
    drop();
  }

  const move = ({ keyCode }) => {
    //changes termino position based on keycodes
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      }
    }
  }
  

  // if the game is over will display
  return (
    <StyledTetrisWrapper role ="button" tabIndex="0" onKeyDown="{e => move(e)}">
    <StyledTetris>
      <Stage stage={stage} />
      <aside>
        {gameOver ? (
          <Display gameOver={gameOver} text="Game Over"/>
        ) : (
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        )}
        <StartButton onClick={startGame} />
      </aside>
      </StyledTetris>
      </StyledTetrisWrapper>
  );
};

export default Tetris;
