import React from 'react';
import Cell from './Cell';


const Stage = ({ stage }) => (
	// maping through stage array to get row, each is array w cells
	// for each cell render cell component
  <div>
    {stage.map(row => row.map((cell, x) => 
    <Cell key={x} type={cell[0]} />))}
  </div>
);

export default Stage;