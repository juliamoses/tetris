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

	const updatePlayerPos = ({ x, y, collided }) => {
		setPlayer(prev => ({
			...prev,
			pos: { x: (prev.pos.x += x), y: (prev.pos.x += y)},
			collided,
		}))
	}

	return [player];
}
