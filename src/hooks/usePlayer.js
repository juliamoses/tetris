//returns arr w 2 items
import { useState, useCallback } from 'react';
import { randomTetromino } from '../tetrominos';

export const usePlayer = () => {
	//creating state  for player
	const [player, setPlayer] = useState({
		pos: { x: 0, y: 0},
		tetromino: randomTetromino().shape,
		collided: false,
	});

	const updatePlayerPos = ({ x, y, collided }) => {
		//sets player position
		setPlayer(prev => ({
			...prev,
			pos: { x: (prev.pos.x += x), y: (prev.pos.x += y)},
			collided,
		}))
	};

	const resetPlayer = useCallback(() => {
		setPlayer({
			pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
			tetromino: randomTetromino().shape,
			collided: false,

		})
	}, [])

	return [player, updatePlayerPos, resetPlayer];
}
