import { rows, cols } from '../../constants/dimensions';
import { updateSquareTerrain, addRow, addSquare } from '../../actions';
import Square from '../../components/Square';

export const setup = (store)=>{
	for(let row = 0; row < rows; row++) {
		store.dispatch(addRow());

		for(let col = 0; col < cols; col++) {
			let gridSquare = new Square(col, row);
			store.dispatch(addSquare(gridSquare));
		}
	}
}