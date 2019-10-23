//returns arr w 2 items
import { useState } from 'react';
import { randomTetromino } from '../tetrominos';

export const usePlayer = () => {
	//creating state  for player
	const [player, setPlayer] = useState({
		pos: { x: 0, y: 0},
		tetromino: randomTetromino().shape,
		collided: false,
	});
	return [player];
}

