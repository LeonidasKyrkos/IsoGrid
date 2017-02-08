import { colWidth, rowHeight } from '../constants/dimensions';

export const getCentreOfSquare = (square) => {
	let x = (square.position.col * colWidth) + (colWidth/2);
	let y = (square.position.row * rowHeight) + (rowHeight/2);

	return { x, y };
}