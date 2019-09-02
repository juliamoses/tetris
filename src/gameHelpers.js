export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

//creates new array from stage height array,
//for each row create new empty array for empty cells

export const createStage = () =>
	Array.from(Array(STAGE_HEIGHT), () =>
		new Array(STAGE_WIDTH).fill([0, 'clear'])
	)