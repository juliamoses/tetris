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

  }

  const startGame = () => {

  }

  const drop = () => {

  }

  const dropPlayer = () => {

  }

  const move = ({ keycode }) => {
    if (!gameOVer) {
      
    }else if (keyCode === 38) {
      movePlayer(-1);
    }else if (keyCode === 39) {
      movePlayer(1);
    }else if(keyCode === 40) {
      dropPlayer();
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
        <StartButton />
      </aside>
      </StyledTetris>
      </StyledTetrisWrapper>
  );
};

export default Tetris;
