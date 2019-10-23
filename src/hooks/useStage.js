//returns arr w 2 items
import { useState } from 'react';
import { createStage } from '../gameHelpers'

export const useStage = () => {
	//creating state  for player
	const [stage, setStage] = useState(createStage());
	return [stage, setStage];
}